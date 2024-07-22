import { COLORS } from "@/app/utils/supplies";

import { Step0 } from "./step-0";
import { Step1 } from "./step-1";
import { Step2 } from "./step-2";
import { Step3 } from "./step-3";
import { Step4 } from "./step-4";

import { LanguagesDropdown } from "@/components/languagesDropdown";
import { getGradientByColor, handleGetColorObj } from "@/app/utils/functions";

type SectionType = {
  [key: string]: JSX.Element;
};

interface SectionProps {
  updateState: (string: any) => void;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  color: string | null;
  gradient?: any;
  text?: string;
  step: number;
}

interface Step4Props {
  secondaryColor?: string;
  primaryColor?: string;
  text: string;
}

export const RightSide = ({
  handleNextStep,
  updateState,
  gradient,
  color,
  text,
  step,
}: SectionProps): JSX.Element => {
  const section: SectionType = {
    0: <Step0 updateState={updateState} handleNextStep={handleNextStep} />,
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
    4: (
      <Step4
        secondaryColor={handleGetColorObj(color).secondary_hex}
        primaryColor={handleGetColorObj(color).primary_hex}
        text={text}
      />
    ),
  };

  return (
    <section
      className={`flex flex-col h-full w-full items-center py-12 px-24 ${gradient && gradient}`}
    >
      <header className="self-end">
        <LanguagesDropdown />
      </header>
      {section[step]}
    </section>
  );
};
