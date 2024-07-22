import { Button } from "./button";

interface StepProgressBarProps {
  handlePreviousStep?: () => void;
  handleNextStep: () => void;
  disabled?: boolean;
  step: number;
}

export const StepProgressBar = ({
  handlePreviousStep,
  handleNextStep,
  disabled,
  step,
}: StepProgressBarProps) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`w-20 h-2 rounded-sm ${
              index + 1 <= step ? "bg-fb_success" : "bg-slate-200"
            }`}
          ></div>
        ))}
      </div>
      <div className="flex gap-9 items-center">
        {handlePreviousStep && (
          <p
            className="text-primary font-semibold cursor-pointer"
            onClick={handlePreviousStep}
          >
            Voltar
          </p>
        )}
        <Button
          onClick={handleNextStep}
          classname="!w-[133px]"
          disabled={disabled}
          text="Continuar"
          arrow
        />
      </div>
    </div>
  );
};
