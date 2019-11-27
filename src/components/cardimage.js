import React from "react"
import styled from "styled-components"

const CardImageStyle = styled.div `
    float:left;
    ul {
        float: left; 
        max-width: 300px;
        list-style-type:none;
        background-color: white;
        border-radius: 20px;
        box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, 0.1);
    }; 
    ul: hover {
        box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.2);
    }
    img {
        max-height: 200px;
        width: 300px; 
        object-fit: cover; 
        border-radius: 20px 20px 0 0 ;
    };
    h1 {
        font-size: 16px; 
    }; 
    li {
        text-align: center; 
    }
`

const CardImage = ({data}) => (
    <CardImageStyle>{data.allContentfulCard.edges.map(edge => (
            <ul>
            <li><img src={edge.node.image.file.url}/></li>
            <li><h1>{edge.node.image.title}</h1></li>
            </ul>
        ))}
    </CardImageStyle>
)

export default CardImage
