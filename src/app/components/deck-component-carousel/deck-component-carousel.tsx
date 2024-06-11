'use client'
import styles from "@/app/components/deck-component-carousel/deck-component-carousel.module.scss"
import { Carousel } from '@mantine/carousel';
import { Progress } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { Embla } from '@mantine/carousel';
import Cards from '@/app/components/card/card'

export default function CarouselOfCards ({disable, cardData}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

    return (
    <>
        <Carousel
          classNames={{slide: `${disable ? styles.slideDisable : ''}`}}
          dragFree
          height={200}
          slideGap="xs"
          slideSize="5%"
          align='start'
          withControls={false}
          controlsOffset="xs"
          getEmblaApi={setEmbla}
        >
          {cardData.map((data)=> (
            <Carousel.Slide key={data.id}>
              <Cards name={data.name} image={data.image} description={data.description}></Cards>
          </Carousel.Slide>
        ))}
        </Carousel>
        <Progress
        value={scrollProgress}
        maw={220}
        size="xl"
        mt="xl"
        mx="auto"
      />
    </>
    );
}
