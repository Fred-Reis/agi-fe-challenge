import { useCallback, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { StepProgressBar, Chips, Input, Dropdown } from "@/components";

import { SEGMENTS, SIZE } from "@/app/utils/supplies";

interface Step2Props {
  updateState: (string: any) => void;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  step: number;
}

const formSchema = z.object({
  companyName: z.string().min(1, "O nome da empresa é obrigatório"),
});

export const Step2 = ({
  handlePreviousStep,
  handleNextStep,
  updateState,
  step,
}: Step2Props) => {
  const [segmentsError, setSegmentsError] = useState<String | null>(null);
  const [chipsError, setChipError] = useState<String | null>(null);
  const [chipsData, setChipsData] = useState<String | null>(null);
  const [segments, setSegments] = useState<String>("");

  const {
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register,
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
  });

  const handleGetChipsData = useCallback((value: String) => {
    setChipsData((prevState) => (prevState === value ? null : value));
    setChipError(null);
  }, []);

  const handleGetSegmentsData = useCallback((value: String) => {
    setSegmentsError(null);
    setSegments(value);
  }, []);

  async function handleSignIn(data: any) {
    if (!chipsData) {
      setChipError("Selecione a quantidade de pessoas");
      return;
    }

    if (!segments) {
      setSegmentsError("Selecione o segmento da sua empresa");
      return;
    }

    updateState({ type: "companyName", payload: data.companyName });
    updateState({ type: "companyField", payload: segments });
    updateState({ type: "companySize", payload: chipsData });
    handleNextStep();
  }

  const isDisabled = !isDirty || !isValid || !chipsData || !segments;

  return (
    <section className=" mt-12 h-full flex-col flex">
      <h1 className="max-w-2xl text-5xl font-marriweather text-font_color-strong leading-[3.5rem] font-extrabold">
        Sobre o seu negócio
      </h1>

      <section className="w-[437px] mt-12">
        <p className="self-start font-bold text-lg mb-[10px]">
          Qual o nome da sua empresa?
        </p>

        {errors.companyName && (
          <p className="text-red-500 text-sm">
            {errors.companyName?.message as any}
          </p>
        )}

        <Input
          placeholder="Digite o nome da empresa"
          classname="mb-10"
          {...register("companyName")}
        />

        <p className="self-start font-bold text-lg mb-[10px]">
          Em qual segmento sua empresa atua?
        </p>

        {segmentsError && (
          <p className="text-red-500 text-sm">{segmentsError as any}</p>
        )}

        <Dropdown
          handleSelect={handleGetSegmentsData}
          selectedValue={segments}
          options={SEGMENTS}
        />
      </section>

      <section className="w-[707px] mt-12">
        {chipsError && <p className="text-red-500 text-sm">{chipsError}</p>}

        <p className="self-start font-bold text-lg mb-5">
          Quantas pessoas trabalham na sua empresa?
        </p>

        <ul className="flex flex-wrap gap-4">
          {SIZE.map((size) => (
            <Chips
              key={size}
              title={size}
              color={
                chipsData === size ? "text-primary" : "text-font_color-default"
              }
              bgColor={chipsData === size ? "bg-orange-100" : ""}
              borderColor={chipsData === size ? "border-orange-400" : ""}
              handleAction={() => handleGetChipsData(size)}
            />
          ))}
        </ul>
      </section>

      <footer className="mt-auto mb-8 2xl:mb-12 w-full">
        <StepProgressBar
          handleNextStep={handleSubmit(handleSignIn)}
          handlePreviousStep={handlePreviousStep}
          disabled={isDisabled}
          step={step}
        />
      </footer>
    </section>
  );
};
