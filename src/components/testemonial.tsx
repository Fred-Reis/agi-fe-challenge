import Image, { StaticImageData } from "next/image";

import quote from "@/assets/quote.png";

interface TestemonialProps {
  company: React.ReactNode;
  image: StaticImageData;
  position: string;
  message: string;
  name: string;
}

interface TestemonialCardProps {
  company: React.ReactNode;
  image: StaticImageData;
  position: string;
  name: string;
}

export const Testemonial = ({
  position,
  company,
  message,
  image,
  name,
}: TestemonialProps) => (
  <section className="mt-[116px]">
    <div className="flex gap-6">
      <Image src={quote} alt="quote" className="h-12" />
      <div className="text-xl text-font_color-sub_title 2xl:w-[373px]">
        {message}
      </div>
    </div>
    <TestemonialCard
      position={position}
      company={company}
      image={image}
      name={name}
    />
  </section>
);

const TestemonialCard = ({
  position,
  company,
  image,
  name,
}: TestemonialCardProps) => (
  <div className="w-full h-full flex gap-6 mt-8">
    <div className="flex items-center justify-center overflow-hidden bg-orange-400 w-[86px] h-[86px] rounded-full">
      <Image
        src={image}
        className="object-cover w-20 h-20 rounded-full border-[#fff] border-4"
        alt="person"
      />
    </div>

    <div>
      <p className="text-lg font-bold text-font_color-default">{name}</p>
      <p className="text-base text-font_color-sub_title mb-6">{position}</p>
      {company}
    </div>
  </div>
);
