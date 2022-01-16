import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Cart =()=> {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("http://localhost:3001/bag")
      .then((d) => d.json())
      .then((res) => {
        setList(res);
      });
  };
  console.log(list);
  const Div = styled.div`
    display: grid;
    width: 88%;
    margin-left: 5%;
    grid-template-columns: auto auto auto auto;
    
    div {
      width: 70%;
      margin-top: 20%;
      height: 460px;
      color: gray.400;
    box-shadow:3.4px 6.7px 6.7px hsl(0deg 0% 0% / 0.40);
    }
  
    div img {
      width: 100%;
      height: 70%;
    }
    
    div p {
      margin-top: -28%;
      margin-left: 2%;
    }
    div h5 {
      height: 80px;
      margin-left: 2%;
    }
   
    div button {
      margin-left: 2%;
    }
  `;
  return (
    <div>
      <Div>
        {list.map((e) => (
          <div key={e.product_id}>

              <img src={e.image} alt="imgs" />
              <h5>{e.title}</h5>
            <p>{e.price}</p>
            <button>Proceed To Pay</button>
         
          </div>
        ))}
      </Div>
    </div>
  );
}


