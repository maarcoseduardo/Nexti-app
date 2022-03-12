import {
  HeaderContainer,
  HeaderContent,
  Hamburguer,
  Unlist,
  List,
  Button,
} from "./styles";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Hamburguer>---</Hamburguer>
          <Unlist>
            <List>
              <Button>Ajuda</Button>
            </List>
            <List>
              <Button>Configurações</Button>
            </List>
          </Unlist>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
