import { Carousel, CarouselItem } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <Carousel className="h-50 carosel-container">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img "
          src="https://i.ibb.co/hDTcwm6/bg2.jpg"
          height="400"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Doctor's Chamber</h3>
          <p>Human have some desease that cannot be solve without medicine</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://i.ibb.co/ZGFhmyq/bg3.jpg"
          height="400"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Doctor's Chamber</h3>
          <p>
            Above age 30 every people needs to measure their own blood pressure
            to avoid blood related desease
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://i.ibb.co/VNxzJ0G/bg1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Doctor's Chamber</h3>
          <p>
            Every people on earth need to walk atleast 8 km every day to make
            their heart strong
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
