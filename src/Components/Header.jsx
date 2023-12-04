import React from "react"
import styled, {createGlobalStyle} from "styled-components"
import backgroundImg from "./bg.jpg"

export const GlobalStyle= createGlobalStyle`
*{
    margin;0;
    padding:0;
    box-sizing: border-box;
    font-family: Arial;
}
`

export const NomeEmpresa=styled.h1`
font-family: 'Ephesis', cursive;
font-size:45px;
`


export const StyleHeader=styled.header`
height:22vh;
color: white;
display: flex;
align-items:center;
justify-content: space-around;
background-image: url(${backgroundImg});
background-size: cover;
background-position: center;
`
export const NavUl=styled.ul`
display: flex;
justify-content: space-around;
width: 40vw;
list-style:none;
font-size:20px;
cursor: pointer;

`


function Header(){
    return(
        <StyleHeader>
          <NomeEmpresa>Facts Plant</NomeEmpresa>
          <nav>
            <NavUl>
                <li>Início</li>
                <li>Produtos</li>
                <li>Nossas Lojas</li>
                <li>Cadastre-se</li>
            </NavUl>
          </nav>
        </StyleHeader>
    )
}
export default Header

//background-color: #31531e;