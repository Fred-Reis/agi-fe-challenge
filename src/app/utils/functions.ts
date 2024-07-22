import { COLORS } from "./supplies";

export const getGradientByStep = (step: number) => {
  if (step === 0) {
    return "bg-gradient-to-br from-[#FDBA74] via-[#FEF3C7] to-[#FFF7ED]";
  }

  return "bg-gradient-to-tr from-[#FDBA74] via-[#FEF3C7] to-[#FFF7ED]";
};

export function handleGetColorObj(value: string | null) {
  return COLORS.find((color) => color.name === value) || COLORS[0];
}

export function parseDepartmentsValues(segments: string[]) {
  const parsedSegments = segments.map((segment) =>
    segment
      .toLowerCase()
      .replace(/([^\w & ç õ ã //]|_)/g, "")
      .trim()
  );

  return parsedSegments;
}

function hexToRGB(hex: string, alpha: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
}

export function getGradientByColor(primary: string, secondary: string) {
  console.log(primary, secondary);

  const gradient = `bg-gradient-to-br from-[#FDBA74] via-[#FEF3C7] to-[#FFF7ED]`;
  // return "bg-gradient-to-tr from-[#FDBA74] via-[#FEF3C7] to-[#FFF7ED]";

  return gradient;
  // return `bg-gradient-to-br from-[${primary}] via-[#FEF3C7] to-[#FFF7ED]`;
}
