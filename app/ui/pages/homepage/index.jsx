import MyButton from "../../button";
import Center from "../../center";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import React from "react";

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

      <Image
        className="md:hidden mx-auto"
        src="/original/homepage-1.png"
        width={1920}
        height={600}
        alt="Homepage image"
      />

      <Image
        className="hidden md:flex mx-auto"
        src="/original/homepage-3.png"
        width={3840}
        height={600}
        alt="Homepage image"
      />

      <section className="hidden lg:flex bg-white">
        <Center>
          <div className="flex items-center justify-between gap-10 py-10">
            <div className="flex flex-col justify-between items-center min-h-max w-full text-white max-w-[620px]">
              <h1 className="text-8xl font-extrabold uppercase text-primaryRed">
                MAPTelhas
              </h1>
              <p className="text-3xl font-light text-strongDark">
                Somos uma empresa especialista há 28 anos na fabricação de
                telhas metálicas, cumeeiras, bobinas slitadas e pintura
                eletrostática.
              </p>
              <div className="flex w-full justify-start gap-5 mt-20">
                <Link href="/produtos">
                  <MyButton text="Ver Produtos" style="secondary" />
                </Link>
                <Link href="http://wa.me/551140393236" target="_blank">
                  <MyButton text="Contato" style="primary" />
                </Link>
              </div>
            </div>
            <div className="max-w-[320px] shadow-md">
              <Image
                className="rounded-xl"
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
          <Link href="/produtos">
            <MyButton text="Todos os Modelos" style="red-white" />
          </Link>
        </Center>
      </section>

      <section className="py-5 text-center px-5">
        <Center>
          <Content
            title="Pintura Eletrostática"
            description="Criamos uma camada protetora através da aplicação de um pó pigmentado."
            textColor=""
          />
          <div className="mt-5 text-center w-full">
            <Image
              className="rounded-xl shadow-xl md:max-w-sm mx-auto"
              src="/original/pintura-eletrostatica-card.png"
              width={1000}
              height={1000}
              alt="Produção de Telha"
            />
          </div>
          <Link href="/produtos/pintura-eletrostatica">
            <MyButton text="Ver mais" style="red-white" />
          </Link>
        </Center>
      </section>

      <section className="py-5 text-center px-5 max-w-3xl mx-auto">
        <Center>
          <Content
            title="Sobre nós"
            description={`Somos uma empresa especializada há 28 anos na fabricação de telhas metálicas, calhas, estruturas metálicas e pintura eletrostática.
          
          Nosso compromisso se baseia em tradição, qualidade e durabilidade, garantindo a satisfação dos clientes.
          
          Contamos com uma equipe qualificada, materiais de alto padrãoe seguimos rigorosamente as normas regulamentadoras para oferecer serviços confiáveis e tranquilidade aos nossos clientes.`}
            textAlign="left"
          />
          <div className="mx-auto mt-5 md:max-w-md lg:max-w-3xl">
            <Image
              className="rounded-xl shadow-xl"
              src="/empresa.jpg"
              width={1000}
              height={1000}
              alt="Produção de Telha"
            />
          </div>
          <Link href="/sobre">
            <MyButton text="Mais Informações" style="red-white">
              Contato
            </MyButton>
          </Link>
        </Center>
      </section>

      <section className="py-5 text-center px-5 max-w-3xl mx-auto">
        <h1 className="hidden">Nossos Produtos</h1>
        <article>
          <Center>
            <div id="Telhas Simples">
              <Content
                title="Produtos"
                secondTitle="Telha Simples"
                description="Caracterizada pela alta resistência, leveza e economia, as Telhas Metálicas TP 40 vêm ganhando mais espaço a cada dia. 
              Podem ser utilizadas em coberturas ou fechamentos laterais, a instalação pode ser feita em estruturas metálicas ou de madeira."
                textAlign="left"
              />
              <div className="max-w-3xl mx-auto">
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
                textAlign="left"
              />
              <div className="max-w-3xl mx-auto">
                <Image
                  className="mt-5"
                  src="/telha-sanduiche.svg"
                  width={1000}
                  height={1000}
                  alt="Telha Sanduíche"
                />
              </div>
            </div>

            <div id="Cumeeira">
              <Content
                secondTitle="Cumeeira"
                description="Em casos em que o telhado possui duas
                quedas, é necessária a instalação de
                cumeeiras, garantindo a vedação do vão
                existente entre as duas telhas e possibilitando
                o caimento da água para ambos os lados."
                textAlign="left"
              />
              <div className="max-w-3xl mx-auto shadow-md rounded-[20px]">
                <Image
                  className="mt-5"
                  src="/cuumeira.svg"
                  width={1000}
                  height={1000}
                  alt="Telha Sanduíche"
                />
              </div>
            </div>

            <div id="Bobina Slitada">
              <Content
                secondTitle="Bobina Slitada"
                description="Um processo contínuo de corte longitudinal
                (Slitter/Rolo), que pode ser produzido nas
                espessuras de 0,40mm, 0,50mm e 0,65mm,
                em material galvanizado, galvalume e chapas
                pré-pintadas."
                textAlign="left"
              />
              <div className="max-w-3xl mx-auto shadow-md rounded-[20px]">
                <Image
                  className="mt-5"
                  src="/bobina.svg"
                  width={1000}
                  height={1000}
                  alt="Telha Sanduíche"
                />
              </div>
            </div>

            <div id="Parafusos">
              <Content
                secondTitle="Parafusos"
                description="Dispomos de uma extensa gama de parafusos
                autoperfurantes, popularmente conhecidos
                como parafusos auto brocantes. Esses parafusos asseguram uma instalação segura
                das telhas, conferindo um elevado nível de
                fixação e assegurando uma efetiva vedação
                para impedir a infiltração de água."
                textAlign="left"
              />
              <div className="max-w-3xl mx-auto shadow-md rounded-[20px]">
                <Image
                  className="mt-5"
                  src="/parafusos.svg"
                  width={1000}
                  height={1000}
                  alt="Telha Sanduíche"
                />
              </div>
            </div>
            <Link href="/produtos">
              <MyButton text="Todos os Produtos" style="red-white" />
            </Link>
          </Center>
        </article>
      </section>
    </>
  );
}
