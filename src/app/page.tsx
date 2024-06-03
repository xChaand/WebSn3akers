import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        <MaxWidthWrapper>
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block"></div>
            </div>
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
              Your Marketplace For{" "}
              <span className="bg-red-600 px-2 text-white">Decentralized</span>{" "}
              Sneaker Trading
            </h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Buy and sell sneakers on the{" "}
              <span className="font-semibold">Etherium</span> blockchain &
              collect unique <span className="font-semibold">NFTs</span> with
              each sneaker trade.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
