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

export function SideBar() {
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
          </ButtonTasks>
        </ContainerTasks>
      </Content>
    </Container>
  );
}
