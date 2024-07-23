"use client";

import { Suspense } from "react";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

import logo from "@/assets/agidesk-logo.svg";

function Page() {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  return (
    <main className="flex min-h-screen  bg-white bg-gradient-to-tl from-[#FDBA74] via-[#FEF3C7] to-[#FFF7ED]">
      <aside className="px-[96px] pt-12 w-[60%] gap-1 flex-col flex">
        <header>
          <Image alt="logo" src={logo} width={169} />
        </header>

        <section className=" mt-20 h-full flex-col flex">
          <h1 className=" text-5xl font-marriweather text-font_color-strong leading-[3.5rem] font-extrabold">
            Seja bem vindo.
            <br /> Agora você já pode se logar e começar a sua jornada.
          </h1>

          <p className=" text-2xl mt-10 text-font_color-sub_title">
            Pedimos desculpa a página de Login está em construção no momento...
          </p>

          <p className="max-w-2xl text-2xl  text-font_color-default">{email}</p>

          <footer className="mt-auto mb-20 w-full">
            <p className="text-font_color-sub_title">
              Feito com carinho por
              <span className="font-semibold ml-1 text-primary">Agidesk.</span>
            </p>

            <div className="flex gap-5 justify-between mt-8"></div>
          </footer>
        </section>
      </aside>
    </main>
  );
}

export default function Welcome() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}
