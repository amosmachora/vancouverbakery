import React from "react";
import { Carousel } from "react-bootstrap";

const BakerySlider = () => {
  return (
    <>
      <Carousel bg="dark">
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="First slide"
            id="carouselimg"
          />
          <Carousel.Caption>
            <h3>Arab Cakes in Splash and Yellow</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              ullam porro voluptatibus, aliquam sint architecto enim est
              laboriosam qui repudiandae?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Second slide"
            id="carouselimg"
          />
          <Carousel.Caption>
            <h3>Cherry Cake to color your taste buds</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
            id="carouselimg"
          />
          <Carousel.Caption>
            <h3>Yellow Cookie tastes like it was baked in jesus' times</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default BakerySlider;
