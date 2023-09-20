import { styled } from "styled-components";
import { CtsComp } from "../Component/Props/CtsComp";
import { PiToggleRightFill } from "react-icons/pi";
import { BiToggleLeft } from "react-icons/bi";
import { BiSolidToggleRight } from "react-icons/bi";

const data = [
  {
    id: 1,
    title: "General",
    abs: "Turn on light mode",
    btnS: "On",
    Ticon: <BiSolidToggleRight />,
    co: "dodgerblue",
  },
  {
    id: 2,
    abs: "Confirm before deleting",
    btnS: "On",
    Ticon: <BiSolidToggleRight />,
    co: "dodgerblue",
  },
  {
    id: 3,
    abs: "Add new tasks to top",
    btnS: "On",
    Ticon: <BiSolidToggleRight />,
    co: "dodgerblue",
  },
  {
    id: 4,
    abs: "Move starred tasks to top",
    btnS: "On",
    Ticon: <BiSolidToggleRight />,
    co: "dodgerblue",
  },
  {
    id: 5,
    abs: "Play completion sound",
    btnS: "On",
    Ticon: <BiSolidToggleRight />,
    co: "dodgerblue",
  },
  {
    id: 6,
    abs: "Show right-click menus",
    btnS: "On",
    Ticon: <BiSolidToggleRight />,
    co: "dodgerblue",
  },
  {
    id: 7,
    abs: "Turn on reminder notification",
    btnS: "On",
    Ticon: <BiSolidToggleRight />,
    co: "dodgerblue",
  },
  {
    id: 8,
    abs: "Show tasks that seems Important in My Day",
    btnS: "On",
    Ticon: <BiSolidToggleRight />,
    co: "dodgerblue",
  },
  {
    id: 9,
    title: "My Day",
    abs: "Turn on light mode",
    btnS: "On",
    Ticon: <BiSolidToggleRight />,
    co: "dodgerblue",
  },
  {
    id: 10,
    abs: "Show tasks that seems Important in My Day",
    btnS: "On",
    Ticon: <BiSolidToggleRight />,
    co: "dodgerblue",
  },
  {
    id: 11,
    abs: "Show tasks that seems Important in My Day",
    btnS: "On",
    Ticon: <BiSolidToggleRight />,
    co: "dodgerblue",
  },
  {
    id: 12,
    abs: "Show tasks that seems Important in My Day",
    btnS: "On",
    Ticon: <BiToggleLeft />,
    co: "gray",
  },
  {
    id: 13,
    abs: "Show tasks that seems Important in My Day",
    btnS: "On",
    Ticon: <BiSolidToggleRight />,
    co: "dodgerblue",
  },
  {
    id: 14,
    abs: "Show tasks that seems Important in My Day",
    btnS: "On",
    Ticon: <BiSolidToggleRight />,
    co: "dodgerblue",
  },
  {
    id: 15,
    abs: "Show tasks that seems Important in My Day",
    btnS: "On",
    Ticon: <BiToggleLeft />,
    co: "gray",
  },
  {
    id: 16,
    abs: "Show tasks that seems Important in My Day",
    btnS: "On",
    Ticon: <BiToggleLeft />,
    co: "gray",
  },
  {
    id: 17,
    abs: "Show tasks that seems Important in My Day",
    btnS: "On",
    Ticon: <BiSolidToggleRight />,
    co: "dodgerblue",
  },
  {
    id: 18,
    abs: "Show tasks that seems Important in My Day",
    btnS: "On",
    Ticon: <BiToggleLeft />,
    co: "gray",
  },
];

export const ClickToShow = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Head>
            <h5>Settings</h5>
            <p>X</p>
          </Head>
          {data.map((props) => (
            <CtsComp
              key={props.id}
              title={props.title}
              abs={props.abs}
              btnS={props.btnS}
              Ticon={props.Ticon}
              co={props.co}
            />
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 19px;
    margin: 0;
  }
  h5 {
    margin: 25px 0;
    font-weight: 500;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  height: 97%;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Container = styled.div`
  color: black;
  width: 320px;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 60px;
  animation: slide ease-in-out 270ms;

  @keyframes slide {
    from {
      right: -325px;
      transition: 920ms ease-in-out;
    }
    to {
      right: 0;
      transition: 920ms ease-in-out;
    }
  }
`;
