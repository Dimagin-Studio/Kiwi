import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 lg:w-[60%] lg:bg-[#DCE1DE]/75 rounded-full lg:shadow-lg z-50 p-2 w-full">
      <div className="flex justify-between items-center relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-black focus:outline-none absolute right-4 top-2 text-4xl"
        >
          {isOpen ? <span>&times;</span> : <span>&#9776;</span>}
        </button>

        <div className="hidden lg:flex justify-between items-center w-full">
          <ul className="flex items-center space-x-10 text-gray-700 font-medium">
            <li>
              <a
                href="#"
                className="px-5 py-2 rounded-full hover:text-black transition hover:bg-zinc-400"
              >
                Kiwi Club
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-5 py-2 rounded-full hover:text-black transition hover:bg-zinc-400"
              >
                Agenda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-5 py-2 rounded-full hover:text-black transition hover:bg-zinc-400"
              >
                Membres
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-5 py-2 rounded-full hover:text-black transition hover:bg-zinc-400"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-[#29BF12] transition"
          >
            Devenir Membre
          </a>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-16 lg:hidden bg-white z-50 shadow-none py-2 text-gray-700 font-medium">
            <ul>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-zinc-400 hover:text-black transition"
                >
                  Kiwi Club
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-zinc-400 hover:text-black transition"
                >
                  Agenda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-zinc-400 hover:text-black transition"
                >
                  Membres
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-zinc-400 hover:text-black transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-zinc-400 hover:text-black transition font-semibold"
                >
                  Devenir Membre
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
