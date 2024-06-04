"use client";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
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
      <div className="flex flex-col items-left justify-between gap-20 px-10 pt-10 text-3xl">
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
        <div className="flex items-center justify-center gap-20">
          <Link
            href="https://www.facebook.com/profile.php?id=61558732025330"
            target="_blank"
          >
            <Facebook />
          </Link>
          <Link href="https://www.instagram.com/maptelhas/" target="_blank">
            <Instagram />
          </Link>
          <Link href="http://wa.me/5511974344466" target="_blank">
            <Image
              src="/whatsapp-icon-white.svg"
              width={24}
              height={24}
              alt="Whatsapp icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed w-full text-sm z-50">
        <div className="bg-strongDark text-white w-full lg:flex h-16">
          <div className="max-w-screen-lg mx-auto h-full w-full flex items-center py-2 justify-between">
            <div className="hidden w-full lg:flex items-center gap-2">
              <MapPin size={20} />
              <p>
                Rua Brás Cubas, 160 - Vila Tavares - Campo Limpo Paulista/SP
              </p>
            </div>
            <div className="flex items-center justify-between lg:justify-end w-full px-5 lg:px-0 lg:gap-8 lg:mx-0">
              <Link
                className="flex items-center gap-2"
                href="http://wa.me/5511974344466"
                target="_blank"
              >
                <Image
                  className="hidden md:flex"
                  src="/whatsapp-icon-white.svg"
                  width={20}
                  height={20}
                  alt="Whatsapp icon"
                />
                <p>(11) 97434-4466</p>
              </Link>{" "}
              <Link
                className="flex items-center gap-2"
                href="mailto:vendas@maptelhas.com.br"
              >
                <Mail size={20} className="hidden md:flex" />
                vendas@maptelhas.com.br
              </Link>
            </div>
          </div>
        </div>

        <header className="px-5 flex w-full justify-center items-center h-20 bg-white shadow-xl">
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
                className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-2.5 bg-white" : ""
                }`}
              />
              <span
                className={`h-1 w-full bg-black rounded-lg transition duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                  open ? "-rotate-45 -translate-y-2.5 bg-white" : ""
                }`}
              />
            </div>

            <div className="hidden lg:flex items-center justify-between text-xl text-strongDark font-bold uppercase">
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
      </div>
    </>
  );
}
