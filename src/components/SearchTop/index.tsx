import { 
  Container,
  Content,
  Input,
  ContainerButtons,
  Unlist,
  List,
  Button
} from "./styles";
import { BiFilterAlt } from 'react-icons/bi';

export function SearchTop() {
  return (
    <Container>
      <Content>
        <Input placeholder="Pesquisar"/>
        <ContainerButtons>
          <Unlist>
            <List>
              <Button>a</Button>
            </List>
            <List>
              <Button>ATRIBUIR</Button>
            </List>
            <List>
              <Button>ARQUIVAR</Button>
            </List>
            <List>
              <Button>AGENDAR</Button>
            </List>
          </Unlist>
          <span> <BiFilterAlt /> </span>
        </ContainerButtons>
      </Content>
    </Container>
  );
}
