import styled from 'styled-components';

interface SubMenuProps {
    readonly open: boolean;
    readonly setOpen?: boolean;
  }

export const Unlist = styled.ul<SubMenuProps>`
  display: ${ ({open})  => ( open ?'block': 'none')};
`;

export const List = styled.li`
    margin-left: 4.5rem;
    color: var(--grey-400);
`;