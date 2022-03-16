import styled from "styled-components";

export const Container = styled.section`
  max-width: 400px;
  height: 800px;
  width: 100%;
  background: var(--grey-100);
  padding: 2rem 3rem;
  border-right: 1px solid var(--grey-400);
  @media (max-width: 670px) {
    height: 500px;
    border-right: none;
    margin: 0 auto;
  }
`;

export const Content = styled.div``;

export const ContainerProfile = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--grey-400);

  @media (max-width: 670px) {
    display: block;
  }
`;

export const Profile = styled.div`
  width: 60px;
  height: 60px;
  background: var(--purple-800);
  border-radius: 50%;
  position: relative;

  @media (max-width: 670px) {
    margin: 0 auto;
  }
`;

//ADICIONAR BOLA DE STATUS NO PERFIL USUARIO
// export const Status = styled.div`
//     position: absolute;
//     width: 20px;
//     background-color: green;
//     height: 20px;
// `;

export const ProfileName = styled.div`
  text-align: center;
  position: relative;
  line-height: 60px;
  color: var(--white);
`;

export const ButtonNew = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  color: var(--orange-600);
  font-weight: bold;

  @media (max-width: 670px) {
    margin: 1rem auto;
  }
`;

export const ArrowDown = styled.span``;

export const ContainerFavorites = styled.div``;

export const ContentFavorites = styled.div`
  display: flex;
  max-width: 400px;
  justify-content: space-between;
  padding: 1rem 0 2rem 2rem;
`;

export const SpanFavorites = styled.span`
  color: var(--grey-400);
`;

export const ContainerTasks = styled.div``;

export const ButtonTasks = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  width: 100%;
  margin: 2rem 0;
  color: var(--grey-400);
  font-size: 1rem;
`;

export const ContentTasks = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 85px;
  width: 100%;
`;
export const SpanArrowLeft = styled.span``;

export const SpanValueTasks = styled.span``;
