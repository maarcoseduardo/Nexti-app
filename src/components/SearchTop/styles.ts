import styled from 'styled-components';


export const Container = styled.section`
    max-width: 1550px;
    width: 100%;
    padding: 2rem;
`;

export const Content = styled.div`
    
`;

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
`;

export const Unlist = styled.ul`
    display: flex;
    width: 380px;
    justify-content: space-between;
`;

export const List = styled.li`
`;

export const Button = styled.button`
    padding: 0.8rem 1rem;
    background-color: var(--orange-600);
    border-radius: 5px;
    font-weight: bold;
`;