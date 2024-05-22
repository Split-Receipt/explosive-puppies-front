'use client'
import PlayerDeck from "../components/deck/player-deck";
import { Carousel } from '@mantine/carousel';

export default function testPage() {

	return (
		<>
      <PlayerDeck></PlayerDeck>
        <Carousel
          withIndicators
          height={200}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >
          <Carousel.Slide>1</Carousel.Slide>
          <Carousel.Slide>2</Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
        </Carousel>
    </>
	);
};
