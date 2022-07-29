import React from 'react'
import styled from 'styled-components';

const AppBarBlock = styled.div`
    border-bottom: 1px dotted #000;
    background-color: white;
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
`

const AppBar = ({title}) => {
  return (
    <AppBarBlock><a href="/">{title}</a></AppBarBlock>
  )
}

export default AppBar

//<h1><a href="/">{props.title}</a></h1>