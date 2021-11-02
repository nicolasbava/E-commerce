import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";


const Container = styled.div`
    padding: 1.25em;
    display: flex;
    flex-wrap: wrap;
`;

const Products1 = () => {
    return (
        <Container>
            {popularProducts.map(item=>(
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products1
