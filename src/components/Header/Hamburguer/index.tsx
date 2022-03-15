import { Burguer, Bullet } from "./styles";

interface HamburguerProps {
    open: boolean;
    setOpen?: any;
}

export function Hamburguer({ open, setOpen }: HamburguerProps) {
    
    return (
    <>
      <Burguer open={open} onClick={() => setOpen}>
        <Bullet />
        <Bullet />
        <Bullet />
      </Burguer>
    </>
  );
}
