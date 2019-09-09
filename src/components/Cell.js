import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
`

const CellImage= styled.div`
    widht: 300px;
    height: 260px;
    background-image: url(${props => props.image});
    background-size: 300px; 
`

const CellTitle = styled.div`
`

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell