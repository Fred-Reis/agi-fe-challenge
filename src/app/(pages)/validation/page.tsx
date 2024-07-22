"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

import logo from "@/assets/agidesk-logo.svg";
import { Button, LanguagesDropdown } from "@/components";
import { Google, Microsoft, Apple } from "@/assets/brands";
import Link from "next/link";

export default function SignUp() {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  return (
    <main className="flex min-h-screen  bg-white ">
      <aside className="px-[96px] pt-12 w-[60%] gap-1 flex-col flex">
        <header>
          <Image alt="logo" src={logo} width={169} />
        </header>

        <section className=" mt-20 h-full flex-col flex">
          <h1 className="max-w-2xl text-5xl font-marriweather text-font_color-strong leading-[3.5rem] font-extrabold">
            Pronto.
            <br /> Agora verifique seu e-mail
          </h1>

          <p className="max-w-2xl text-2xl mt-10 text-font_color-sub_title">
            Enviamos um link de confirmação para o email
          </p>

          <p className="max-w-2xl text-2xl  text-font_color-default">{email}</p>

          <div className="flex gap-5 justify-between mt-8">
            <Button
              onClick={() =>
                (window.location.href = "https://mail.google.com/")
              }
              smallIcon={<Google />}
              text="Abrir Gmail"
              variant="smallIcon"
            />

            <Button
              onClick={() =>
                (window.location.href = "https://www.icloud.com/mail/")
              }
              smallIcon={<Apple />}
              text="Abrir Apple Mail"
              variant="smallIcon"
            />

            <Button
              onClick={() =>
                (window.location.href = "https://outlook.live.com/")
              }
              smallIcon={<Microsoft />}
              text="Abrir Outlook"
              variant="smallIcon"
            />
          </div>

          <footer className="mt-auto mb-20 w-full">
            <p className="text-font_color-sub_title">
              Não recebeu o email? Verifique sua pasta de spam ou{" "}
              <Link href="#" className="font-semibold underline text-primary">
                reenvie o email.
              </Link>
            </p>

            <div className="flex gap-5 justify-between mt-8"></div>
          </footer>
        </section>
      </aside>

      <aside className="flex-1">
        <section className="flex flex-col h-full w-full items-center py-12 px-24 bg-gradient-to-br from-[#FDBA74] via-[#FEF3C7] to-[#FFF7ED]">
          <header className="self-end">
            <LanguagesDropdown />
          </header>
        </section>
      </aside>
    </main>
  );
}
