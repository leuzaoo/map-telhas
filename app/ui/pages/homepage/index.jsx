import HomeProductCard from "../../home-product-card";
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
        alt="Telhas Metálicas, Pintura Eletrostática e Bobina Slitada."
      />

      <Image
        className="hidden md:flex mx-auto"
        src="/original/homepage-3.png"
        width={3840}
        height={600}
        alt="Telhas Metálicas, Pintura Eletrostática e Bobina Slitada."
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
                telhas metálicas, bobina slitada e pintura eletrostática.
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
                alt="Telhas Metálicas"
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
          <div className="mt-5">
            <Link href="/produtos">
              <MyButton text="Todos os Modelos" style="red-white" />
            </Link>
          </div>
        </Center>
      </section>

      <section className="py-5 text-center px-5">
        <Center>
          <Content
            title="Pintura Eletrostática"
            description="Criamos uma camada protetora através da aplicação de um pó pigmentado."
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
          <div className="mt-5">
            <Link href="/produtos/pintura-eletrostatica">
              <MyButton text="Ver mais" style="red-white" />
            </Link>
          </div>
        </Center>
      </section>

      <section className="py-5 text-center px-5 mx-auto">
        <h1 className="font-bold text-title lg:text-[60px] uppercase">
          Produtos
        </h1>
        <Center>
          <article>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
              <HomeProductCard
                title="Telha Simples"
                image="/original/telha-simples.png"
                link="/produtos/telha-simples"
              />
              <HomeProductCard
                title="Telha Sanduíche"
                image="/original/telha-sanduiche.png"
                link="/produtos/telha-sanduiche"
              />
              <HomeProductCard
                title="Pintura Eletrostática"
                image="/original/pintura-eletrostatica-home.png"
                link="/produtos/pintura-eletrostatica"
              />
              <HomeProductCard
                title="Bobina Slitada"
                image="/bobina.svg"
                link="/produtos/bobina-slitada"
              />
              <HomeProductCard
                title="Cumeeira"
                image="/original/cumeeira.png"
                link="/produtos/cumeeira"
              />
              <HomeProductCard
                title="Parafusos"
                image="/original/parafusos.png"
                link="/produtos/parafusos"
              />
            </div>
            <div className="mt-5">
              <Link href="/produtos">
                <MyButton text="Todos os Produtos" style="red-white" />
              </Link>
            </div>
          </article>
        </Center>
      </section>
      <section className="py-5 text-center px-5 mx-auto">
        <Center>
          <h1 className="text-title lg:text-[60px] uppercase font-bold">
            Sobre Nós
          </h1>
          <div className="mt-5 lg:grid grid-cols-2 gap-10 items-center text-center mx-auto">
            <div className="text-xl text-left flex flex-col gap-3">
              <p>
                Somos uma empresa especializada há 28 anos na fabricação de
                telhas metálicas, bobina slitada, cumeeiras e pintura
                eletrostática.
              </p>
              <p>
                Nosso compromisso se baseia em tradição, qualidade e
                durabilidade, garantindo a satisfação dos clientes.
              </p>
              <p>
                Contamos com uma equipe qualificada, materiais de alto padrão e
                seguimos rigorosamente as normas regulamentadoras para oferecer
                serviços confiáveis e tranquilidade aos nossos clientes.
              </p>
            </div>
            <div>
              <div className="mx-auto mt-5">
                <Image
                  className="rounded-xl shadow-xl"
                  src="/empresa.jpg"
                  width={1000}
                  height={1000}
                  alt="Produção de Telha"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Link href="/sobre">
              <MyButton text="Mais Informações" style="red-white">
                Contato
              </MyButton>
            </Link>
          </div>
        </Center>
      </section>
      <Image
        className="pb-5 lg:my-10"
        src="/original/footer.png"
        width={3840}
        height={600}
        alt="Fabricadas nos melhores aços disponíveis no mercado."
      />
    </>
  );
}
