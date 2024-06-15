import CarouselHome from "../components/home/Carousel";
import Explore from "../components/home/Explore";
import SubFooter from "@/components/home/SubFooter";
import Faq from "@/components/home/Faq";

export default function Home() {
  return (
    <main className="">
      <CarouselHome />
      <div className="relative">
        <Explore />
        <SubFooter />
        <Faq />
      </div>
    </main>
  );
}
