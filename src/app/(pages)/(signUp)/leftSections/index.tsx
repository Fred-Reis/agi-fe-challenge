import { Step0 } from "./step-0";
import { Step1 } from "./step-1";
import { Step2 } from "./step-2";
import { Step3 } from "./step-3";
import { Step4 } from "./step-4";

type SectionType = {
  [key: string]: JSX.Element;
};

interface SectionProps {
  handleGetUrlData: (string: any) => void;
  handleGetColor: (string: any) => void;
  updateState: (string: any) => void;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  color: string | null;
  step: number;
  state: any;
}

export const LeftSide = ({
  handlePreviousStep,
  handleGetUrlData,
  handleNextStep,
  handleGetColor,
  updateState,
  state,
  color,
  step,
}: SectionProps): JSX.Element => {
  const section: SectionType = {
    0: <Step0 />,
    1: (
      <Step1
        updateState={updateState}
        handleNextStep={handleNextStep}
        step={step}
      />
    ),
    2: (
      <Step2
        handleNextStep={handleNextStep}
        updateState={updateState}
        handlePreviousStep={handlePreviousStep}
        step={step}
      />
    ),
    3: (
      <Step3
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        updateState={updateState}
        step={step}
      />
    ),
    4: (
      <Step4
        handlePreviousStep={handlePreviousStep}
        handleGetUrlData={handleGetUrlData}
        handleNextStep={handleNextStep}
        handleGetColor={handleGetColor}
        updateState={updateState}
        state={state}
        color={color}
        step={step}
      />
    ),
  };

  return section[step];
};
