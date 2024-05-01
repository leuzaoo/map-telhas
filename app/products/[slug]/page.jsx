import { roofTiles } from "@/app/data/roof-tiles";
import MyButton from "@/app/ui/button";
import Center from "@/app/ui/center";
import Image from "next/image";

export default async function ProductPage({ params }) {
  const { slug } = params;
  const product = roofTiles.find((product) => product.slug === slug);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <>
      <Center>
        <div className="lg:flex items-end gap-10">
          <div>
            <h1 className="mt-5 text-[40px] font-semibold">{product.name}</h1>
            <p className="text-sm lg:text-xl">{product.description}</p>
            <Image
              className="shadow-md rounded-xl mt-3"
              src={product.image}
              alt={`${product.name} image`}
              width={1000}
              height={1000}
            />
          </div>
          <div>
            <ul className="flex flex-col mt-3 text-lg lg:text-2xl pb-5">
              <li>
                {product.material ? (
                  <>
                    <span className="font-bold">Opções de Material: </span>
                    <br />
                    {product.material}
                  </>
                ) : (
                  ""
                )}
              </li>
              <li>
                {product.application ? (
                  <>
                    <span className="font-bold">Aplicações: </span>
                    <br />
                    {product.application}
                  </>
                ) : (
                  ""
                )}
              </li>
              <MyButton style="blue-white" text="Orçamento" />
            </ul>
          </div>
        </div>
        <hr className="mt-5 mb-5" />
        <div className="flex flex-col gap-3">
          <h1 className="text-[40px] font-semibold">Informações</h1>
          <p>
            <span className="font-bold">Telha de Aço: </span> Telhas de aço são
            produzidas com um dos materiais mais duráveis e resistentes
            disponíveis, oferecendo proteção excepcional contra intempéries e
            durabilidade de longo prazo para sua estrutura.
          </p>
          <p>
            <span className="font-bold">Telha Térmica:</span>
            As telhas térmicas são especificamente projetadas para proporcionar
            isolamento térmico, mantendo seu espaço interno mais fresco no calor
            do verão e mais quente durante os meses frios, garantindo conforto
            em todas as estações.
          </p>
        </div>
        <hr className="mt-5 mb-5" />
        <footer className="pb-5">
          <h1 className="text-[40px] font-semibold">Sobre Nós</h1>
          <p>
            Bem-vindo à Map Telhas, líder em soluções de telhas metálicas de
            qualidade excepcional. Com uma trajetória de 28 anos de excelência,
            nós estabelecemos como uma referência confiável e inovadora no
            setor.
          </p>
          <br />
          <p>
            Desde 1996, nos dedicamos incansavelmente a fornecer telhas
            metálicas de alta qualidade e serviços relacionados para uma ampla
            gama de aplicações. Trabalhamos com os melhores aços disponíveis no
            mercado, garantindo durabilidade, resistência e desempenho
            superiores em cada projeto que realizamos.
          </p>
          <br />
          <p>
            Nossa gama de produtos inclui uma variedade de telhas metálicas,
            cumeeiras, bobinas slitadas e oferecemos serviços de pintura
            eletrostática para atender às necessidades específicas de nossos
            clientes.
          </p>
          <br />
          <p>
            Na Map Telhas, a qualidade é a nossa prioridade número um. Contamos
            com uma equipe dedicada de profissionais altamente qualificados e
            experientes, comprometidos em oferecer produtos e serviços que
            superem as expectativas de nossos clientes.
          </p>
        </footer>
      </Center>
    </>
  );
}
