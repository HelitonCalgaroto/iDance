import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';
import { Input } from '../../components/SignOut';
import { NavLink, useNavigate } from "react-router-dom";

type SignOutData = {
    username: string,
    password: string,
    email: string,
    telefone: string,
    confirmPassword: string
};

const schema = yup.object().shape({
    username: yup.string().required('Usuário inválido ou já utilizado.'),
    password: yup.string().required('Informe uma senha.'),
    email: yup.string().required('Informe um email válido.'),
    telefone: yup.string().required('Informe um telefone válido!'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas não são iguais!')
});

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignOutData>({
        resolver: yupResolver(schema)
    });

    const handleSignOut = (data: SignOutData) => {
        setTimeout(() => {
            console.log(data);
        }, 0);
        console.log(data);
    }

    return(
        <S.ContainerPrincipal>

        <S.ContainerCentral>
            <S.title>Cadastro</S.title>

            <S.ContainerLogin onSubmit={handleSubmit(handleSignOut)}>

                <Input
                    label='Nome*'
                    placeholder='Usuário'
                    error={errors.username}
                    {...register('username')}
                />

                <Input
                    label='Email*'
                    placeholder='Email'
                    error={errors.email}
                    {...register('email')}
                />

                <Input
                    label='Telefone*'
                    placeholder='Telefone'
                    error={errors.telefone}
                    {...register('telefone')}
                />

                <Input
                    label='Senha*'
                    placeholder='senha'
                    error={errors.password}
                    type={"password"}
                    {...register('password')}
                />

                <Input
                    label='Repita a Senha*'
                    placeholder='Confirme a senha'
                    error={errors.confirmPassword}
                    type={"password"}
                    {...register('confirmPassword')}
                />

                <S.botao type='submit'>
                    Cadastrar
                </S.botao>

                <S.labelPrincipal>

                    Ou

                </S.labelPrincipal>

                <S.btnEntrarComGoogle type='button'/>

                <S.labelSecundario>

                    Ja possui uma conta?
                    <S.labelFazerLogin href='/'>Entrar</S.labelFazerLogin>

                </S.labelSecundario>

            </S.ContainerLogin>

        </S.ContainerCentral>

    </S.ContainerPrincipal>
    )
}