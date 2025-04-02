import { Button } from "../UI/Buttons/Button";
import { Section } from "../Sections/Section";

export function SectionApp() {
  return (
    <Section className="h-[100vh] flex flex-col items-center sm:items-start justify-center text-center sm:text-left px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center w-full">
        <div className="flex basis-1/3 w-full sm:w-auto justify-center">
          <div
            className="relative w-48 h-96 rounded-3xl flex items-center justify-center bg-no-repeat bg-[length:230%] bg-center"
            style={{ backgroundImage: "url('/images/iphone.png')" }}
          >
            <img
              src="../images/kiwi.png"
              alt="Logo Kiwi"
              className="w-24 h-24"
            />
            <p className="absolute bottom-6 text-black font-bold text-3xl">
              KIWI
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 text-center sm:text-left mt-8 sm:mt-0 sm:pl-10">
          <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
            Votre famille{" "}
            <span className="bg-green-200 text-lime-500 px-2 rounded-lg">
              business
            </span>
            <br /> à portée de main.
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Accédez à votre espace en toute simplicité et restez informé des
            dernières actualités et opportunités.
          </p>
          <Button text="Téléchargez maintenant" />
        </div>
      </div>
    </Section>
  );
}
