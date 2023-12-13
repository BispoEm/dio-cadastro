import {
  Column,
  Container,
  Login,
  TenhoText,
  LoginText,
  TermoText,
  Row,
  SubtitleCadastro,
  Title,
  TitleCadastro,
  Wrapper
} from './styles';

import {useNavigate} from 'react-router-dom';
import {MdEmail, MdLock, MdAccountCircle} from 'react-icons/md';
import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {api} from '../../services/api';

import {Button} from '../../components/Button';
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';

const schema = yup
  .object({
    nome: yup.string().required('Campo Obrigatorio'),
    email: yup.string().email('Email não é valido').required('Campo Obrigatorio'),
    senha: yup.string().min(3, 'No minimo 3 caracteres').required('Campo Obrigatorio')
  })
  .required();

const Cadastro = () => {
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
      if (data.length === 0) {
        try {
          console.log(formData);
          await api.post(`users`, formData);
        } catch {
          console.log('Erro');
        }
        alert('Conta criada com sucesso');
        navigate('/feed');
      } else {
        alert('Já existe uma conta criada, \nFaça Login');
        navigate('/login')
      }
    } catch {
      alert('Erro ao realizar seu cadastro');
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
          <TitleCadastro>Comece agora grátis</TitleCadastro>
          <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              errorMessage={errors?.nome?.message}
              name="nome"
              control={control}
              placeholder="Nome Completo"
              leftIcon={<MdAccountCircle />}
            />
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
            <Button title="Criar minha conta" variant="secondary" type="button" />
          </form>
          <Row>
            <TermoText>
              Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso
              da DIO.
            </TermoText>
          </Row>
          <Login href="/login">
            <TenhoText>Já tenho conta.</TenhoText>
            <LoginText>Fazer login</LoginText>
          </Login>
        </Wrapper>
      </Container>
    </>
  );
};

export {Cadastro};
