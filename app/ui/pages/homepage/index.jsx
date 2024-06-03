import SectionContent from "../../section-content";
import ProductsGridCard from "./ProductsGridCard";
import KnowAboutUs from "../../know-about-us";
import Center from "../../center";
import Slider from "../../slider";
import Image from "next/image";
import Head from "next/head";
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
        src="/homepage/banner.png"
        width={3840}
        height={1000}
        alt="Telhas Metálicas, Pintura Eletrostática e Bobina Slitada."
      />

      <section>
        <KnowAboutUs />
      </section>

      <section className=" mx-auto text-center">
        <h1 className="hidden">Vídeo</h1>
        <Center>
          <video
            className="rounded-xl shadow-md"
            width="100%"
            height="auto"
            controls
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </Center>
      </section>

      <section className="relative text-center mt-10 lg:mt-20">
        <SectionContent
          title="Telhas Metálicas"
          desc="As telhas metálicas estão se destacando cada vez mais devido à sua
          alta resistência, leveza e eficiência econômica"
          image="/homepage/telha-metalica-2.jpg"
          buttonText="Ver Modelos"
          link="/produtos"
        />
      </section>

      <section className="relative text-center mt-10 lg:mt-20">
        <SectionContent
          title="Pintura Eletrostática"
          desc="A pintura eletrostática é um método de revestimento que utiliza eletricidade para aplicar tinta de forma uniforme sobre uma superfície."
          image="/homepage/pintura.jpg"
          buttonText="Ver Mais"
          link="/produtos/pintura-eletrostatica"
        />
      </section>

      <section className="mt-10 lg:mt-28 text-center mx-auto">
        <Center>
          <h1 className="mb-5 font-bold text-primaryRed text-left text-3xl md:text-title lg:text-[60px] uppercase">
            Nossos Produtos
          </h1>
          <article id="produtos">
            <ProductsGridCard />
          </article>
        </Center>
      </section>
      <Image
        className="my-10 hidden lg:block"
        src="/homepage/footer.png"
        width={3840}
        height={2000}
        alt="Faça um orçamento conosco."
      />
      <footer>
        <Slider />
      </footer>
    </>
  );
}
