import styled from "styled-components";

export const Container = styled.main`
  max-width: 1550px;
  width: 100%;
  padding: 0 2rem;
  border-bottom: 1px solid var(--grey-400);
`;

export const Content = styled.div`
  height: 100px;
  margin: 2rem 0;

  @media (max-width: 670px) {
    height: 300px;
  }
`;

export const Unlist = styled.ul``;

export const List = styled.li``;

export const ContentEmail = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;

  @media (max-width: 670px) {
    flex-direction: column;
    height: 300px;
    background: var(--white);
  }
`;

export const ProfileReceived = styled.div`
  width: 60px;
  height: 60px;
  background: var(--yellow-700);
  border-radius: 50%;
  position: relative;
  margin-right: 1rem;
  @media (max-width: 670px) {
    margin: 0 auto;
  }
`;

export const ProfileName = styled.div`
  text-align: center;
  position: relative;
  line-height: 60px;
  color: var(--white);
`;

export const ProfileAndContent = styled.div`
  display: flex;
  max-width: 500px;
  height: 100px;
  width: 100%;
  align-items: center;

  @media (max-width: 670px) {
    flex-direction: column;
  }
`;

export const DataEmail = styled.div``;

export const NameReceived = styled.h3`
  margin: 0.2rem 0;
  color: var(--grey-400);

  @media (max-width: 670px) {
    margin: 1rem auto;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  color: var(--grey-400);
  
  @media (max-width: 670px) {
    margin-top: 2rem;
    text-align: center;
  }
`;

export const SpanIcon = styled.span`
  margin-right: 10px;
`;

export const DivHourCopied = styled.div``;

export const ContainerCopiedMessages = styled.div`
  display: flex;
  margin-top: 1rem;
  @media (max-width: 670px) {
    margin: 1rem 0 0 1.2rem;
  }
`;

export const PerfilCopied = styled.div`
  width: 25px;
  height: 25px;
  background: var(--yellow-700);
  border-radius: 50%;
  margin-left: -10px;
`;
