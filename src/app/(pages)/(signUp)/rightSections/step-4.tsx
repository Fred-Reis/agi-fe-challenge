import { Browser } from "@/assets/browser";

interface BrowserProps {
  secondaryColor?: string;
  primaryColor?: string;
  text?: string;
}
export const Step4 = ({
  text = "nomeplataforma",
  secondaryColor,
  primaryColor,
}: BrowserProps) => (
  <section className="absolute bottom-0 right-0 divide-y-2 max-w-[35%] overflow-hidden">
    <div className="w-full h-16  flex items-center rounded-tl-lg px-5 py-[10px] bg-[#fff] b">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#F87171]" />
        <div className="w-3 h-3 rounded-full bg-[#FCD34D]" />
        <div className="w-3 h-3 rounded-full bg-[#34D399]" />
      </div>

      <div className="w-full h-full ml-8 flex items-center rounded-full bg-[#F1F5F9] px-5 text-font_color-sub_title">
        https://
        <span className="text-font_color-strong font-bold">
          {text.toLocaleLowerCase()}
        </span>
        .agidesk.com
      </div>
    </div>
    <Browser primaryColor={primaryColor} secondaryColor={secondaryColor} />
  </section>
);
