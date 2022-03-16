import { useState } from "react";
import { Hamburguer } from "./Hamburguer";
import {
  HeaderContainer,
  HeaderContent,
  HamburguerButton,
  UnListBurguer,
  Unlist,
  List,
  Button,
} from "./styles";

export function Header() {
  const [open, setOpen] = useState(false);
  const ToggleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <HamburguerButton onClick={ToggleMenu}>
            <Hamburguer open={open} />
          </HamburguerButton>
          <UnListBurguer open={open}>
            <Unlist>
              <List>
                <Button>Ajuda</Button>
              </List>
              <List>
                <Button>Configurações</Button>
              </List>
            </Unlist>
          </UnListBurguer>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
