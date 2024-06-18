import Center from "../ui/center";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Center>
      <div className="pt-44 pb-5">
        <section>
          <div className="lg:hidden">
            <h1 className="hidden">Sobre nós</h1>
            <h1 className="uppercase text-primaryRed text-title font-bold text-right">
              A Empresa
            </h1>
            <h1 className="text-right text-3xl font-light">
              Localizada em{" "}
              <span className="font-medium">Campo Limpo Paulista/SP </span>
            </h1>
            <div className="h-[2px] w-5/6 bg-primaryRed ml-auto" />
          </div>
          <div className="lg:grid grid-cols-2 text-lg gap-10">
            <div className="my-5 flex flex-col gap-3 lg:text-justify">
              <Image
                className="rounded-xl shadow-md"
                src="/original/about-us-2.jpg"
                width={1500}
                height={1000}
                alt="Sobre nós"
              />
              <p>
                Nossa gama de produtos inclui uma variedade de telhas metálicas,
                cumeeiras, bobinas slitadas e oferecemos serviços de pintura
                eletrostática para atender as necessidades específicas de nossos
                clientes.
              </p>
              <p>
                Na Map Telhas, a qualidade é a nossa prioridade número um.
                Contamos com uma equipe dedicada de profissionais altamente
                qualificados e experientes, comprometidos em oferecer produtos e
                serviços que superem as expectativas de nossos clientes.
              </p>
            </div>
            <div className="lg:text-justify">
              <div className="hidden lg:contents">
                <p className="hidden">Sobre nós</p>
                <p className="uppercase text-primaryRed text-[40px] font-bold text-right">
                  A Empresa
                </p>
                <p className="text-right text-3xl font-light mt-2">
                  Localizada em{" "}
                  <span className="font-medium">Campo Limpo Paulista/SP</span>
                </p>
                <div className="my-2 h-[2px] w-5/6 bg-primaryRed ml-auto" />
              </div>
              <p>
                Desde <span className="font-bold">1996</span>, nos dedicamos
                incansavelmente a fornecer telhas metálicas de alta
                qualidade e serviços relacionados para uma ampla gama de
                aplicações. Trabalhamos com os melhores aços disponíveis no
                mercado, garantindo durabilidade, resistência e desempenho
                superiores em cada projeto que realizamos.
              </p>
              <div>
                <Image
                  className="rounded-xl shadow-md mt-5"
                  src="/original/about-us-3.png"
                  width={1000}
                  height={1000}
                  alt="Sobre nós"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <h1 className="uppercase text-primaryRed text-3xl font-bold text-center">
            Junte-se a Nós!
          </h1>
          <div className="mt-5 pb-5 flex items-center gap-3 lg:gap-0 justify-between overflow-x-auto">
            <Image
              className="rounded-xl shadow-md max-w-80"
              src="/original/carrousel-1.png"
              width={2000}
              height={2000}
              alt="Sobre nós"
            />
            <Image
              className="rounded-xl shadow-md max-w-80"
              src="/original/carrousel-2.png"
              width={2000}
              height={2000}
              alt="Sobre nós"
            />
            <Image
              className="rounded-xl shadow-md max-w-80"
              src="/original/carrousel-3.png"
              width={2000}
              height={2000}
              alt="Sobre nós"
            />
          </div>
        </section>
      </div>
    </Center>
  );
}
