import styled from "styled-components";

interface BurguerProps {
  readonly open: boolean;
}

export const HeaderContainer = styled.header``;

export const HeaderContent = styled.div`
  height: 4rem;
  max-width: 1920px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background: var(--grey-600);
`;

export const HamburguerButton = styled.button``;

export const UnListBurguer = styled.div<BurguerProps>`
  @media (max-width: 1080px) {
    background: white;
    width: 100%;
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100vh;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out 0s;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
`;

export const Unlist = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 150px;

  @media (max-width: 1080px) {
    flex-direction: column;
    padding: 8rem 0;
    align-items: center;
  }
`;

export const List = styled.li``;

export const Button = styled.button`
  border: none;
  box-shadow: none;
  color: var(--white);

  @media (max-width: 1080px) {
    margin: 3rem 0;
    color: var(--orange-600);
  }
`;
