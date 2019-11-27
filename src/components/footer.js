import React from "react"
import styled from "styled-components"

const Footerstyle = styled.div `
    position: fixed; 
    bottom: 0px; 
    width: 100%;
    height: 150px; 
    background-color: black; 
    color: white; 
    padding: 20px; 
`

const Footer = ({data}) => (
    <Footerstyle>
        <h1>here comes the sun</h1>
          {data.allContentfulLink.edges.map(edge => (
            <a href= {edge.node.url}>{edge.node.title}</a>
            ))}
    </Footerstyle>
)

export default Footer
