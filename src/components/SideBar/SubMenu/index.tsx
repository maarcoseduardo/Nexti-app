import { Unlist, List } from "./styles";

interface SubMenuProps {
  open: boolean;
  setOpen?: any;
  subMenu?: any[];
}

export function SubMenu({ open, setOpen, subMenu }: SubMenuProps) {
  return (
    <>
      <Unlist open={open} onClick={() => setOpen}>
        <List>Subtarefa</List>
        {/* {subMenu.map((item) => (
                    <List key={item.id}>
                        {item.name}
                    </List>
                ))} */}
      </Unlist>
    </>
  );
}
