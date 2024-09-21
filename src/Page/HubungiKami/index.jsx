import React from "react";
import { motion } from "framer-motion";
export default function HubungiKami() {
  return (
    <div className="space-y-6 md:space-y-12  md:text-center text-l py-7 md:pb-20">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ scale: 1 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.5,
            ease: [0.25, 0.8, 0.25, 1],
          },
        }}
        className="text-neutral-100 dark:text-neutral-700 font-bold text-2xl md:text-3xl pl-6"
      >
        Hubungi Kami
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ scale: 1 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.5,
            ease: [0.25, 0.8, 0.25, 1],
          },
        }}
        className="md:flex md:w-full md:px-20 px-6"
      >
        <form
          className="space-y-3 px-6 md:py-10 py-5 md:w-1/2 text-left"
          action="mailto:faridkin7@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-neutral-300 text-lg dark:text-neutral-600"
            >
              Nama
            </label>
            <input
              className="py-1 text-base text-neutral-300 dark:text-neutral-600 font-light mt-1 block ps-4 pr-4 w-full border-2 border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-[#1b1e23] dark:bg-slate-50 outline-none placeholder:text-neutral-300 dark:placeholder:text-neutral-900  "
              placeholder="Nama"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-neutral-300 text-lg dark:text-neutral-600"
            >
              Email
            </label>
            <input
              className="py-1 text-base text-neutral-300 dark:text-neutral-600  font-light mt-1 block ps-4 pr-4 w-full border-2 border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-[#1b1e23] dark:bg-slate-50 outline-none placeholder:text-neutral-300 dark:placeholder:text-neutral-900"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-neutral-300 text-lg dark:text-neutral-600"
            >
              Pesan
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="py-1 text-base text-neutral-300 dark:text-neutral-600  font-light  mt-1 ps-4 pr-4 block w-full border-2 border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-[#1b1e23] dark:bg-slate-50 outline-none placeholder:text-neutral-300 dark:placeholder:text-neutral-900"
              placeholder="Pesan"
              required
            />
          </div>
          <button className="bg-blue-700 rounded-lg  py-1 px-4 md:px-8 text-lg font-medium hover:bg-blue-800 transition-all ease-in-out text-neutral-100">
            Kirim
          </button>
        </form>
        <div className="text-neutral-100 bg-[#1b1e23] py-10 px-6 space-y-3 md:w-1/2 md:ps-10 md:pt-28 rounded-xl md:rounded-2xl">
          <div className="flex items-center gap-4">
            <img src="assets/icon/ic-instagram.svg" alt="sosmed" />
            <a
              href="https://www.instagram.com/_frdknyb_"
              className="hover:text-blue-400 transition-all ease-in-out delay-75 duration-75 cursor-pointer"
            >
              Instragram
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img src="assets/icon/ic-linkedin.svg" alt="sosmed" />
            <a
              href="https://www.linkedin.com/in/muhammad-farid-875679201/"
              className="hover:text-blue-400 transition-all ease-in-out delay-75 duration-75 cursor-pointer"
            >
              Linkedin
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="assets/icon/ic-mail.svg"
              className="w-9 h-auto"
              alt="sosmed"
            />
            <a
              href="mailto:faridkin7@gmail.com"
              className="hover:text-blue-400 transition-all ease-in-out delay-75 duration-75 cursor-pointer"
            >
              Email
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
