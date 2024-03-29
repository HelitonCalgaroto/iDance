import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { Input as InputStyles, Label, Error } from "./style"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
        label: string;
        error?: FieldError;
    }

    const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, name, error, ...rest }: InputProps, ref) => {

    console.log(error);

    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <InputStyles
                id={name}
                name={name}
                isError={!!error}
                ref={ref}
                {...rest}
            />
            {!!error && <Error>{error.message}</Error>}
        </>
    )
    }

    export const Input = forwardRef(InputBase);