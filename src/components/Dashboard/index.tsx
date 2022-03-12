import { MainMail } from "../MainMail";
import { SideBar } from "../SideBar";

import { ContainerDashboard } from './styles';
export function Dashboard() {
  return (
    <ContainerDashboard>
      <SideBar />
      <MainMail />
    </ContainerDashboard>
  );
}
