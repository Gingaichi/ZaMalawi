"use client";

import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card className="relative w-full h-96 overflow-hidden ">
      {currentProduct.images?.[0] && (
        <div className="relative w-full h-full">
          <Image
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
      )}

      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
        <CardTitle className="text-3xl font-bold text-white mb-2">
          {currentProduct.name}
        </CardTitle>
        {price?.unit_amount && (
          <p className="text-xl text-white">
            MWK {(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
