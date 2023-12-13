import {useNavigate} from 'react-router-dom';
import bannerImage from '../../assets/banner.png';

import {Container, TextContent, Title, TitleHighlight} from './styles';

import {Header} from '../../components/Header';
import {Button} from '../../components/Button';

const Home = () => {
  const navigate = useNavigate();

  const handleClickSingIn = () => {
    navigate('/login');
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            O seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais invadoras do mundo e encare seu novo desafio
            proficional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={handleClickSingIn} />
        </div>
        <div>
          <img src={bannerImage} alt="Imagem Principal" />
        </div>
      </Container>
    </>
  );
};

export {Home};
