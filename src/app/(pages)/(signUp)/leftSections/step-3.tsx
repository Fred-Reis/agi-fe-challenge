import { useCallback, useState } from "react";

import { StepProgressBar, Chips } from "@/components";

import { DEPARTMENTS, ROLES } from "@/app/utils/supplies";

interface Step3Props {
  updateState: (string: any) => void;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  step: number;
}

export const Step3 = ({
  handlePreviousStep,
  handleNextStep,
  updateState,
  step,
}: Step3Props) => {
  const [departmentError, setDepartmentError] = useState<string | null>(null);
  const [roleError, setRoleError] = useState<string | null>(null);
  const [departments, setDepartment] = useState<string[]>([]);
  const [role, setRole] = useState<string | null>(null);

  async function handleSubmit() {
    if (!role) {
      setRoleError("Selecione o seu cargo");
      return;
    }

    if (!departments.length) {
      setDepartmentError("Selecione pelo menos uma categoria");
      return;
    }

    updateState({ type: "role", payload: role });
    updateState({ type: "department", payload: departments });
    handleNextStep();
  }

  const handleGetRole = useCallback((value: string) => {
    setRole((prevState) => (prevState === value ? null : value));
    setRoleError(null);
  }, []);

  const handleGetDepartment = useCallback((value: string) => {
    setDepartment((prevState) =>
      prevState?.includes(value)
        ? [...prevState.filter((item) => item !== value)]
        : [...prevState, value]
    );
    setDepartmentError(null);
  }, []);

  const isDisabled = !role || !departments.length;

  return (
    <section className=" mt-12 md:mt-8 h-full flex-col flex">
      <h1 className="max-w-2xl text-5xl font-marriweather text-font_color-strong leading-[3.5rem] font-extrabold">
        Sobre o seu negócio
      </h1>

      <section className="w-[707px] md:w-[690px] mt-12 md:mt-8">
        {roleError && <p className="text-red-500 text-sm">{roleError}</p>}

        <p className="self-start font-bold text-lg mb-5">Qual é o seu cargo?</p>

        <ul className="flex flex-wrap gap-4">
          {ROLES.map((item) => (
            <Chips
              key={item}
              title={item}
              color={role === item ? "text-primary" : "text-font_color-default"}
              bgColor={role === item ? "bg-orange-100" : ""}
              borderColor={role === item ? "border-orange-400" : ""}
              handleAction={() => handleGetRole(item)}
            />
          ))}
        </ul>
      </section>

      <section className="w-[707px] md:w-[690px] mt-12 md:mt-8">
        {departmentError && (
          <p className="text-red-500 text-sm">{departmentError}</p>
        )}

        <p className="self-start font-bold text-lg mb-2">
          Qual departamento vai usar o Agidesk?
        </p>

        <p className="self-start text-font_color-sub_title text-sm mb-5">
          Vamos melhorar a sua experiência na plataforma. Você pode escolher
          mais de uma opção.
        </p>

        <ul className="flex flex-wrap gap-4">
          {DEPARTMENTS.map((department) => (
            <Chips
              key={department}
              title={department}
              color={
                departments.includes(department)
                  ? "text-primary"
                  : "text-font_color-default"
              }
              bgColor={departments.includes(department) ? "bg-orange-100" : ""}
              borderColor={
                departments.includes(department) ? "border-orange-400" : ""
              }
              handleAction={() => handleGetDepartment(department)}
            />
          ))}
        </ul>
      </section>

      <footer className="mt-auto mb-8 2xl:mb-12 w-full">
        <StepProgressBar
          handlePreviousStep={handlePreviousStep}
          handleNextStep={handleSubmit}
          disabled={isDisabled}
          step={step}
        />
      </footer>
    </section>
  );
};
