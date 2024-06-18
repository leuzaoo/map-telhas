import ProductCard from "../ui/product-card";
import { produtos } from "../data/produtos";
import Center from "../ui/center";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="pt-44 pb-10 px-5 text-xl font-medium">
      <Center>
        <h1 className="leading-10 uppercase font-bold text-title text-primaryRed">
          Nossos Produtos
        </h1>
        <div className="h-[2px] w-full md:w-5/6 bg-primaryRed mr-auto" />
        <section id="telhas-metalicas">
          <h1 className="hidden">Telhas Metálicas</h1>
          <ul className="flex flex-wrap gap-5 items-start justify-between">
            {produtos.map((product) => (
              <li key={product.id} className="mx-auto md:mx-0">
                <Link href={`/produtos/${product.slug}`}>
                  <ProductCard
                    product_name={product.name}
                    image={product.image}
                    model={product.model}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Center>
    </div>
  );
}
