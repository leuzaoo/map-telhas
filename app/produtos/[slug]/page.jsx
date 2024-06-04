import { produtos } from "@/app/data/produtos";
import MyButton from "@/app/ui/button";
import Center from "@/app/ui/center";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage({ params }) {
  const { slug } = params;
  const product = produtos.find((product) => product.slug === slug);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <>
      <div className="py-5">
        <Center>
          <h1 className="mt-3 mb-5 text-3xl lg:text-title font-bold text-primaryRed uppercase">
            {product.name}
          </h1>
          <div className="lg:flex items-start gap-20">
            <div className="max-w-[500px]">
              <Image
                className="shadow-md rounded-xl mt-3 lg:mt-0"
                src={product.image}
                alt={`${product.name} image`}
                width={1000}
                height={1000}
              />
              <div className="flex flex-col gap-5 mt-3 text-lg lg:text-xl pb-5 lg:pb-0">
                {product.description ? (
                  <>
                    <p>
                      <span className="font-bold">Característica: </span>
                      {product.description}
                    </p>
                  </>
                ) : (
                  ""
                )}
                {product.material ? (
                  <>
                    <p>
                      <span className="font-bold">Opções de Material: </span>
                      <br />
                      {product.material}
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 text-lg lg:text-xl">
              {product.maintenance ? (
                <>
                  <p>
                    <span className="font-bold">Manutenção: </span>
                    {product.maintenance}
                  </p>
                </>
              ) : (
                ""
              )}
              {product.application ? (
                <>
                  <p>
                    <span className="font-bold">Aplicações: </span>
                    <br />
                    {product.application}
                  </p>
                </>
              ) : (
                ""
              )}
              {product.personalization ? (
                <>
                  <p>
                    <span className="font-bold">Personalização: </span>
                    {product.personalization}
                  </p>
                </>
              ) : (
                ""
              )}

              <Link
                className="mt-0 mx-auto"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5511974344466&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento."
              >
                <MyButton style="red-white" text="Orçamento" />
              </Link>
              <h1 className="hidden">Orçamento</h1>
            </div>
          </div>
          <hr className="mt-5 mb-5" />
          <footer className="pb-5 text-lg lg:text-xl">
            <h1 className="text-[40px] pb-5 font-semibold">Sobre Nós</h1>
            <p>
              Líder em soluções de telhas metálicas de qualidade excepcional.
              Com uma trajetória de 28 anos de excelência, nós estabelecemos
              como uma referência confiável e inovadora no setor.
            </p>
            <br />
            <p>
              Desde 1996, nos dedicamos incansavelmente a fornecer telhas
              metálicas de alta qualidade e serviços relacionados para uma ampla
              gama de aplicações. Trabalhamos com os melhores aços disponíveis
              no mercado, garantindo durabilidade, resistência e desempenho
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
              Na Map Telhas, a qualidade é a nossa prioridade número um.
              Contamos com uma equipe dedicada de profissionais altamente
              qualificados e experientes, comprometidos em oferecer produtos e
              serviços que superem as expectativas de nossos clientes.
            </p>
          </footer>
        </Center>
      </div>
    </>
  );
}
