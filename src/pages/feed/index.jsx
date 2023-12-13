import {Container, Column, Title, TitleHighlight} from './styles';

import {Header} from '../../components/Header';
import {Card} from '../../components/Card';
import {UserInfo} from '../../components/UserInfo';

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={80}
            nome="Emanuel Bispo"
            image="https://avatars.githubusercontent.com/u/102636600?v=4"
          />
          <UserInfo
            percentual={20}
            nome="Emanuel Bispo"
            image="https://avatars.githubusercontent.com/u/102636600?v=4"
          />
          <UserInfo
            percentual={50}
            nome="Emanuel Bispo"
            image="https://avatars.githubusercontent.com/u/102636600?v=4"
          />
          <UserInfo
            percentual={70}
            nome="Emanuel Bispo"
            image="https://avatars.githubusercontent.com/u/102636600?v=4"
          />
          <UserInfo
            percentual={90}
            nome="Emanuel Bispo"
            image="https://avatars.githubusercontent.com/u/102636600?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export {Feed};
