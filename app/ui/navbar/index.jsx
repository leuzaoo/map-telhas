"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    id: 1,
    name: "Produtos",
    link: "/produtos",
  },
  {
    id: 2,
    name: "Sobre Nós",
    link: "/sobre",
  },
  {
    id: 3,
    name: "Contato",
    link: "/contato",
  },
  {
    id: 4,
    name: "Informações",
    link: "/informacoes",
  },
];

function DeviceNavBar({ open, setOpen }) {
  const closeNav = () => {
    setOpen(false);
  };

  return (
    <div
      className={`absolute z-50 top-0 left-0 h-screen w-screen bg-primaryRed text-[#fff] transform lg:hidden ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md`}
    >
      <div className="flex flex-col items-left gap-3 px-10 pt-10 text-3xl">
        <ul className="flex flex-col gap-5">
          <li>
            <Link onClick={closeNav} href="/produtos">
              Produtos
            </Link>
          </li>
          <li>
            <Link onClick={closeNav} href="/sobre">
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link onClick={closeNav} href="/contato">
              Contato
            </Link>
          </li>
          <li>
            <Link onClick={closeNav} href="/informacoes">
              Informações 
            </Link>
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
          <Link href="/">
            <Image src="/logo.svg" width={70} height={40} alt="Logo Image" />
          </Link>
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
              {navItems.map((item) => (
                <li key={item.id} className="min-w-max">
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:contents">
            <button className="uppercase font-bold bg-white hover:bg-gray-200 transition-all duration-200 px-5 py-2 rounded">
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5511974344466&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento."
              >
                Pedir Orçamento
              </Link>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
