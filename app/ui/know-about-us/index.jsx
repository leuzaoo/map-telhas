import React from "react";
import Center from "../center";
import Image from "next/image";
import MyButton from "../button";
import Link from "next/link";

export default function KnowAboutUs() {
  return (
    <>
      <Center>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10 my-10 md:my-16 lg:my-24">
          <div className="flex flex-col justify-between gap-3 items-start min-h-max w-full lg:max-w-[620px]">
            <h1 className="hidden">MAPTelhas</h1>
            <h1 className="uppercase text-primaryRed text-title font-bold">
              Conheça a Map Telhas
            </h1>
            <p className="text-2xl text-strongDark">
              Somos uma empresa especializada há{" "}
              <span className="font-bold">28 anos</span> na fabricação de telhas
              metálicas, bobina slitada, cumeeiras e pintura eletrostatica.
            </p>
            <p className="text-2xl text-strongDark">
              Nosso compromisso se baseia em tradição, qualidade e durabilidade,
              garantindo a satisfação dos clientes.
            </p>
            <p className="text-2xl text-strongDark">
              Contamos com uma equipe qualificada, materiais de alto padrão e
              seguimos rigorosamente as normas regulamentadoras para oferecer
              serviços confiáveis e tranquilidade aos nossos clientes.
            </p>
            <div className="flex w-full justify-center gap-5">
              <Link href="/sobre">
                <MyButton text="Informações" style="red-white" />
              </Link>
              <Link href="/contato">
                <MyButton text="Contato" style="transparent" />
              </Link>
            </div>
          </div>
          <div className="shadow-md rounded-xl">
            <Image
              className="lg:max-w-[360px] rounded-xl"
              src="/original/about-us-2.jpg"
              width={3000}
              height={3000}
              alt="Telhas Metálicas"
            />
          </div>
        </div>
      </Center>
      <div>
        <Image
          className="h-[240px] lg:h-[440px] object-cover"
          src="/homepage/telhas-produzidas.jpg"
          width={3000}
          height={2000}
          alt="Produção de Telha"
        />
      </div>
    </>
  );
}
