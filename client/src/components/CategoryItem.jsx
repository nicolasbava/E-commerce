import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position: relative;
    `;
const Image = styled.img`
    max-width: 100%;  
    height: 100%;
    width: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh"})}
`;
const Info = styled.div`
    position: absolute;
    top: 50%;
    left:0;
    width: 100%;
    heigth: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
const Title = styled.h1`
    color: white;
    text-shadow: 3px 3px black;
    margin-bottom: 1rem;
`;
const Button = styled.button`
    border: none; 
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    box-shadow: 4px 4px black;

`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
