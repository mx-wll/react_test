import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Icon = styled.div `
    float: left; 
`

const SocialIcon = props => (
    <Icon>
        <Link to={props.imageLink}>
            <img 
                src={props.imageURL} 
                alt={props.altText} 
                style={{
                    border:"0px",
                    width:"24px",
                    display:"inline",
                    verticalAlign:"middle"  
                }}  
            />
        </Link>
    </Icon>
)

export default SocialIcon
