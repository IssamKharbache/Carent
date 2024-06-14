import CarouselHome from "@/components/home/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <CarouselHome />
      <div className="relative">
        <Explore />
      </div>
    </main>
  );
}
