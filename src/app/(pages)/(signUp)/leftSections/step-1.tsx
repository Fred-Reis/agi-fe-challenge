import { useCallback, useState } from "react";

import { PhoneNumberUtil } from "google-libphonenumber";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import { StepProgressBar, Chips, Input } from "@/components";

import { FONTS } from "@/app/utils/supplies";

interface Step1Props {
  updateState: (string: any) => void;
  handleNextStep: () => void;
  step: number;
}

const formSchema = z.object({
  fullName: z.string().min(6, "O nome deve conter pelo menos 6 dígitos"),
});

const phoneUtil = PhoneNumberUtil.getInstance();

function phoneValidation(phone: string) {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
}

export const Step1 = ({ handleNextStep, updateState, step }: Step1Props) => {
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [chipsError, setChipError] = useState<string | null>(null);
  const [chipsData, setChipsData] = useState<string | null>(null);
  const [phone, setPhoneNumber] = useState("");

  const isPhoneValid = phoneValidation(phone);

  const {
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register,
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
  });

  const handleGetChipsData = useCallback((value: string) => {
    setChipsData((prevState) => (prevState === value ? null : value));
    setChipError(null);
  }, []);

  async function handleSignIn(data: any) {
    if (!chipsData) {
      setChipError("Selecione uma categoria");
      return;
    }

    if (!phone) {
      setPhoneError("O telefone é obrigatório");
      return;
    }

    if (!isPhoneValid) {
      setPhoneError("O telefone informado é inválido");
      return;
    }

    updateState({ type: "fullName", payload: data.fullName });
    updateState({ type: "phoneNumber", payload: phone });
    updateState({ type: "fromWhere", payload: chipsData });
    handleNextStep();
  }

  const isDisabled = !isDirty || !isValid || !chipsData || !phone;

  return (
    <section className=" mt-12 md:mt-10 h-full flex-col flex">
      <h1 className="max-w-2xl text-5xl font-marriweather text-font_color-strong leading-[3.5rem] font-extrabold">
        Conte sobre você
      </h1>

      <section className="w-[437px] mt-12 md:mt-10">
        <p className="self-start font-bold text-lg mb-[10px]">
          Qual seu nome completo?
        </p>

        {errors.fullName && (
          <p className="text-red-500 text-sm">
            {errors.fullName.message as any}
          </p>
        )}

        <Input
          placeholder="Nome e sobrenome"
          classname="mb-10"
          {...register("fullName")}
        />

        <p className="self-start font-bold text-lg mb-[10px]">
          Qual seu número de telefone?
        </p>

        {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}

        <PhoneInput
          defaultCountry="br"
          inputStyle={{
            height: "40px",
            width: "100%",
            color: "#334155",
            border: "solid 2px #cbd5e1",
            borderRadius: "0 8px 8px 0",
          }}
          countrySelectorStyleProps={{
            buttonStyle: {
              width: "86px",
              height: "40px",
              backgroundColor: "#F8FAFC",
              borderRadius: "8px 0 0 8px",
              border: "solid 2px #cbd5e1",
              borderRightWidth: "1px",
            },

            flagStyle: {
              marginRight: "10px",
            },
          }}
          value={phone}
          onChange={(phone) => setPhoneNumber(phone)}
          placeholder="(99) 99999-9999"
        />
      </section>

      <section className="w-[707px] md:w-[690px] mt-12 md:mt-10">
        {chipsError && <p className="text-red-500 text-sm">{chipsError}</p>}

        <p className="self-start font-bold text-lg mb-5">
          Como você nos conheceu?
        </p>

        <ul className="flex flex-wrap gap-4">
          {FONTS.map((font) => (
            <Chips
              key={font}
              title={font}
              color={
                chipsData === font ? "text-primary" : "text-font_color-default"
              }
              bgColor={chipsData === font ? "bg-orange-100" : ""}
              borderColor={chipsData === font ? "border-orange-400" : ""}
              handleAction={() => handleGetChipsData(font)}
            />
          ))}
        </ul>
      </section>

      <footer className="mt-auto mb-8 2xl:mb-12 w-full">
        <StepProgressBar
          handleNextStep={handleSubmit(handleSignIn)}
          disabled={isDisabled}
          step={step}
        />
      </footer>
    </section>
  );
};
