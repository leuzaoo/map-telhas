import React from "react";
import Center from "../ui/center";
import Image from "next/image";
import ProductCard from "../ui/product-card";
import MyButton from "../ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Center>
      <section className="py-5 text-center">
        <h1 className="text-[40px] font-semibold">Sobre Nós</h1>
        <p className="text-left lg:text-2xl">
          Bem-vindo à Map Telhas, líder em soluções de telhas metálicas de
          qualidade excepcional. Com uma trajetória de 28 anos de excelência,
          nós estabelecemos como uma referência confiável e inovadora no setor.
        </p>

        <Image
          className="mt-3 rounded-xl shadow-md w-full"
          src="/original/about-us.jpg"
          width={1000}
          height={1000}
          alt="Sobre nós"
        />

        <p className="mt-5 text-left lg:text-2xl">
          Desde 1996, nos dedicamos incansavelmente a fornecer telhas metálicas
          de alta qualidade e serviços relacionados para uma ampla gama de
          aplicações. Trabalhamos com os melhores aços disponíveis no mercado,
          garantindo durabilidade, resistência e desempenho superiores em cada
          projeto que realizamos.
        </p>
        <p className="mt-5 text-left lg:text-2xl">
          Nossa gama de produtos inclui uma variedade de telhas metálicas,
          cumeeiras, bobinas slitadas e oferecemos serviços de pintura
          eletrostática para atender às necessidades específicas de nossos
          clientes.
        </p>
        <p className="mt-5 text-left lg:text-2xl">
          Na Map Telhas, a qualidade é a nossa prioridade número um. Contamos
          com uma equipe dedicada de profissionais altamente qualificados e
          experientes, comprometidos em oferecer produtos e serviços que superem
          as expectativas de nossos clientes.
        </p>
      </section>
      <hr />
      <section className="py-5 text-center">
        <h1 className="text-[40px] font-semibold">Nossos Produtos</h1>
        <div className="md:grid md:grid-cols-2 gap-10">
          <div className="mx-auto">
            <Link href="/produtos/cumeeira">
              <ProductCard
                product_name="Cumeeira"
                image="/original/cumeeira.png"
              />
            </Link>
          </div>
          <div className="mx-auto">
            <Link href="/produtos/telha-sanduiche">
              <ProductCard
                product_name="Telha Sanduíche"
                image="/original/telha-sanduiche.png"
                model="Trapézio 40/980"
              />
            </Link>
          </div>

          <div className="mx-auto">
            <Link href="/produtos/pintura-eletrostatica">
              <ProductCard
                product_name="Pintura Eletrostática"
                image="/original/pintura-eletrostatica.png"
              />
            </Link>
          </div>

          <div className="mx-auto">
            <Link href="/produtos/telha-translucida">
              <ProductCard
                product_name="Telha Translúcida"
                image="/original/telha-translucida.png"
              />
            </Link>
          </div>
        </div>
        <div className="text-center">
          <Link href="/produtos">
            <MyButton text="Ver Produtos" style="red-white" />
          </Link>
        </div>
      </section>
      <hr />
      <section className="py-5 text-center">
        <h1 className="text-[40px] font-semibold">Dúvidas</h1>
        <p className="text-center lg:text-2xl">
          Caso ainda tenha alguma dúvida sobre nós ou nossos produtos, entre em
          contato conosco.
        </p>
        <Link href="tel:11974344466">
          <MyButton text="Contato" style="blue-white" />
        </Link>
      </section>
    </Center>
  );
}
