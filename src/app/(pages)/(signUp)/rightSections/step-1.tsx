import { Testemonial } from "@/components/testemonial";
import { Coopercarga } from "@/assets/brands/coopercarga";

import man from "@/assets/man.png";

export const Step1 = () => (
  <section>
    <Testemonial
      message="A Agidesk evoluiu de um sistema para uma central completa, proporcionando grandes benefícios nas áreas de RH, operações e finanças."
      position="Head de TI da Coopercarga"
      company={<Coopercarga />}
      name="Diogo Gomes"
      image={man}
    />
  </section>
);
