import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 88%;
  height: 47px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  background: #151515;
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 12px;
`;

export const MenuRight = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 12px;
  text-decoration: none;
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 2px solid #fff;
`;

export const BuscarInputContainer = styled.div`
  width: 275px;
  height: 30px;
  background-color: #202037;
  border-radius: 10px;
  padding: 2px 5px;
  margin: 0 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 20px;
    height: 20px;
    margin: 0 10px;
  }

`;

export const Input = styled.input`
  width: 275px;
  height: 25px;
  padding: 10px;

  font-size: 18px;
  font-weight: 400;
  line-height: 18px;

  background: transparent;
  flex: 1;
  border: 0;
  color: #fff;
  outline: none;
`;
