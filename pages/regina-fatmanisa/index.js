import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaGlobe, FaInstagram, FaLocationPin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Regina() {
  return (
    <>
      <div>
        <div className="w-full bg-white p-2">
          <div className="flex items-center justify-center">
            <Image src="/image/logoamital.jpg" width={100} height={100} />
          </div>
        </div>
        <div className="items-center justify-center flex">
          <div className="absolute mt-40">
            <Image
              src="/image/regina.png"
              className="rounded-full"
              width={150}
              height={10}
            />
          </div>
          <Image src="/image/bg-giu2.jpg" width={1000} height={1000} />
        </div>
        <div className="flex flex-col items-center justify-center font-popin pt-12">
          <h1 className="font-bold">Regina Fatmanisa</h1>
          <h1>Head of Cloud Business Manager</h1>
        </div>
        <h1 className="flex items-center justify-center font-popin">
          <FaLocationPin size={15} />
          Jakarta • Aku Mitra Digital
        </h1>
        <h1 className="flex text-center items-center justify-center p-5 font-popin">
          PT Aku Mitra Digital is an official Google, Alibaba, Huawei and AWS
          Partner for Services, Cloud migration. Founded by IT veterans, PT Aku
          Mitra Digital will bring rich experience from their previous projects
          in implementing and supporting IT customers in Indonesia.
        </h1>
        <div className="flex items-center justify-center px-10">
          <div className="bg-blue-500 w-full rounded-lg text-center p-2">
            <a
              href="Company Profile - Aku Mitra Digital.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="font-popin"
            >
              Save Our Company Profile
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-3 gap-10 mt-10">
            <div className="bg-white border rounded-full p-2 w-[45px] flex items-center justify-center">
              <Link
                href="https://www.linkedin.com/in/regina-fatmanisa-951278164"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={25} />
              </Link>
            </div>
            <div className="bg-white border rounded-full p-2 w-[45px] flex items-center justify-center">
              <Link
                href="https://www.amital.co.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe size={25} />
              </Link>
            </div>
            <div className="bg-white border rounded-full p-2 w-[45px] flex items-center justify-center">
              <Link
                href="https://www.instagram.com/akumitradigital/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={25} />
              </Link>
            </div>
            <div className="bg-white border rounded-full p-2 w-[45px] flex items-center justify-center">
              <Link
                href="mailto:regina.yogisworo@amital.co.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail size={25} />
              </Link>
            </div>
            <div className="bg-white border rounded-full p-2 w-[45px] flex items-center justify-center">
              <Link
                href="tel:+62215706909"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhoneAlt size={25} />
              </Link>
            </div>
            <div className="bg-white border rounded-full p-2 w-[45px] flex items-center justify-center">
              <Link
                href="https://wa.me/6281290460464"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={25} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-16 font-popin">
          © {new Date().getFullYear()} Aku Mitra Digital
        </div>
      </div>
    </>
  );
}

export default Regina;
