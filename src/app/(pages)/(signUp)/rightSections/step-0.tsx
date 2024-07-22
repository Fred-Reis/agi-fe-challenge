"use client";

import { useCallback, useEffect, useState } from "react";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, Input } from "@/components";

import { Microsoft, Google } from "@/assets/brands";
import { Lock } from "@/assets/lock";
import { Mail } from "@/assets/mail";

import visible from "@/assets/visble.png";
import hidden from "@/assets/hidden.png";

import api from "@/app/server/api";

interface Step1Props {
  updateState: (string: any) => void;
  handleNextStep: () => void;
}

const formSchema = (providers: string[]) =>
  z
    .object({
      email: z
        .string()
        .min(1, "O email é obrigatório")
        .email("O email informado não é válido"),
      password: z
        .string({ required_error: "A Senha é obrigatória" })
        .min(6, "A senha precisa ter no mínimo 6 dígitos"),
    })
    .refine(
      ({ email }) => {
        function getEmailProvider(email: string) {
          const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
          if (!emailRegex.test(email)) return email;
          const emailSplit = email.split("@")[1].split(".");
          return emailSplit[0];
        }

        return !providers.includes(getEmailProvider(email));
      },
      {
        message: "O email informado não é um email comercial",
        path: ["email"],
      }
    );

export const Step0 = ({ updateState, handleNextStep }: Step1Props) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [providers, setProviders] = useState<string[]>([]);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: zodResolver(formSchema(providers)),
    mode: "onSubmit",
  });

  async function getProviders() {
    const response = await api.get("/providers");

    const providers = response.data.providers;

    const providersNames = providers.map((provider: any) => provider.name);

    setProviders(providersNames);
  }

  const togglePasswordVisibility = useCallback(() => {
    setVisiblePassword(!visiblePassword);
  }, [visiblePassword]);

  async function handleSignIn(data: any) {
    updateState({ type: "password", payload: data.password });
    updateState({ type: "email", payload: data.email });
    handleNextStep();
  }

  useEffect(() => {
    getProviders();
  }, []);

  // TODO implement login social

  return (
    <>
      <section className="flex flex-col items-center mt-auto 2xl:mt-24 w-full max-w-[445px] rounded-2xl bg-[#fff] shadow-[0_-6px_8px_rgba(249,115,22,0.1)] p-9">
        <div className="flex flex-col w-full">
          <p className="self-start font-bold mb-[10px]">
            Entre com seu email profissional
          </p>

          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message as any}
            </p>
          )}
          <Input
            icon={<Mail />}
            variant="icon"
            placeholder="email@empresa.com.br"
            classname="mb-6"
            {...register("email")}
          />

          <p className="self-start font-bold mb-[10px]">Crie uma senha</p>

          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password?.message as any}
            </p>
          )}
          <Input
            passwordIcon={visiblePassword ? hidden : visible}
            type={!visiblePassword ? "password" : "text"}
            handleToggle={togglePasswordVisibility}
            placeholder="Crie a sua senha"
            variant="icon"
            classname="mb-8"
            icon={<Lock />}
            {...register("password")}
          />

          <Button
            classname="shadow-[0_10px_15px_-3px_rgba(249,115,22,0.4)]"
            onClick={handleSubmit(handleSignIn)}
            text="Continue"
          />

          <div className="my-10">
            <div className=" w-full h-0.5 bg-[#E2E8F0]" />
            <p className="text-center text-font_color-sub_title bg-[#fff] w-max mx-auto mt-[-15px] px-3">
              ou cadastre-se com
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              onClick={() => alert("O login social ainda está em construção")}
              icon={<Google />}
              variant="icon"
              text="Google"
            />

            <Button
              onClick={() => alert("O login social ainda está em construção")}
              icon={<Microsoft />}
              text="Microsoft"
              variant="icon"
            />
          </div>

          <span className="text-center text-font_color-sub_title text-sm mt-8">
            Ao continuar você concorda com os <br />{" "}
            <Link href="#" className="font-semibold underline">
              termos de serviço
            </Link>
            {" e "}
            <Link href="#" className="font-semibold underline">
              políticas de privacidade.
            </Link>
          </span>
        </div>
      </section>

      <Link
        href="#"
        className="text-center text-primary text-base font-semibold mt-8"
      >
        Já possuo uma conta
      </Link>
    </>
  );
};
