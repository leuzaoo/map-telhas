import { roofTiles } from "../data/roof-tiles";
import ProductCard from "../ui/product-card";
import Center from "../ui/center";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="px-5 py-5 text-xl font-medium">
      <Center>
        <h1 className="uppercase">Nossos Produtos</h1>
        <h1 className="text-[32px] font-bold mt-10">Telhas Metálicas</h1>

        <ul className="md:flex flex-wrap gap-5 items-start justify-between">
          {roofTiles.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.slug}`}>
                <ProductCard
                  product_name={product.name}
                  image={product.image}
                />
              </Link>
            </li>
          ))}
        </ul>
      </Center>
    </div>
  );
}
