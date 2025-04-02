import { Section } from "../Sections/Section";

export function SectionAcceuil() {
  return (
    <Section className="mt-24 lg:mt-[100px]">
      <div className="relative">
        <img
          src="../public/images/reunion.jpg"
          alt="Groupe d'affaires"
          className="w-full object-cover opacity-70 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[755px] rounded-[20px] sm:rounded-[30px]"
        />

        <div
          className="absolute w-[50%] top-4 right-4 lg:top-4 
        lg:right-4 bg-stone-300/90 p-4 sm:p-6 rounded-[20px]  
        shadow-md lg:w-[80%] lg:h-[208px] max-w-sm"
        >
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">
            KIWI
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed mb-2 sm:mb-3">
            Bien plus qu'un club business. Parce que votre réussite passe aussi
            par l'entraide, le bien-être et des connexions authentiques.
          </p>
          <a
            href="#"
            className="mt-2 inline-flex items-center text-base sm:text-lg md:text-xl font-bold text-white group"
          >
            <span className="mr-2 sm:mr-3 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black transition-colors duration-300 group-hover:bg-green-500">
              ➜
            </span>
            En savoir plus
          </a>
        </div>

        <div
          className="relative lg:absolute lg:bottom-0 lg:right-0 bg-white p-4 sm:p-6 md:p-8 
                      md:h-[120px] 
                      w-full  lg:w-[500px] 
                      flex flex-row 
                      lg:space-y-3  space-y-9
                      rounded-tl-[30px] sm:rounded-tl-[50px] md:rounded-tl-[70px]"
        >
          <div className="text-center sm:text-right">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">+ 30</h3>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-tight sm:leading-6">
              Membres actifs
            </p>
          </div>
          <div className="text-center sm:text-right">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">6000</h3>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-tight sm:leading-6">
              Contrats avec des fournisseurs
            </p>
          </div>
          <div className="text-center sm:text-right">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">35</h3>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-tight sm:leading-6">
              Conférences par an
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
