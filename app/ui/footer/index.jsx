import { Facebook, Headset, Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import Center from "../center";

export default function Footer() {
  return (
    <>
      <div className="bg-strongDark p-5 w-screen">
        <Image
          className="mx-auto"
          src="/logo.svg"
          width={170}
          height={100}
          alt="Logo image"
        />
        <p className="text-center py-5 text-white uppercase font-bold">
          Contatos
        </p>
        <div className="max-w-screen-lg mx-auto pb-5 flex flex-col lg:flex-row lg:justify-between text-white gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <MapPin />
              <p>
                Rua Brás Cubas 60 - Vila Tavares
                <br />
                Campo Limpo Paulista/SP - 13230-075
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone />
            <p>(11) 9 7434-4466</p>
          </div>

          <div className="flex items-center gap-3">
            <Headset />
            <p>(11) 4893-0293</p>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-center gap-20 py-5 text-white">
          <Facebook />
          <Instagram />
        </div>
        <span className="flex justify-center text-white text-xs">
          ©️ 2024 MAP Telhas. Todos os direitos reservados.{" "}
        </span>
      </div>
    </>
  );
}
