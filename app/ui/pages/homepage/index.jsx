import SectionContent from "../../section-content";
import ProductsGridCard from "./ProductsGridCard";
import KnowAboutUs from "../../know-about-us";
import Center from "../../center";
import Slider from "../../slider";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { HandCoins, PencilRuler, Truck } from "lucide-react";
import Link from "next/link";

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

      <Link target="_blank" href="http://wa.me/5511974344466">
        <Image
          className="mx-auto pt-36 md:pt-28 lg:pt-36"
          src="/homepage/banner1.png"
          width={3840}
          height={1600}
          alt="Telhas Metálicas, Pintura Eletrostática e Bobina Slitada."
        />
      </Link>

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

      <section>
        <Center>
          <div className="mt-20 mb-20">
            <h1 className="hidden">Agilidade na Entrega</h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
              <div className="flex flex-col gap-3 items-center justify-center">
                <Truck
                  size={120}
                  color="white"
                  strokeWidth={1}
                  className="bg-primaryRed p-5 rounded-full"
                />
                <p className="text-2xl">Agilidade na entrega</p>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center">
                <span>
                  <HandCoins
                    size={120}
                    color="white"
                    strokeWidth={1}
                    className="bg-strongDark p-5 rounded-full"
                  />
                </span>
                <p className="text-2xl">Melhor custo no mercado</p>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center">
                <span>
                  <PencilRuler
                    size={120}
                    color="white"
                    strokeWidth={1}
                    className="bg-primaryRed p-5 rounded-full"
                  />
                </span>
                <p className="text-2xl">Fabricação sob medida</p>
              </div>
            </div>
          </div>
        </Center>
      </section>

      <section>
        <Center>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0">
            <SectionContent
              title="Telhas Metálicas"
              desc="As telhas metálicas estão se destacando cada vez mais devido à sua
            alta resistência, leveza e eficiência econômica."
              image="/homepage/telha-metalica-2.jpg"
              buttonText="Ver Modelos"
              link="/produtos"
            />

            <SectionContent
              title="Pintura Eletrostática"
              desc="A pintura eletrostática é um método de revestimento que utiliza eletricidade para aplicar tinta de forma uniforme sobre uma superfície."
              image="/homepage/pintura.jpg"
              buttonText="Ver Mais"
              link="/produtos/pintura-eletrostatica"
            />
          </div>
        </Center>
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
        <div className="flex flex-col w-full mb-10 text-center">
          <Slider />
          <Center>
            <iframe
              className="w-full min-h-[400px] rounded-xl mb-10 shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29337.180465741003!2d-46.832185125683644!3d-23.20129249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cedf228749fb63%3A0x926d241a8c4754d2!2sMap%20Calhas%20e%20Telhas!5e0!3m2!1spt-BR!2sbr!4v1715182976809!5m2!1spt-BR!2sbr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <Link
              target="_blank"
              className="bg-blue-600 hover:opacity-80 rounded-xl text-center text-white px-6 py-3 lg:text-xl"
              href="https://www.google.com/maps/place/Map+Calhas+e+Telhas/@-23.2012925,-46.7966512,17z/data=!3m1!4b1!4m6!3m5!1s0x94cedf228749fb63:0x926d241a8c4754d2!8m2!3d-23.2012925!4d-46.7940763!16s%2Fg%2F11bvt5xr0s?entry=ttu"
            >
              Ir para Google Maps
            </Link>
          </Center>
        </div>
      </footer>
    </>
  );
}
