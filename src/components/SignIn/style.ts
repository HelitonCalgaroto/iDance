import styled, { css } from "styled-components"

interface InputProps {
    isError: boolean;
    }

export const Label = styled.label`
    font-size: 17px;
    font-family: 'Prompt';
    padding-top: 2ch;
    display: flex;
    text-align: left;
`

export const Input = styled.input<InputProps>`
    color: black;
    width: 100%;
    font-size: 1em;
    height: 30px;
    background: #EBE4E4AF;
    border-radius: 5px;
    &:hover {
    opacity: 0.7;
    }
    &:active{
    opacity: 1;
    }

    ${(props) => props.isError && css`
        border-color: red;
    `}
`

export const Error = styled.span`
    color: red;
`;