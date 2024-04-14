import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
`;

const CarouselWrapper = styled.div``;

const Announcement = () => {
  let images = [1, 2, 3];

  return (
    <>
      <CarouselWrapper style={{ marginLeft: '5px' }}>
        <Carousel heiclassName="carousel-dark p-4" interval={3000} >
          {images.map((val, index) => (
            <Carousel.Item key={index}>
              <Image src={`banners/${val}.png`} alt="Banner" />
            </Carousel.Item>
          ))}
        </Carousel>
      </CarouselWrapper>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px' }} className="pt-4 ">
        <div className="p-4">
          <h1 style={{ color: ' #894E3F', fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Poppins', textAlign: 'left', lineHeight: '1.5', letterSpacing: '0.1em', margin: '0' }}>Freshly Baked <br />With Love...</h1>
          <p style={{ color: ' #894E3F', padding: '4px' }}>
            The Bakery hopes to be more than just City's best bakery. To make sure that every food item we give is a treat to the palette and the eyes, we hold ourselves to high standards of quality. We work hard to maintain consistency so that every customer receives the same consistently gratifying experience while enjoying the wide range of goods we have to offer. Our offerings fluctuate to highlight the best seasonal ingredients and the extraordinary creativity of our chefs.
          </p>
        </div>
        {<img src='banners/1.png' alt="Random" style={{ width: '50%', marginRight: '20px' }} />}
      </div>
      <div className="pr-4">

        <Link className='p' to={'/menu'} style={{
          backgroundColor: 'transparent', color: '#894e3f', padding: '10px 20px', borderRadius: '5px', border: '1px solid #894e3f   ', fontSize: '1rem', fontWeight: 'bold', fontFamily: 'Poppins', cursor: 'pointer', textAlign: 'center', marginLeft: '5px'
        }}>Menu</Link>
      </div>
    </>
  );
};

export default Announcement;
