import { SubMenu } from "./SubMenu";
import { useEffect, useState } from "react";
import {
  Container,
  Content,
  ContainerProfile,
  Profile,
  ProfileName,
  ButtonNew,
  ArrowDown,
  ContainerFavorites,
  ContentFavorites,
  SpanFavorites,
  // Status
  ContainerTasks,
  ButtonTasks,
  SpanArrowLeft,
  ContentTasks,
  SpanValueTasks,
} from "./styles";

import { AiOutlineCaretDown, AiOutlineRight } from "react-icons/ai";
import { apiMenu } from "../../services/apiMenu";

export function SideBar() {
    const [open, setOpen] = useState(false)
    
    const ToggleMenuTasks = () => {
      setOpen(!open)
    }

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      apiMenu.get('/')
      .then(response => setTasks(response.data))
    }, [])
    
  return (
    <Container>
      <Content>
        <ContainerProfile>
          <Profile>
            <ProfileName>profile</ProfileName>
          </Profile>
          <ButtonNew>
            NOVO
            <ArrowDown>
              <AiOutlineCaretDown />
            </ArrowDown>
          </ButtonNew>
        </ContainerProfile>
        <ContainerFavorites>
          <ContentFavorites>
            <SpanFavorites>Favoritos</SpanFavorites>
            <SpanFavorites>30</SpanFavorites>
          </ContentFavorites>
        </ContainerFavorites>
        <ContainerTasks>
          <ButtonTasks onClick={ToggleMenuTasks}>
            <ContentTasks>
              <SpanArrowLeft>
                <AiOutlineRight />
              </SpanArrowLeft>
              Tarefa
            </ContentTasks>
            <SpanValueTasks>15</SpanValueTasks>
          </ButtonTasks>
          <SubMenu open={open} subMenu={tasks}/> {/* adicionar retorno do array e verificar se tem submenu*/}
          {/* <ButtonTasks>
            <ContentTasks>
              <SpanArrowLeft>
                <AiOutlineRight />
              </SpanArrowLeft>
              Tarefa
            </ContentTasks>
            <SpanValueTasks>15</SpanValueTasks>
          </ButtonTasks>
          <ButtonTasks>
            <ContentTasks>
              <SpanArrowLeft>
                <AiOutlineRight />
              </SpanArrowLeft>
              Tarefa
            </ContentTasks>
            <SpanValueTasks>15</SpanValueTasks>
          </ButtonTasks>
          <ButtonTasks>
            <ContentTasks>
              <SpanArrowLeft>
                <AiOutlineRight />
              </SpanArrowLeft>
              Tarefa
            </ContentTasks>
            <SpanValueTasks>15</SpanValueTasks>
          </ButtonTasks> */}
        </ContainerTasks>
      </Content>
    </Container>
  );
}
