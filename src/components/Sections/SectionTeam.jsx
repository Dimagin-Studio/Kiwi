import { Section } from "./Section";
import { Title } from "../UI/Title/Title";

export function SectionTeam() {
  return (
    <Section className="min-h-screen py-12">
      <Title text="Découvrez " className="mb-10">
        <span className="bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent ml-3">
          l'équipe
        </span>
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-center items-center">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-black">
                <img
                  src="../images/man.jpg"
                  alt="Membre de l'équipe"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-bold mt-4 text-lg">NOM DE FAMILLE</h3>
              <p className="text-gray-600 text-base">Marie</p>
              <p className="text-gray-500 text-sm">Fondatrice & Membre</p>

              <div className="flex space-x-4 mt-3">
                <a href="#" className="text-black hover:text-gray-700">
                  <img
                    src="../images/logos/facebook.png"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <img
                    src="../images/logos/linkedin.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
              </div>

              <p className="text-sm text-gray-500 mt-1">Marie</p>
            </div>
          ))}
      </div>

      <div className="w-32 h-0.5 bg-black mx-auto my-12"></div>

      <a href="/membres" className="block">
        <div className="flex justify-center items-center space-x-3 cursor-pointer">
          <img
            src="../images/man.jpg"
            alt="Membre"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img
            src="../images/man.jpg"
            alt="Membre"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img
            src="../images/man.jpg"
            alt="Membre"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <span className="text-gray-600 text-lg">+10</span>
        </div>
      </a>
    </Section>
  );
}
