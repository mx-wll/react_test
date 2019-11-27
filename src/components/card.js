import React from "react"
import SocialIcon from "../components/social"
import staticdata from '../staticdata.json'
import styled from "styled-components"

const CardStyled = styled.div `
    width: 300px; 
    height: 200px; 
    background-color: grey; 
    border-radius: 10px;
    padding: 20px; 
    margin: 2px; 
    float: left;
`

const Card = props => (
    <CardStyled>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        {staticdata.social.map(cell => (
            <SocialIcon
                altText={cell.altText}
                imageURL={cell.imageURL}
                imageLink = {cell.imageLink}
            />
        ))}
    </CardStyled>
)

export default Card