import ProductCard from "../ui/product-card";
import { produtos } from "../data/produtos";
import Center from "../ui/center";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="px-5 py-10 text-xl font-medium">
      <Center>
        <h1 className="uppercase font-extrabold text-title text-primaryRed">
          Nossos Produtos
        </h1>
        <div className="my-3 h-[2px] w-full md:w-2/4 bg-primaryRed mr-auto" />
        <section id="telhas-metalicas">
          <h1 className="text-[32px] font-bold mt-10">Telhas Metálicas</h1>
          <ul className="md:flex flex-wrap gap-5 items-start justify-between">
            {produtos.map((product) => (
              <li key={product.id}>
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
