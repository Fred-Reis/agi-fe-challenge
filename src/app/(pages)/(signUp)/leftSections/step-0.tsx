import { Indigo, Decathlon, TokStok, Nba, Unimed } from "@/assets/brands";

const BRANDS = [
  { name: "indigo", icon: Indigo },
  { name: "tokstok", icon: TokStok },
  { name: "decathlon", icon: Decathlon },
  { name: "nba", icon: Nba },
  { name: "unimed", icon: Unimed },
];

export const Step0 = () => (
  <section className=" mt-20 h-full flex-col flex">
    <h1 className="max-w-2xl text-5xl font-marriweather text-font_color-strong leading-[3.5rem] font-extrabold">
      Comece sua avaliação gratuita da Agidesk
    </h1>
    <p className="max-w-2xl text-2xl mt-10 text-font_color-sub_title">
      Simplifique seus processos e agilize resultados testando todos os recursos
      da Agidesk.
    </p>
    <footer className="mt-auto mb-20 w-full">
      <p className="text-xl text-font_color-weak font-marriweather font-bold">
        Empresas que simplificam seu negócio com a Agidesk.
      </p>
      <div className="flex gap-5 justify-between mt-8">
        {BRANDS.map((brand) => (
          <span key={brand.name}>{brand.icon()}</span>
        ))}
      </div>
    </footer>
  </section>
);
