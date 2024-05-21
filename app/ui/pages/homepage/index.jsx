import HomeProductCard from "../../home-product-card";
import SectionContent from "../../section-content";
import ProductsGridCard from "./ProductsGridCard";
import MyButton from "../../button";
import Center from "../../center";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import React from "react";

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

      <section className="bg-white">
        <Center>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 py-10">
            <div className="flex flex-col justify-between gap-3 items-start min-h-max w-full text-white max-w-[620px]">
              <h1 className="hidden">MAPTelhas</h1>
              <h1 className="uppercase text-primaryRed text-title font-extrabold">
                Conheça a Map Telhas
              </h1>
              <p className="text-2xl text-strongDark">
                Somos uma empresa especializada há{" "}
                <span className="font-bold">28 anos</span> na fabricação de
                telhas metálicas, bobina slitada, cumeeiras e pintura
                eletrostatica.
              </p>
              <p className="text-2xl text-strongDark">
                Nosso compromisso se baseia em tradição, qualidade e
                durabilidade, garantindo a satisfação dos clientes.
              </p>
              <p className="text-2xl text-strongDark">
                Contamos com uma equipe qualificada, materiais de alto padrão e
                seguimos rigorosamente as normas regulamentadoras para oferecer
                serviços confiáveis e tranquilidade aos nossos clientes.
              </p>
              <div className="flex w-full justify-start gap-5">
                <Link href="/sobre">
                  <MyButton text="Mais Informações" style="secondary" />
                </Link>
                <Link href="/contato">
                  <MyButton text="Contato" style="primary" />
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
            className="h-[280px] object-cover"
            src="/homepage/telha-metalica.jpg"
            width={3000}
            height={2000}
            alt="Produção de Telha"
          />
          <div className="px-5 bg-primaryRed text-white py-3 text-lg">
            <ul className="flex items-center gap-10 lg:gap-20 justify-center lg:text-xl">
              <li className="hidden md:flex">
                • Padrão internacional de qualidade
              </li>
              <li>• Fabricação sob medida</li>
              <li>• Agilidade na entrega</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative text-center mt-10 lg:mt-10">
        <SectionContent
          title="Telhas Metálicas"
          image="/homepage/telha-metalica-2.jpg"
          button="Ver Modelos"
          link="/produtos"
        />
      </section>

      <section className="relative text-center mt-10">
        <SectionContent
          title="Pintura Eletrostática"
          image="/homepage/pintura.jpg"
          button="Ver Mais"
          link="/produtos/pintura-eletrostatica"
        />
      </section>

      <section className="mt-10 text-center mx-auto">
        <Center>
          <h1 className="mb-5 font-extrabold text-primaryRed text-left text-3xl md:text-title lg:text-[60px] uppercase">
            Nossos Produtos
          </h1>
          <article id="produtos">
            <ProductsGridCard />
          </article>
        </Center>
      </section>
      <Image
        className="my-5"
        src="/original/footer.png"
        width={3840}
        height={2000}
        alt="Fabricadas nos melhores aços disponíveis no mercado."
      />
    </>
  );
}
