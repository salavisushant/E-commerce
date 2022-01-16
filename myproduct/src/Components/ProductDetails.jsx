import {useState,useEffect} from "react";

import { useParams } from "react-router-dom";

import styled from 'styled-components';

const Container = styled.div`
width: 80%;
padding: 10px;
display: grid;
grid-template-columns: 50% 50%;
text-align: left;
margin: auto;
margin-top: 100px;
border-radius: 10px;

 box-shadow:3.4px 6.7px 6.7px hsl(0deg 0% 0% / 0.40);

`
const Image = styled.img`
width: 80%;
height: 400px;
`

const Box = styled.div`
text-align: left;
margin-left: 15px;
`
const P = styled.p`
color: #121212;
font-weight: 600;
font-size: 19px;
`

export const ProductDetails = () => {
    let {id} = useParams();

    const [data,setData] = useState({});

    const getData = async () => {
        let res = await fetch(` http://localhost:3001/prods/${id}`);
        let d = await res.json();
        setData(d);
        console.log(d);
    }
    useEffect(() => {
        getData();
    },[]);

    return (
        <Container>
            <Image src={data.image} alt=""/>
            <Box>
            <P>{data.title}</P>
            <P>{data.price}</P>
            <P>{data.category}</P>
            <P>{data.description}</P>
            </Box>
        </Container>
    )
}