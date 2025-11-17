import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface Product {
  imageUrl: string;
  name: string;
  price: number;
  tier: string;
  slug: string;
}

interface ProductCardProps {
  product: Product;
}

const tierColors = {
  Gold: "bg-brandGold text-white",
  Silver: "bg-gray-400 text-white",
  Bronze: "bg-yellow-700 text-white",
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { imageUrl, name, price, tier, slug } = product;
  const tierColorClass = tierColors[tier] || "bg-brandGold text-white";

  return (
    <article
      className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.03] hover:shadow-lg"
      tabIndex={0}
      aria-label={`View details for ${name}`}
    >
      <Link href={`/product/${slug}`} aria-label={`Go to product ${name}`}>
        <div className="relative w-full h-52 sm:h-48 md:h-40">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1 text-brandText">{name}</h3>
          <p className="text-brandGold font-bold mb-2">₹{price.toFixed(2)}</p>
          <span
            className={`inline-block px-2 py-1 rounded text-sm font-semibold ${tierColorClass}`}
            aria-label={`Tier: ${tier}`}
          >
            {tier}
          </span>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
