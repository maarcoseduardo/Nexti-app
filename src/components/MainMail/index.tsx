import {
  Container,
  Content,
  Unlist,
  List,
  ContentEmail,
  ProfileReceived,
  ProfileName,
  ProfileAndContent,
  DataEmail
} from "./styles";

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
                  <h3>José Ronaldo</h3>
                  <p>
                    <span>icone</span>
                    Bom dia, solicito minhas férias para janeiro.
                  </p>
                  <p>
                    <span>icone</span>
                    Tarefa 1
                  </p>
                </DataEmail>
              </ProfileAndContent>
              <div>
                <p>Hoje, 15:54</p>
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </ContentEmail>
          </List>
        </Unlist>
      </Content>
    </Container>
  );
}
