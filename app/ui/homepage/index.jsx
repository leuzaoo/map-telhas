import React from "react";
import Head from "next/head";
import Link from "next/link";

const Content = ({ title, description, textColor, textAlign }) => {
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
      <h1
        className={`font-bold ${
          textColor === "white" ? "text-white" : "text-strongDark"
        } text-[40px] uppercase`}
      >
        {title}
      </h1>
      <p
        className={`mt-4 ${
          textColor === "white" ? "text-white" : "text-strongDark"
        } ${textAlign === "center" ? "text-center" : "text-left"}`}
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

      <section className="py-5 text-center px-5">
        <Content
          title="Telhas Metálicas"
          description="Compromisso baseado na tradição, qualidade e durabilidade há 28 anos."
        />
        <button className="px-5 py-2 bg-primaryRed text-white text-2xl font-bold rounded mt-5">
          <Link href="#">Ver mais</Link>
        </button>
      </section>

      <section className="py-5 text-center px-5 bg-primaryRed">
        <Content
          title="Pintura Eletrostática"
          description="Criamos uma camada protetora através da aplicação de um pó pigmentado."
          textColor="white"
        />
        <button className="px-5 py-2 bg-strongDark text-white text-2xl font-bold rounded mt-5">
          <Link href="#">Ver mais</Link>
        </button>
      </section>

      <section className="py-5 text-center px-5">
        <Content
          title="A Empresa"
          description={`Somos uma empresa especializada há 28 anos na fabricação de telhas metálicas, calhas, estruturas metálicas e pintura eletrostática.

          Nosso compromisso se baseia em tradição, qualidade e durabilidade, garantindo a satisfação dos clientes.
          
          Contamos com uma equipe qualificada, materiais de alto padrãoe seguimos rigorosamente as normas regulamentadoras para oferecer serviços confiáveis e tranquilidade aos nossos clientes.`}
        />
        <button className="px-5 py-2 bg-primaryRed text-white text-2xl font-bold rounded mt-5">
          <Link href="#">Ver mais</Link>
        </button>
      </section>
    </>
  );
}
