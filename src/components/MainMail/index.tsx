import {
  Container,
  Content,
  Unlist,
  List,
  ContentEmail,
  ProfileReceived,
  ProfileName,
  ProfileAndContent,
  DataEmail,
  NameReceived,
  Paragraph,
  SpanIcon,
  DivHourCopied,
  ContainerCopiedMessages,
  PerfilCopied
} from "./styles";
import { 
  BiMessageSquareDetail,
  BiPaperPlane 
} from 'react-icons/bi'

export function MainMail() {
  return (
    <Container>
      <Content>
        <Unlist>
          <List>
            <ContentEmail>
              <ProfileAndContent>
                <ProfileReceived>
                  <ProfileName>Perfil</ProfileName>
                </ProfileReceived>
                <DataEmail>
                  <NameReceived>José Ronaldo</NameReceived>
                  <Paragraph>
                    <SpanIcon><BiMessageSquareDetail/></SpanIcon>
                    Bom dia, solicito minhas férias para janeiro.
                  </Paragraph>
                  <Paragraph>
                    <SpanIcon><BiPaperPlane/></SpanIcon>
                    Tarefa 1
                  </Paragraph>
                </DataEmail>
              </ProfileAndContent>
              <DivHourCopied>
                <Paragraph>Hoje, 15:54</Paragraph>
                <ContainerCopiedMessages>
                  <PerfilCopied></PerfilCopied>
                  <PerfilCopied></PerfilCopied>
                  <PerfilCopied></PerfilCopied>
                </ContainerCopiedMessages>
              </DivHourCopied>
            </ContentEmail>
          </List>
        </Unlist>
      </Content>
    </Container>
  );
}
