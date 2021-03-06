import styled from "styled-components";

export const Container = styled.section`
  max-width: 1550px;
  width: 100%;
  height: 180px;
  padding: 2rem;
  background: var(--grey-100);

  @media (max-width: 670px) {
    height: 400px;
  }
`;

export const Content = styled.div``;

export const Input = styled.input`
  max-width: 1550px;
  width: 100%;
  height: 3rem;
  background: var(--white);
  padding: 10px;
  border: 1px solid var(--grey-600);
  border-radius: 5px;
  color: black;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  align-items: center;

  @media (max-width: 670px) {
    width: 100px;
    height: 320px;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Unlist = styled.ul`
  display: flex;
  width: 380px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 670px) {
    flex-direction: column;
    width: 100px;
    height: 230px;
  }
`;

export const List = styled.li``;

export const InputCheckBox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
`;

export const Button = styled.button`
  padding: 0.8rem 1rem;
  background-color: var(--orange-600);
  border-radius: 5px;
  font-weight: bold;
  color: var(--white);
`;

export const ButtonFilter = styled.button`
  cursor: pointer;
  padding: 0 0.5rem;
  width: 2rem;
  height: 2rem;
`;
