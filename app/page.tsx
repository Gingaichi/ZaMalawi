import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
import { Card } from "@/components/ui/card";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div>
    <div className="relative w-full h-[635px] overflow-hidden">
  <Image
    src="/images/landx.jpg"
    alt="models"
    fill
    className="object-cover object-top"
    priority
  />

  {/* Overlay moved inside */}
  <div className="absolute inset-0 flex items-center justify-start bg-black/40">
    <h1 className="text-3xl sm:text-5xl md:text-3xl text-white text-left px-4 leading-tight tracking-wide drop-shadow-lg">
      For Malawians, by Malawians.
      <br />
      Whatever your warm heart desires.
      <br /><br />
      <Card><a href="/products">Start shopping now</a></Card>
    </h1>
  </div>
</div>


      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-red-800">
              Za Malawi basi.
            </h2>
            <p className="text-neutral-600">
              Discover all the best Malawian products, for us, by us.</p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Browse All Products
              </Link>
            </Button>
          </div>
          <Image
            alt="Hero Image"
            src={products.data[0].images[0]}
            className="rounded"
            width={450}
            height={450}
          />
        </div>
      </section>
      
      <div className="flex flex-row justify-between items-center gap-4 h-screen overflow-hidden">
  <div className="relative w-1/3 h-full">
    <Image src="/images/b.jpg" alt="models" fill className="object-cover border-white" priority/>
    <div className="absolute inset-0 flex-col space-y-4 justify-center bg-black/40">
      <h2 className="text-white text-2xl font-bold text-center px-4">
        Traditional Clothing
      </h2><br />
      <Card className="rounded-none"><a href="/products">find your style</a></Card>
    </div>
  </div>
  <div className="relative w-1/3 h-full">
    <Image src="/images/r.jpg" alt="models" fill  className="object-cover border-white" priority/>
    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
      <h2 className="text-white text-1xl lg:text-2xl md:text-2xl font-bold text-center px-4">
        Everything Malawi
      </h2><br />
      <Card className="rounded-none"><a href="/products">start shopping now</a></Card>
    </div>
  </div>
  <div className="relative w-1/3 h-full">
    <Image src="/images/g.jpg"  alt="models"  fill  className="object-cover border-white" priority />
    <div className="absolute inset-0 flex-col space-y-4 justify-center bg-black/40">
      <h2 className="text-white text-2xl font-bold text-center px-4">
        Food
      </h2><br />
      <Card className="rounded-none"><a href="/products">Feed your hunger</a></Card>
    </div>
  </div>
</div>
<section className="relative w-full h-[500px]">
  <Image src="/images/o.jpg" alt="models" fill className="object-cover" priority />
</section>
</div>
  );
}