import React from "react";
import { motion } from "framer-motion";
export default function CartProject() {
  return (
    <div id="Proyek" className="space-y-6 md:space-y-6 md:p-10">
      {/* top contain */}
      <motion.h2
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
        Proyek Saya
      </motion.h2>
      <div className="flex flex-wrap justify-center items-center p-2 md:p-10 space-y-20">
        {/* card */}
        <motion.div
          className=" md:flex space-y-4 w-full "
          initial={{ opacity: 0, y: 20, x: -10 }}
          animate={{ rotateY: 3, x: -10 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            ease: [0.25, 0.8, 0.25, 1],
          }}
        >
          {/* imag and desc*/}
          <div className="md:w-2/3 space-y-6 relative">
            {/* img */}
            <motion.img
              src="/assets/gedung.webp"
              alt=""
              className="w-full h-32 md:h-60 object-contain "
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex gap-4 overflow-x-auto justify-center mx-auto ">
              <img
                src="/assets/icon/mongodb.webp"
                alt=""
                className=" w-10 h-10 md:w-16 md:h-16 bg-white dark:bg-yellow-500 p-1 object-cover rounded-full"
              />
              <img
                src="/assets/icon/node.svg"
                alt=""
                className=" w-10 h-10 md:w-16 md:h-16 bg-white dark:bg-yellow-500 p-1 object-cover rounded-full"
              />
              <img
                src="/assets/icon/next-js.svg"
                alt=""
                className=" w-10 h-10 md:w-16 md:h-16 bg-white dark:bg-yellow-500  p-1 object-cover rounded-full"
              />
              <img
                src="/assets/icon/logo192.webp"
                alt=""
                className=" w-10 h-10 md:w-16 md:h-16 bg-white dark:bg-yellow-500 p-1 object-contain rounded-full"
              />
              <img
                src="/assets/icon/express.svg"
                alt=""
                className=" w-10 h-10 md:w-16 md:h-16 bg-white dark:bg-yellow-500  p-1 object-contain rounded-full"
              />
            </div>
          </div>
          <div className="mx-4 space-y-3 md:space-y-6 md:w-1/3 ">
            {/* desc */}
            <h2 className="text-gray-300 font-bold text-xl md:text-2xl dark:text-neutral-800">
              Sewa Gedung Desa Cangkol
            </h2>
            <p className="text-justify text-neutral-100 dark:text-neutral-700 whitespace-normal font-light text-base md:font-normal indent-10 ">
              Sejak awal berdiri gedung pertemuan Desa Cangkol belum menerapkan
              sistem yang terkomputerisasi. Dengan adanya website ini, proses
              pelayanan sewa gedung menjadi lebih efisien dan praktis.
              Fitur-fitur yang tersedia termasuk verifikasi OTP, reset kata
              sandi, sewa gedung jarak jauh, serta opsi pemulihan akun jika
              pengguna lupa kata sandi, sehingga memudahkan akses dan
              meningkatkan kenyamanan penyewa.
            </p>
          </div>
        </motion.div>
        <motion.div
          className=" md:flex space-y-4 w-full "
          initial={{ opacity: 0, y: 20, x: -10 }}
          animate={{ rotateY: 3, x: -10 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            ease: [0.25, 0.8, 0.25, 1],
          }}
        >
          {/* imag and desc*/}
          <div className="md:w-2/3 space-y-6 relative">
            {/* img */}
            <a href="https://slicing-real-estate-web-app-with-next-js-14.vercel.app/id">
              <motion.img
                src="/assets/property-pros.webp"
                alt=""
                className="w-full h-32 md:h-60 object-contain "
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <div className="flex gap-4 overflow-x-auto justify-center mx-auto ">
              <img
                src="/assets/icon/next-js.svg"
                alt="projek next js"
                className=" w-10 h-10 md:w-16 md:h-16 bg-white dark:bg-yellow-500  p-1 object-cover rounded-full"
              />
            </div>
          </div>
          <div className="mx-4 space-y-3 md:space-y-6 md:w-1/3 ">
            {/* desc */}
            <h2 className="text-gray-300 font-bold text-xl md:text-2xl dark:text-neutral-800">
              Temukan Rumah Impian Anda Hari Ini
            </h2>
            <p className="text-justify text-neutral-100 dark:text-neutral-700 whitespace-normal font-light md:font-normal indent-10 ">
              Platform yang menyediakan berbagai listing properti untuk membantu
              Anda menemukan rumah impian. Dengan fitur eksplorasi yang mudah,
              pengguna dapat melihat daftar properti yang luas sesuai dengan
              kebutuhan mereka. Selain itu, agen dapat menambahkan properti ke
              favorit untuk memudahkan pengelolaan dan penyimpanan pilihan
              terbaik mereka.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
