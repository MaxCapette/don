import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

  export default function UselessCarousel() {
    return (
        <Carousel orientation="horizontal">
            
        <CarouselContent>
          <CarouselItem className="basis-1/3">
        
            <Image
                src="/images/car1.jpeg"
                alt="slide"
                width={500}
                height={500}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3"> <Image
                src="/images/car2.jpeg"
                alt="slide"
                width={500}
                height={500}
            /></CarouselItem>
          <CarouselItem className="basis-1/3"> <Image
                src="/images/car3.jpeg"
                alt="slide"
                width={500}
                height={500}
            /></CarouselItem>
          <CarouselItem className="basis-1/3"> <Image
                src="/images/car4.jpeg"
                alt="slide"
                width={500}
                height={500}
            /></CarouselItem>
        </CarouselContent>
        
      </Carousel>
    );
  }
  