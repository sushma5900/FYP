import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const Wrapper = styled.div`
  min-height: 40.625rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  color: #ffffff;
  padding: 1rem 2rem;
  background-color: #fbc252;
 
  
`;

const CardWrapper = styled.div`
  .card {
    max-height: 25rem;
    max-width: 25rem;
    margin: 1.5rem 3.2rem;
    position: relative;
  }
  .card:hover {
    transition: 0.5s;
    transform: scale(1.3);
    z-index: 10;
    border: 1px solid orange;
  }
  .card-title {
    margin: 0.75rem 0rem;
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
  async function getSpecialProducts() {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3120"
  });
  let products = null;
  try {
    const res = await axiosInstance.get("/api/products/special");
    products = res.data.products;
    console.log("Special Products: ", res);
  } catch (err) {
    console.log(err);
    return null;
  }
  return products;
}

  useEffect(() => {
    getSpecialProducts().then((productList) => setProducts(productList));
  }, []);
return (
    <>
      <TextWrapper>
        <h1>
          <i>Todays ITEMS</i>
        </h1>
      </TextWrapper>
      <Wrapper>
        {products.length > 0 ? (
          products.map((product) => (
            <CardWrapper key={product.id}>
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Title>{product.name}</Card.Title>
                <Button onClick={() => navigate(`/products/${product.id}`)}>View</Button>
              </Card>
            </CardWrapper>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Wrapper>
    </>
  );
};

export default SpecialProducts;