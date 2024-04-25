import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Center from "../center";

const Content = ({ title, secondTitle, description, textColor, textAlign }) => {
  const formatDescription = (desc) => {
    return desc.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <>
      {title && (
        <h1
          className={`font-bold ${
            textColor === "white" ? "text-white" : "text-strongDark"
          } text-[40px] uppercase lg:text-[60px]`}
        >
          {title}
        </h1>
      )}
      {secondTitle && (
        <h2
          className={`mt-5 text-2xl lg:text-4xl text-left uppercase font-bold ${
            textColor === "white" ? "text-white" : "text-strongDark"
          }`}
        >
          {secondTitle}
        </h2>
      )}
      <p
        className={`mt-4 mx-auto ${
          textColor === "white" ? "text-white" : "text-strongDark"
        } ${
          textAlign === "left" ? "text-left" : "text-center"
        } lg:text-xl lg:mt-0`}
      >
        {formatDescription(description)}
      </p>
    </>
  );
};

export default function Homepage() {
  return (
    <>
      <Head>
        <title>
          Telhas Metálicas | Pintura Eletrostática | Telha Sanduíche.
        </title>
        <meta
          name="description"
          content="Trabalhamos com diversos tipos de telhas. Pintura Eletrostática entre outros serviços."
          key="desc"
        />
      </Head>

      <section className="hidden lg:flex bg-primaryRed">
        <Center>
          <div className="flex items-center justify-between gap-10 py-10">
            <div className="flex flex-col justify-between items-center min-h-max w-full text-white max-w-[620px]">
              <h1 className="text-8xl font-extrabold uppercase">MAPTelhas</h1>
              <p className="text-[40px] font-light">
                Somos uma empresa especialista há 28 anos na fabricação de
                telhas e estruturas metálicas, calhas e pintura eletrostática.
              </p>
              <div className="flex items-center justify-between w-full">
                <button className="mt-10 py-3 px-5 bg-white border-2 border-white text-primaryRed uppercase text-[40px] rounded-xl font-bold">
                  <Link href="">Ver Produtos</Link>
                </button>
                <button className="mt-10 py-3 px-5 bg-transparent border-2 text-white uppercase text-[40px] rounded-xl font-bold">
                  <Link href="/">Contato</Link>
                </button>
              </div>
            </div>
            <div className="max-w-[360px]">
              <Image
                className="rounded-xl shadow-lg"
                src="/home-1.jpg"
                width={1000}
                height={1000}
                alt="Homepage"
              />
            </div>
          </div>
        </Center>
      </section>

      <section className="py-5 text-center px-5">
        <Center>
          <Content
            title="Telhas Metálicas"
            description="Compromisso baseado na tradição, qualidade e durabilidade há 28 anos."
          />
          <div className="mx-auto mt-5 md:max-w-md lg:max-w-xl">
            <Image
              className="rounded-xl shadow-xl"
              src="/telha-producao.jpg"
              width={1000}
              height={1000}
              alt="Produção de Telha"
            />
          </div>
          <button className="px-5 py-2 md:py-3 bg-primaryRed text-white text-2xl lg:text-[40px] font-bold lg:font-normal rounded mt-5">
            <Link href="/">Ver mais</Link>
          </button>
        </Center>
      </section>

      <section className="py-5 text-center px-5 bg-primaryRed">
        <Center>
          <Content
            title="Pintura Eletrostática"
            description="Criamos uma camada protetora através da aplicação de um pó pigmentado."
            textColor="white"
          />
          <div className="mx-auto mt-5 md:max-w-md lg:max-w-xl">
            <Image
              className="rounded-xl shadow-xl"
              src="/telha-pintada.jpg"
              width={1000}
              height={1000}
              alt="Produção de Telha"
            />
          </div>
          <button className="px-5 py-2 md:py-3 bg-strongDark text-white text-2xl lg:text-[40px] font-bold lg:font-normal rounded mt-5">
            <Link href="/">Ver mais</Link>
          </button>
        </Center>
      </section>

      <section className="py-5 text-center px-5">
        <Center>
          <Content
            title="Sobre nós"
            description={`Somos uma empresa especializada há 28 anos na fabricação de telhas metálicas, calhas, estruturas metálicas e pintura eletrostática.
          
          Nosso compromisso se baseia em tradição, qualidade e durabilidade, garantindo a satisfação dos clientes.
          
          Contamos com uma equipe qualificada, materiais de alto padrãoe seguimos rigorosamente as normas regulamentadoras para oferecer serviços confiáveis e tranquilidade aos nossos clientes.`}
            textAlign="left"
          />
          <div className="mx-auto mt-5 md:max-w-md lg:max-w-xl">
            <Image
              className="rounded-xl shadow-xl"
              src="/empresa.jpg"
              width={1000}
              height={1000}
              alt="Produção de Telha"
            />
          </div>
          <button className="px-5 py-2 md:py-3 bg-primaryRed text-white text-2xl lg:text-[40px] font-bold lg:font-normal rounded mt-5">
            <Link href="/">Contato</Link>
          </button>
        </Center>
      </section>

      <section className="py-5 text-center px-5 bg-primaryRed">
        <h1 className="hidden">Telhas Metálicas</h1>
        <article>
          <Center>
            <div id="Telhas Simples">
              <Content
                title="Produtos"
                secondTitle="Telha Simples"
                description="Caracterizada pela alta resistência, leveza e economia, as Telhas Metálicas TP 40 vêm ganhando mais espaço a cada dia. 
              Podem ser utilizadas em coberturas ou fechamentos laterais, a instalação pode ser feita em estruturas metálicas ou de madeira."
                textColor="white"
                textAlign="left"
              />
              <div className="max-w-lg mx-auto">
                <Image
                  className="mt-5"
                  src="/telha-simples.svg"
                  alt="Telha Simples"
                  width={1700}
                  height={1000}
                />
              </div>
            </div>
            <div id="Telha Sanduíche">
              <Content
                secondTitle="Telha Sanduíche (Termoacústica)"
                description="Compostas por duas telhas e uma camada de EPS (30mm ou 50mm), são extremamente resistentes e possuem grande eficiência térmica e acústica proporcionadas pelo EPS."
                textColor="white"
                textAlign="left"
              />
              <div className="max-w-lg mx-auto">
                <Image
                  className="mt-5"
                  src="/telha-sanduiche.svg"
                  width={1000}
                  height={1000}
                  alt="Telha Sanduíche"
                />
              </div>
            </div>
            <button className="uppercase px-5 py-2 md:py-3 bg-strongDark text-white text-2xl lg:text-[40px] font-bold lg:font-normal rounded mt-5">
              <Link href="/">Todos os Produtos</Link>
            </button>
          </Center>
        </article>
      </section>
    </>
  );
}
