import { CardLong } from "../UI/Cards/CardLong";
import { CardSmall } from "../UI/Cards/CardSmall";
import { Title } from "../UI/Title/Title";
import { Section } from "./Section";

export function SectionEvents() {
  return (
    <Section className="mt-[100px] md:mt-[200px] px-4">
      <Title text="Événements" className="mb-10"></Title>
      <div className="flex flex-col md:flex-row gap-6">
        <CardLong />
        <CardSmall />
      </div>
      <div className="text-center mt-6">
        <a
          href="#"
          className="text-black flex items-center justify-center space-x-2 text-lg md:text-xl font-bold group"
        >
          <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-black transition-colors duration-300 group-hover:bg-green-500 text-white">
            ➜
          </span>
          <span>Voir tous les événements</span>
        </a>
      </div>
    </Section>
  );
}
