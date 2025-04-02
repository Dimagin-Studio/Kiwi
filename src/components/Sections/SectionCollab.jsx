import { Title } from "../UI/Title/Title";
import { Section } from "./Section";

export function SectionCollab() {
  return (
    <Section className="mt-[100px] md:mt-[200px] px-4">
      <div className="mb-8">
        <Title text="Ils nous ont fait confiance" />
      </div>

      <div className="relative overflow-hidden w-full">
        <div className="flex animate-marquee space-x-12">
          {[...Array(2)].map((_, i) => (
            <div className="flex space-x-12" key={i}>
              <img
                src="../images/adobe.png"
                alt="Adobe"
                className="h-8 md:h-12"
              />
              <img
                src="../images/carrefour.png"
                alt="Carrefour"
                className="h-8 md:h-12"
              />
              <img
                src="../images/bnp.png"
                alt="BNP Paribas"
                className="h-8 md:h-12"
              />
              <img
                src="../images/adidas.png"
                alt="Adidas"
                className="h-8 md:h-12"
              />
              <img
                src="../images/adobe.png"
                alt="Adobe"
                className="h-8 md:h-12"
              />
              <img
                src="../images/carrefour.png"
                alt="Carrefour"
                className="h-8 md:h-12"
              />
              <img
                src="../images/bnp.png"
                alt="BNP Paribas"
                className="h-8 md:h-12"
              />
              <img
                src="../images/adidas.png"
                alt="Adidas"
                className="h-8 md:h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
