import {
  Container,
  Content,
  Input,
  ContainerButtons,
  Unlist,
  List,
  InputCheckBox,
  Button,
  ButtonFilter,
} from "./styles";
import { BiFilterAlt } from "react-icons/bi";

export function SearchTop() {
  return (
    <Container>
      <Content>
        <Input placeholder="Pesquisar" />
        <ContainerButtons>
          <Unlist>
            <List>
              <InputCheckBox type="checkbox" />
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
          <ButtonFilter>
            <BiFilterAlt />
          </ButtonFilter>
        </ContainerButtons>
      </Content>
    </Container>
  );
}
