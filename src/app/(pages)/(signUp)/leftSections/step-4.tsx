import { useRouter } from "next/navigation";

import { Chips, StepProgressBar } from "@/components";

import { parseDepartmentsValues } from "@/app/utils/functions";
import { COLORS } from "@/app/utils/supplies";

import { Picker } from "@/assets/picker";
import { Net } from "@/assets/net";

import api from "@/app/server/api";

interface Step4Props {
  handleGetUrlData: (string: any) => void;
  handleGetColor: (string: any) => void;
  updateState: (string: any) => void;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  color: string | null;
  step: number;
  state: any;
}

export const Step4 = ({
  handlePreviousStep,
  handleGetUrlData,
  handleGetColor,
  state,
  color,
  step,
}: Step4Props) => {
  const router = useRouter();

  async function handleSubmit() {
    delete state.step;
    const form = {
      ...state,
      department: parseDepartmentsValues(state.department),
    };

    const response = await api.post("/users", form);

    if (response.status === 201) {
      router.push(`/validation?email=${state.email}`);
    }
  }

  return (
    <section className=" mt-12 md:mt-7 h-full flex-col flex">
      <h1 className="max-w-2xl text-[40px] font-marriweather text-font_color-strong leading-10 font-extrabold">
        Personalize a sua plataforma
      </h1>

      <section className="w-[707px] mt-12 md:mt-7">
        <p className="self-start font-bold text-lg mb-5">
          Qual nome você deseja para o endereço URL da plataforma?
        </p>
        <InputUrl onChange={handleGetUrlData} />

        <p className="self-start text-font_color-sub_title text-sm mb-5 mt-[10px]">
          Este será o ID da sua empresa. Ele será usado nos portais do cliente e
          do agente.
        </p>
      </section>

      <section className="w-[700px] mt-9 md:mt-2">
        <p className="self-start font-bold text-lg mb-2">
          Por último, escolha a cor da plataforma
        </p>

        <p className="self-start text-font_color-sub_title text-sm mb-8">
          Se quiser, você pode escolher a cor mais tarde.
        </p>

        <ul className="flex flex-wrap gap-4">
          {COLORS.map((value) => (
            <Chips
              key={value.name}
              title={value.name}
              color={color === value.name ? "text-[#fff]" : value.primary_font}
              bgColor={color === value.name ? value.primary_color : ""}
              borderColor={value.border_color}
              handleAction={() => handleGetColor(value.name)}
              iconColor={
                color === value.name
                  ? value.secondary_color
                  : value.primary_color
              }
            />
          ))}
        </ul>
      </section>

      <p className="font-semibold mt-12 md:mt-6 text-primary flex items-center gap-2">
        Personalize a cor
        <Picker />
      </p>

      <footer className="mt-auto mb-8 2xl:mb-12 w-full">
        <StepProgressBar
          handlePreviousStep={handlePreviousStep}
          handleNextStep={handleSubmit}
          disabled={!state.url}
          step={step}
        />
      </footer>
    </section>
  );
};

const InputUrl = ({ onChange }: { onChange: (x: any) => void }) => (
  <div className="w-full h-10 overflow-hidden flex items-center justify-center rounded-lg border-2 text-base text-font_color-default border-slate-200">
    <div className="flex h-full px-4 overflow-hidden items-center gap-[10px] bg-[#F8FAFC] text-font_color-sub_title text-sm border-r-[1px] border-slate-200">
      <Net /> https://
    </div>
    <input
      className="flex-1 border-none placeholder-font_color-weak text-sm  outline-none ml-4 text-font_color-default"
      placeholder="Digite o nome do identificador"
      onChange={onChange}
      name="url"
    />
    <div className="flex h-full px-4 overflow-hidden items-center gap-[10px] bg-[#F8FAFC] text-font_color-sub_title text-sm border-l-[1px] border-slate-200">
      .agidesk.com
    </div>
  </div>
);
