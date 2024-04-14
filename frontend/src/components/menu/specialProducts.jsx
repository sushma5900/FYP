import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

async function getSpecialProducts() {

  let products = null;
  try {
    const res = await axios.get(`http://localhost:3120/api/products/special`);
    products = res.data.products;
    console.log("Special Products: ", res);
  } catch (err) {
    console.log(err);
    return null;
  }
  return products;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 4rem 0rem;
  h1 {
    margin-bottom: 1rem;
    font-family: Poppins;
    color: var(--bs-secondary);
  }
  h4 {
    margin-bottom: 1.5rem;
  }
`;

const CardWrapper = styled.div`
  img {
    object-fit: cover;
    height: 75%;
  }
  .card {
    height: 400px;
    margin-right: 50px;
    position: relative;
  }
  .card:hover {
    transition: 0.5s;
    transform: scale(1.3);
    z-index: 10;
    border: 1px solid orange;
  }
  .card-title {
    margin-top: 10px;
    align-self: center;
  }
  button {
    width: 60%;
    background-color: orange;
    color: white;
    border-color: orange;
    align-self: center;
    margin: 1rem 0rem;
    :hover {
      color: white;
    }
  }
`;

const SpecialProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSpecialProducts().then((productList) => setProducts(productList));
  }, []);

  return (
    <Container>
      <h1 style={{ color: ' #894E3F', fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Poppins', textAlign: 'left', lineHeight: '1.5', letterSpacing: '0.1em', margin: '0' }}>
        Todays ITEMS
      </h1>
      
      <Wrapper>
        {products && products.map((product) => (
          <CardWrapper key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Title >{product.name}</Card.Title>
              <Button onClick={() => navigate(`/products/${product.id}`)} style={{ backgroundColor: '#C37960', borderColor: '#C37960', width: '80%', color:'white' }}>
                Order now
              </Button>
            </Card>
          </CardWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

export default SpecialProducts;
