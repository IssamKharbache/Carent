"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";

//card shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Autoplay from "embla-carousel-autoplay";
import { profile } from "../../app/data";

const CarouselHome = () => {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {profile?.map((item, idx) => {
            return (
              <CarouselItem
                className="w-full h-full bg-cover bg-center pt-5 bg-no-repeat relative pointer-events-none "
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
                key={idx}
              >
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] opacity-90"></div>
                <div className="">
                  <Card className="bg-transparent border-none">
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="h-[90vh] flex justify-center items-center flex-col relative">
                        <h3 className="mb-8 flex items-center  gap-6">
                          <span className="text-main/90 font-bold text-5xl text-center md:text-8xl transition-[3s]">
                            {item.title}
                          </span>
                        </h3>
                        <p className="text-white text-xl md:text-5xl font-semibold text-center ">
                          <span>{item.text}</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
