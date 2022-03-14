import { Main } from "../Main";
import { SideBar } from "../SideBar";

import { ContainerDashboard } from "./styles";
export function Dashboard() {
  return (
    <>
      <ContainerDashboard>
        <SideBar />
        <Main />
      </ContainerDashboard>
    </>
  );
}
