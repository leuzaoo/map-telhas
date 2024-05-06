import { informacoes } from "../data/informacoes";
import Center from "../ui/center";
import InfoCard from "../ui/info-card";

export default function InformationPage() {
  return (
    <div className="py-5 px-5 text-xl font-medium">
      <Center>
        <h1 className="uppercase text-[40px] text-primaryRed font-extrabold">
          Informações
        </h1>
        <div className="h-[2px] w-5/6 bg-primaryRed mt-5 mr-auto" />
        <section className="mt-5">
          <ul className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-between">
            {informacoes.map((product) => (
              <li key={product.id}>
                <InfoCard
                  image={product.image}
                  title={product.title}
                  desc={product.desc}
                />
              </li>
            ))}
          </ul>
        </section>
      </Center>
    </div>
  );
}
