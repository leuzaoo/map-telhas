import Center from "../ui/center";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Center>
      <div className="mt-5">
        <section>
          <div className="lg:hidden">
            <h1 className="hidden">Sobre nós</h1>
            <h1 className="uppercase text-primaryRed text-[40px] font-extrabold text-right">
              A Empresa
            </h1>
            <h1 className="text-right text-3xl">
              Localizada em Campo Limpo Paulista/SP
            </h1>
            <div className="my-3 h-[2px] w-5/6 bg-primaryRed ml-auto" />
          </div>
          <Image
            className="rounded-xl shadow-md"
            src="/original/about-us-2.jpg"
            width={1500}
            height={1000}
            alt="Sobre nós"
          />
          <div className="my-5 flex flex-col gap-3 text-lg ">
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
            <p>
              Desde <span className="font-bold">1996</span>, nos dedicamos
              incansavelmente a fornecer telhas telhas metálicas de alta
              qualidade e serviços relacionados para uma ampla gama de
              aplicações. Trabalhamos com os melhores aços disponíveis no
              mercado, garantindo durabilidade, resistência e desempenho
              superiores em cada projeto que realizamos.
            </p>
            <Image
              className="rounded-xl shadow-md"
              src="/original/about-us-3.png"
              width={1000}
              height={1000}
              alt="Sobre nós"
            />
          </div>
        </section>
        <section>
          <h1 className="uppercase text-primaryRed text-3xl font-extrabold text-center">
            Junte-se a Nós!
          </h1>
          <div className="mt-5 pb-5 flex items-center gap-3 overflow-x-auto">
            <Image
              className="rounded-xl shadow-md max-h-40"
              src="/original/carrousel-1.png"
              width={2000}
              height={2000}
              alt="Sobre nós"
            />
            <Image
              className="rounded-xl shadow-md max-h-40"
              src="/original/carrousel-2.png"
              width={2000}
              height={2000}
              alt="Sobre nós"
            />
            <Image
              className="rounded-xl shadow-md max-h-40"
              src="/original/carrousel-3.png"
              width={2000}
              height={2000}
              alt="Sobre nós"
            />
            <Image
              className="rounded-xl shadow-md max-h-40"
              src="/original/carrousel-4.png"
              width={2000}
              height={2000}
              alt="Sobre nós"
            />
            <Image
              className="rounded-xl shadow-md max-h-40"
              src="/original/carrousel-5.png"
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
