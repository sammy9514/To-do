import { styled } from "styled-components";
import DashboardHeader from "../Static/DashboardHeader";
import Sidebar from "../Static/Sidebar";
import { Outlet } from "react-router-dom";
import { ClickToShow } from "../../Pages/ClickToShow";

export const Layout = () => {
  return (
    <div>
      <DashboardHeader />
      <Container>
        <Sidebar />
        <Outlet />
        {/* <ClickToShow /> */}
      </Container>
    </div>
  );
};

const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
`;
