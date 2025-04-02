import { Button } from "../UI/Buttons/Button";
import { Title } from "../UI/Title/Title";
import { Section } from "./Section";

export function SectionGallery() {
  return (
    <Section className="mt-[50px] md:mt-[100px] px-4">
      <Title text="Au sein de notre famille" className="mb-6 lg:mb-10" />
      <video
        src="../images/reunion.mp4"
        className="rounded-xl h-[50vh] md:h-[100vh] w-full object-cover"
        autoPlay
        muted
        loop
      ></video>
      <div className="flex justify-center mt-4">
        <Button text="Nous rejoindre" />
      </div>
    </Section>
  );
}
