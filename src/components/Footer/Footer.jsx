import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-4 sm:px-10 py-12 w-full mt-[100px]">
      <div className="max-w-[1260px] w-full mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="w-full md:w-auto text-center md:text-left">
          <div className="space-y-2 mx-auto md:mx-0">
            <h2 className="text-green-600 font-bold">Liens</h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-green-600">
                  Kiwi Club
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Agenda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Membres
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden md:flex md:flex-row md:gap-10">
          <div className="space-y-2">
            <h2 className="text-green-600 font-bold">Carrière</h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-green-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Partenaire
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Centre d'aide
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-green-600 font-bold">Ressources</h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-green-600">
                  Événements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Communauté
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Réseaux sociaux
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  S'inscrire
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-auto text-center md:text-right md:ml-auto">
          <h2 className="text-green-600 font-bold">S’abonner</h2>
          <p className="mt-2">Ne manquez aucune nouvelle !</p>
          <div className="mt-3 flex flex-wrap justify-center md:justify-end gap-2">
            <input
              type="email"
              placeholder="Entrer votre email"
              className="p-2 bg-[#E3FED7] text-[#979797] rounded-full focus:outline-none lg:w-auto"
            />
            <button className="bg-[#29BF12] text-white px-4 py-2 rounded-full hover:bg-green-700">
              S'inscrire
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 my-6 max-w-[1260px] w-full mx-auto"></div>

      <div className="max-w-[1260px] w-full mx-auto flex flex-wrap justify-between items-center text-center md:text-left">
        <h3 className="font-bold w-full md:w-auto mb-4 md:mb-0">NOS RÉSEAUX</h3>
        <div className="flex justify-center md:justify-end w-full md:w-auto space-x-4">
          <a href="#" className="text-green-600 text-2xl hover:text-green-800">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-green-600 text-2xl hover:text-green-800">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-green-600 text-2xl hover:text-green-800">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-green-600 text-2xl hover:text-green-800">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-300 my-6 max-w-[1260px] w-full mx-auto"></div>

      <div className="max-w-[1260px] w-full mx-auto text-center text-sm text-gray-500 mt-5 flex flex-wrap justify-center space-x-4">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Cookie Policy
        </a>
      </div>
    </footer>
  );
}
