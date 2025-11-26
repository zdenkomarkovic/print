"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

import Hero1 from "@/public/hero.jpg";
import Hero2 from "@/public/hero1.png";
import Hero3 from "@/public/hero2.jpg";

import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import Link from "next/link";

import { motion } from "framer-motion";

const Hero3Images = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <Carousel
        className="absolute top-0 left-0 w-full h-[100dvh] z-[0]"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnFocusIn: false,
            delay: 5000,
          }),
          Fade(),
        ]}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[1]" />
        <CarouselContent>
          <CarouselItem>
            <Image
              src={Hero1}
              alt="DESIGNER 02 Proizvod 1"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Hero2}
              alt="DESIGNER 02 Proizvod 2"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Hero3}
              alt="DESIGNER 02 Proizvod 3"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="relative flex flex-col gap-6 w-full items-center justify-center text-white z-[1] text-center">
        <h1 className="text-white md:text-[4rem] text-4xl font-bold max-w-[900px] leading-[1.2] px-4">
          Tvoj stil. Tvoj izraz.
          <br />
          <span className="text-blue-300">Na svakom proizvodu.</span>
        </h1>
        <h2 className="text-gray-100 font-medium md:text-[1.5rem] text-lg max-w-[800px] px-4">
          Unikatni printovi na majicama, šoljama, cegerima i još mnogo toga –
          kreirano s ljubavlju, štampano po porudžbini.
        </h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <Link href="/proizvodi">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-primary px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl"
            >
              Pogledaj moje proizvode ovde
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </Link>
          <a
            href="https://www.zazzle.com/store/designer02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary/90 backdrop-blur-sm border-white border-2 rounded-full px-6 md:px-8 md:py-4 py-3 font-bold text-lg text-white shadow-lg hover:shadow-xl hover:bg-primary"
            >
              Poseti moju prodavnicu na Zazzle
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero3Images;
