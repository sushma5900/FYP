import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
  .card {
    height: 30rem;
    width: 23rem;
    border: 1px solid var(--bs-gray-300);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
    img {
      height: 75%;
      object-fit: cover;
      border-radius: 0.5rem;
    }
    .card-body {
      text-align: center;
    }
    .btn {
      background-color: orange;
      border-color: orange;
      width: 80%;
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  h1 {
    color: var(--bs-secondary);
  }
  h3 {
    color: var(--bs-dark);
    margin-top: 1rem;
    text-align: center;
  }
`;

const CarouselWrapper = styled.div`
  margin: 4rem 0;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
};

const MenuSwipper = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((productList) => setProducts(productList));
  }, []);

  const getAllProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:3120/api/products/all`);
      console.log("Gotten Products:", res.data);
      return res.data.products || [];
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  return (
    <>
      <h1 style={{ color: ' #894E3F', fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Poppins', textAlign: 'center', lineHeight: '1.5', letterSpacing: '0.1em', margin: '0' }}>Menu</h1>

      {[
        {
          category: "Bread",
          title: "Breads",
          desc: "Our freshly baked breads are ready to serve you!",
        },
        {
          category: "Cake",
          title: "Cakes",
          desc: "Delicious cakes for your special celebrations!",
        },
        {
          category: "Pastry",
          title: "Pastries",
          desc: "Treat yourself with delightful pastries!",
        },
      ].map((item) => (
        <React.Fragment key={item.category} >
          <TitleWrapper >
            <h3 style={{ color: ' #894E3F', fontWeight: 'bold', fontFamily: 'Poppins', textAlign: 'left', lineHeight: '1.5', letterSpacing: '0.1em', margin: '0' }}>{item.title}</h3>
          </TitleWrapper>
          <CarouselWrapper>
            <Carousel responsive={responsive}>
              {products && products
                .filter((product) => product.category === item.category)
                .map((product) => (
                  
                    <CardWrapper  key={product.id}>
                    
                    <Card>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>Starting Price: ₹{product.price[0]}</Card.Text>
                        <Button as={Link} to={`/products/${product.id}`} style={{ backgroundColor: '#C37960', borderColor: '#C37960', width: '80%', color:'white' }}>
                          Order now 
                        </Button>
                      </Card.Body>
                    </Card>
                  
                  </CardWrapper>
                  
                
                ))}
            </Carousel>
          </CarouselWrapper>
        </React.Fragment>
      ))}
    </>
  );
};

export default MenuSwipper;
