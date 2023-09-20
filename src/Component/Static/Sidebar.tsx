import { styled } from "styled-components";
import { SideContent } from "../Props/SideContent";
import { IoMenuOutline } from "react-icons/io5";
import { icons } from "react-icons";
import { CgSun } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { BsCalendar4Week } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";

const data = [
  {
    id: 1,
    txt: "",
    iconn: <IoMenuOutline />,
    ifs: "30px",
    hbcc: "",
  },
  {
    id: 2,
    txt: "My Day",
    iconn: <CgSun />,
    ifs: "19px",
    hbcc: "rgba(61, 61, 61, 0.095)",
  },
  {
    id: 3,
    txt: "Important",
    iconn: <CiStar />,
    ifs: "19px",
    hbcc: "rgba(61, 61, 61, 0.095)",
  },
  {
    id: 4,
    txt: "Planned",
    iconn: <BsCalendar4Week />,
    ifs: "17px",
    hbcc: "rgba(61, 61, 61, 0.095)",
  },
  {
    id: 5,
    txt: "Assigned to me",
    iconn: <BsPerson />,
    ifs: "19px",
    hbcc: "rgba(61, 61, 61, 0.095)",
  },
  {
    id: 5,
    txt: "Tasks",
    iconn: <GrHomeRounded />,
    ifs: "17px",
    hbcc: "rgba(61, 61, 61, 0.095)",
  },
];

const Sidebar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <TaskHold>
            {data.map((props) => (
              <SideContent
                key={props.id}
                text={props.txt}
                icone={props.iconn}
                ifs={props.ifs}
                hbcc={props.hbcc}
              />
            ))}
          </TaskHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Sidebar;

// const Wrapper = styled.div``
// const Wrapper = styled.div``
// const Wrapper = styled.div``

const TaskHold = styled.div`
  width: 100%;
  /* background-color: aqua; */
`;

const Wrapper = styled.div`
  height: 92%;
  width: 100%;
`;

const Container = styled.div`
  width: 320px;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  justify-content: center;
  align-items: center;
`;
