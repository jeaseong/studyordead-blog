"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Scrollable.css";

type Props = {
  children: React.ReactNode;
};

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 576 },
    items: 7,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 6,
  },
};

const ScrollableBar = ({ children }: Props) => {
  return (
    <Carousel
      containerClass="flex w-full gap-2"
      draggable
      swipeable
      responsive={responsive}
      itemClass="mx-2"
    >
      {children}
    </Carousel>
  );
};

export default ScrollableBar;
