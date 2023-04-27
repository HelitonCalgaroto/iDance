import { NavLink } from "react-router-dom"
import styled from "styled-components"
export const ContainerPrincipal = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-image: url('https://th.bing.com/th/id/R.d9f57f438b9346455860cc1856281fdb?rik=L5Nr1R32IHd7tQ&pid=ImgRaw&r=0');
    justify-content: center;
`

export const ContainerCentral = styled.div`
    width: 30%;
    height: 80%;
    background-color: rgb(255, 255, 255);
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius:10px;
    opacity: 90%;
`

export const ContainerLogin = styled.form`
    background-color: rgb(255, 255, 255);
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 10ch;
    margin-right: 10ch;
    opacity: 100%;
`

export const title = styled.h1`
    font-size: 4rem;
    font-weight: 400;
    font-family: 'Monoton', cursive;
    text-align: center;
    max-width: 500px;
    text-transform: uppercase;
    padding-bottom: 1.3ch;
    color: rgb(125, 38, 207);
    margin-left: 0.7ch;
    margin-top: 0.3ch;
`

export const labelPrincipal = styled.label`
    font-size: 17px;
    font-family: 'Prompt';
    padding-top: 2ch;
    display: flex;
    text-align: left;
`

export const labelSecundario = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 8px;
    font-family: 'Prompt';
    font-size: 13px;
    justify-content: space-between;
`

export const botao = styled.button`
    color: #FFFFFF;
    width: 100%;
    font-size: 1.1em;
    font-style: bold;
    padding: 0.25em 1em;
    border-radius: 3px;
    border: 2px solid rgb(125, 38, 207);
    background-color: rgb(125, 38, 207);
    align-self: center;
    margin-top: 7ch;
    cursor: pointer;

    &:hover {
    opacity: 0.7;
    }

    &:active {
    opacity: 1;
    }
`

export const btnEntrarComGoogle = styled.button`
    color: #FFFFFF;
    width: 235px;
    height: 35px;
    font-size: 1.1em;
    font-style: bold;
    padding: 0.25em 1em;
    border-radius: 3px;
    border-color: #2f95ee;
    align-self: center;
    margin-top: 1ch;
    background-image: url('https://th.bing.com/th/id/OIP.URHIfM4brh2J1334CuvHpwAAAA?pid=ImgDet&rs=1');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    &:hover {
    opacity: 0.7;
    }

    &:active {
    opacity: 1;
    }
`

export const labelFazerLogin = styled.a`
    text-decoration: underline;
    color: #1100ff;
    font-family: 'Prompt';
    font-size: 13px;
    margin-right: 54%;
    cursor: pointer;
    display: flex;
    &:hover {
    opacity: 0.7;
    }
    &:active{
    opacity: 1;
    }
`