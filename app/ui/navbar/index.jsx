"use client";
import { Facebook, Instagram, Phone } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    id: 0,
    name: "Home",
    link: "/",
  },
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
      <div className="bg-primaryRed text-white w-full lg:flex">
        <div className="max-w-screen-lg w-full mx-auto flex items-center py-2 justify-between">
          <div className="hidden lg:flex items-center gap-2 ">
            <Instagram />
            <Facebook />
            <Phone />
          </div>
          <div className="mx-auto lg:mx-0">
            <Link href="tel:1140393236">
              (11) 4039-3236 | vendas@maptelhas.com.br
            </Link>
          </div>
        </div>
      </div>

      <header className="px-5 flex w-full justify-center items-center h-[60px] bg-white shadow-xl">
        <div className="max-w-screen-lg w-full flex justify-between items-center">
          <DeviceNavBar open={open} setOpen={setOpen} />
          <Link href="/">
            <Image
              src="/original/logo.svg"
              width={160}
              height={160}
              alt="Logo Image"
            />
          </Link>
          <div
            className="cursor-pointer z-50 flex w-10 h-6 flex-col justify-between items-center lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span
              className={`h-1 w-full bg-primaryRed rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-2.5 bg-white" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-primaryRed rounded-lg transition duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-primaryRed rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-2.5 bg-white" : ""
              }`}
            />
          </div>

          <div className="hidden lg:flex items-center justify-between text-xl text-primaryRed font-extrabold uppercase">
            <ul className="flex gap-10">
              {navItems.map((item) => (
                <li key={item.id} className="min-w-max">
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
