import { Section } from "./Section";

export function SectionTestimonials() {
  return (
    <Section className="px-4">
      <div className="bg-black text-white rounded-3xl p-6 md:p-10 mt-12 relative">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 flex justify-center">
          Ils témoignent !
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 md:p-5 rounded-xl border border-gray-700 text-left"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src="../images/man.jpg"
                    alt="Monsieur MONSIEUR"
                    className="w-10 md:w-12 h-10 md:h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-sm md:text-base">
                      Monsieur MONSIEUR
                    </h4>
                    <p className="text-gray-400 text-xs md:text-sm">Adobe</p>
                  </div>
                  <div className="ml-auto text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-300 mt-2 md:mt-3 text-xs md:text-sm">
                  KIWI, c'est bien plus qu'un réseau, c'est une famille. Ici,
                  j'ai trouvé du soutien, des conseils précieux et une ambiance
                  où l'humain passe avant tout. Chaque échange est une source
                  d'inspiration !
                </p>
              </div>
            ))}
        </div>
      </div>
    </Section>
  );
}
