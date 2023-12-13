import React from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../../assets/logo-dio.png';
import iconSearch from '../../assets/iconSearch.svg';
import {Button} from '../Button';
import {BuscarInputContainer, Input, Container, Menu, Row, Wrapper, MenuRight, UserPicture} from './styles';

function Header({autenticado}) {
  const navigate = useNavigate();

  const entrarLogin = ()=> navigate('/login');
  const entrarCadastrar = ()=> navigate('/cadastro');

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo Dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <img src={iconSearch} alt="" />
                <Input type="text" placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/102636600?v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" onClick={entrarLogin} />
              <Button title="Cadastrar" onClick={entrarCadastrar} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}

export {Header};
