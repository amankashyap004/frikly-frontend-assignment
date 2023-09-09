import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

const Carousels = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src="assets/carousel-image.png" className="w-full" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="assets/carousel-image.png" className="w-full" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="assets/carousel-image.png" className="w-full" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
