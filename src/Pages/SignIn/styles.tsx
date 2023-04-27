import styled from "styled-components"

export const ContainerPrincipal = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-image: url('https://getwallpapers.com/wallpaper/full/5/c/c/1000855-cool-dance-backgrounds-1920x1080-for-iphone-5.jpg');
    justify-content: center;
`

export const ContainerEsquerda = styled.div`
    width: 45%;
    height: 90%;
    background-color: rgb(125, 38, 207);
    align-items: center;
    border-radius:10px;
`

export const ContainerDireita = styled.form`
    width: 50%;
    height: 90% ;
    background-color: #ffffff;
    display: flax;
    flex-direction: column;
    border-radius:10px;
    opacity: 80%;
`

export const ContainerLogin = styled.div`
    background-color: #ffffff;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10ch;
    margin-right: 20ch;
    margin-left: 20ch;
`

export const title = styled.h1`
    font-size: 4rem;
    font-weight: 400;
    font-family: 'Monoton', cursive;
    text-align: center;
    max-width: 500px;
    text-transform: uppercase;
    padding-bottom: 1.5ch;
    position: center;
    color: rgb(125, 38, 207);
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
    border: 2px solid #0E99F5;
    background-color: #0E99F5;
    align-self: center;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
    opacity: 0.7;
    }

    &:active {
    opacity: 1;
    }
`

export const imgBackEsquerda = styled.img`
    opacity: 90%;
    width: 97%;
    height: 97%;
    margin: 1ch; 
    border-radius: 15px;
    image-rendering: optimizeQuality;
`

export const checkBox = styled.input.attrs({ type: "checkbox" })``

export const labelEsqueceuSenha = styled.a`
    text-decoration: underline;
    color: #1100ff;
    font-family: 'Prompt';
    font-size: 13px;
    cursor: pointer;
    display: flex;
    padding-left: 27ch;
    &:hover {
    opacity: 0.7;
    }
    &:active{
    opacity: 1;
    }
`

export const labelCadastreSe = styled.a`
    text-decoration: underline;
    color: #1100ff;
    font-family: 'Prompt';
    font-size: 13px;
    margin-right:263px;
    cursor: pointer;
    display: flex;
    &:hover {
    opacity: 0.7;
    }
    &:active{
    opacity: 1;
    }
`