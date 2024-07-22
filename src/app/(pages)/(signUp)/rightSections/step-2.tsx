import { Testemonial } from "@/components/testemonial";
import { Unipar } from "@/assets/brands/unipar";

import woman from "@/assets/woman.png";
export const Step2 = () => (
  <section>
    <Testemonial
      message="A Agidesk foi certeira na combinação de funcionalidades e valor agregado que estávamos buscando."
      position="Supervisora de Atendimento"
      name="Márcia Vilanova"
      company={<Unipar />}
      image={woman}
    />
  </section>
);
