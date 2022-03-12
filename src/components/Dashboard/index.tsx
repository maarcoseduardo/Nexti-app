import { SearchTop } from "../SearchTop";
import { SideBar } from "../SideBar";

import { ContainerDashboard } from "./styles";
export function Dashboard() {
  return (
    <>
      <ContainerDashboard>
        <SideBar />
        <SearchTop />
      </ContainerDashboard>
    </>
  );
}
