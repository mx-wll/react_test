import React from "react"
import styled from "styled-components"

const ImgUploadStyle = styled.div `

`

class ImgUpload extends React.Component {

    render () {
        return (
            <ImgUploadStyle>
                <form>
                    <input type="file" /> 
                </form>
            </ImgUploadStyle>
        )
      }
    }

export default ImgUpload
