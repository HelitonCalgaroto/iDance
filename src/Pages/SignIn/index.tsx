import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';
import { Input } from '../../components/SignIn';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

type SignInData = {
    username: string,
    password: string,
};

const schema = yup.object().shape({
    username: yup.string().required('O usuário é obrigatório!'),
    password: yup.string().required('A senha é obrigatória!')
});

export const SignIn = () => {
    const { register, handleSubmit, formState } = useForm<SignInData>({
        resolver: yupResolver(schema)
    });

    const errors = formState.errors;

    const navigate = useNavigate();
    const location = useLocation();

    const { signIn } = useAuth();

    let from = location.state?.from?.pathname || "/";

    const handleSignIn = async ({ username, password }: SignInData) => {
        await signIn({ email: username, password }, () => navigate(from, { replace: true }));
    }

    return(
        <S.ContainerPrincipal>

        <S.ContainerEsquerda>
            <S.imgBackEsquerda src={require('../../assets/logo.jpg')}/>
        </S.ContainerEsquerda>

        <S.ContainerDireita onSubmit={handleSubmit(handleSignIn)}>

            <S.ContainerLogin>

                <S.title>Login</S.title>

                <Input
                    label='Usuário'
                    placeholder='Informe seu usuário'
                    error={errors.username}
                    {...register('username')}
                />

                <Input
                    label='Senha'
                    placeholder='Informe sua senha'
                    error={errors.password}
                    type={"password"}
                    {...register('password')}
                />

                <S.labelSecundario>
                    <S.checkBox />Lembrar login
                    <S.labelEsqueceuSenha>
                        Esqueceu a senha?
                    </S.labelEsqueceuSenha>
                </S.labelSecundario>

                <S.botao type='submit'>
                    Entrar
                </S.botao>

                <S.labelSecundario>

                Não tem uma conta?
                <NavLink to='/register'> Cadastre-se </NavLink>

                </S.labelSecundario>

            </S.ContainerLogin>

        </S.ContainerDireita>

    </S.ContainerPrincipal>
    )
}