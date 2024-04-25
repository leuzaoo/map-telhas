"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function DeviceNavBar({ open }) {
  return (
    <div
      className={`absolute z-50 top-0 left-0 h-screen w-screen bg-primaryRed text-[#fff] transform lg:hidden ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md`}
    >
      <div className="flex flex-col items-center gap-3 pt-20 text-3xl">
        <ul className="flex flex-col gap-5">
          <li>
            <a href="#">Links</a>
          </li>
          <li>
            <a href="#">Links</a>
          </li>
          <li>
            <a href="#">Links</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="px-5 flex w-full justify-center items-center h-[80px] bg-primaryRed">
        <div className="max-w-screen-lg w-full flex justify-between items-center">
          <DeviceNavBar open={open} setOpen={setOpen} />
          <Image src="/logo.svg" width={70} height={40} alt="Logo Image" />
          <div
            className="cursor-pointer z-50 flex w-10 h-6 flex-col justify-between items-center lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span
              className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-white rounded-lg transition duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>

          <div className="hidden lg:flex items-center justify-between text-xl text-white">
            <ul className="flex gap-10">
              <li className="min-w-max">
                <Link href="#">Produtos</Link>
              </li>
              <li className="min-w-max">
                <Link href="#">Serviços</Link>
              </li>
              <li className="min-w-max">
                <Link href="#">Sobre Nós</Link>
              </li>
              <li className="min-w-max">
                <Link href="#">Contato</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:contents">
            <button className="uppercase font-bold bg-white hover:bg-gray-200 transition-all duration-200 px-5 py-2 rounded">
              <Link href="/">Pedir Orçamento</Link>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
