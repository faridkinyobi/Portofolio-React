import { useState, useEffect } from "react";
import { BsFillBrightnessHighFill, BsMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";
export default function Headerindex() {
  const [SideMenuOpen, setSideMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (!dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScrolled = () => {
      window.scrollY > 90 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, [dark]);

  return (
    <header
      className={`py-2 fixed w-full top-0 left-0 z-30 ${
        SideMenuOpen
          ? "bg-[#505050] shadow-lg shadow-slate-100 dark:shadow-slate-900 "
          : " bg-transparent "
      }`}
    >
      {/* container */}
      <nav className="custom-container">
        <div
          className={`flex justify-between md:justify-around items-center px-4 py-2 md:py-4 rounded-2xl md:rounded-3xl transition-all delay-75 ease-in ${
            scrolled ? "shadow-lg backdrop-blur-3xl" : "bg-transparent"
          }`}
        >
          <img
            src="/assets/icon-nav.svg"
            alt="Logo"
            className="w-8 h-8 object-contain dark:bg-blue-700 rounded-full p-[1px]"
          />

          <div
            className={`absolute md:relative left-0 transition-all transform delay-300 ease-in-out  md:top-0 -z-30 rounded-2xl ${
              SideMenuOpen ? "top-[3.5rem] dark:bg-[#262626] bg-neutral-400 dark:text-neutral-100 text-neutral-900" : "top-[-20rem]"
            }  dark:md:bg-transparent md:bg-transparent w-full h-42 md:w-auto md:h-auto md:z-50`}
          >
            <ul
              className={`md:flex gap-6 font-medium space-y-3 md:space-y-0 text-center py-10 md:py-0 md:text-neutral-100 md:dark:text-neutral-900`}
            >
              <li>
                <a
                  href="/"
                  className="hover:text-neutral-500 transition-all delay-100 md:text-lg"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#Tentang"
                  className="hover:text-neutral-500 transition-all delay-100 md:text-lg"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="#Keahlian"
                  className="hover:text-neutral-500 transition-all delay-100 md:text-lg"
                >
                  Keahlian
                </a>
              </li>
              <li>
                <a
                  href="#Proyek"
                  className="hover:text-neutral-500 transition-all delay-100 md:text-lg"
                >
                  Proyek
                </a>
              </li>
              <li>
                <a
                  href="#Sertifikat"
                  className="hover:text-neutral-500 transition-all delay-100 md:text-lg"
                >
                  Sertifikat
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div
              onClick={() => setDark(!dark)}
              className=" bg-slate-100  w-12 h-7  flex justify-center items-center gap-4 relative rounded-full shadow-inner shadow-[#111316] "
            >
              {dark ? (
                <BsMoonFill
                  className="bg-blue-400 rounded-full w-6 h-6 absolute right-1 p-1"
                  size={30}
                />
              ) : (
                <BsFillBrightnessHighFill
                  className="bg-yellow-400 rounded-full w-6 h-6 absolute left-1 p-1 shadow-2xl "
                  size={30}
                />
              )}
            </div>
            <button
              className="md:hidden flex flex-col justify-between w-5 h-5 items-end rounded-2xl"
              onClick={() => setSideMenuOpen(() => !SideMenuOpen)}
            >
              <motion.span
                className="block w-full h-0.5 bg-white dark:bg-black"
                animate={{
                  rotate: SideMenuOpen ? 45 : 0,
                  y: SideMenuOpen ? 9 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-[50%] h-0.5 bg-white  dark:bg-black"
                animate={{
                  opacity: SideMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`block  ${
                  SideMenuOpen ? "w-full" : "w-[90%]"
                } h-0.5 bg-white dark:bg-black`}
                animate={{
                  rotate: SideMenuOpen ? -45 : 0,
                  y: SideMenuOpen ? -9 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
