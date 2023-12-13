import {Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles';

import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {MdEmail, MdLock} from 'react-icons/md';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {api} from '../../services/api';

import {Button} from '../../components/Button';
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';

const schema = yup
  .object({
    email: yup.string().email('Email não é valido').required('Campo Obrigatorio'),
    senha: yup.string().min(3, 'No minimo 3 caracteres').required('Campo Obrigatorio')
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async (formData) => {
    try {
      const {data} = await api.get(`users?email=${formData.email}&senha=${formData.senha}`);
      if(data.length === 1){
        navigate('/feed');
      }else{
        alert('Email ou senha invalidos');
      }
    } catch {
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas
            empresas mais desejadas.
          </Title>
        </Column>
        <Wrapper>
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              errorMessage={errors?.email?.message}
              name="email"
              control={control}
              placeholder="Email"
              leftIcon={<MdEmail />}
            />
            <Input
              errorMessage={errors?.senha?.message}
              name="senha"
              control={control}
              placeholder="Senha"
              leftIcon={<MdLock />}
            />
            <Button title="Entrar" variant="secondary" type="button" />
          </form>
          <Row>
            <EsqueciText>Esqueci minha senha</EsqueciText>
            <CriarText href='/cadastro'>Criar conta</CriarText>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export {Login};
