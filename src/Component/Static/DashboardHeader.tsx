import styled from "styled-components";
import { CgMenuGridO } from "react-icons/cg";
import { LiaSearchSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { AiOutlineQuestion } from "react-icons/ai";
import { VscMegaphone } from "react-icons/vsc";
import { useState } from "react";
import { ClickToShow } from "../../Pages/ClickToShow";
import { ClickToShowTwo } from "../Props/ClickToShowTwo";

const DashboardHeader = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const toogle = () => {
    setToggle(!toggle);
    if (toggle2) {
      setToggle2(false);
    }
  };
  const toogle2 = () => {
    setToggle2(!toggle2);
    if (toggle) {
      setToggle(false);
    }
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Holder>
            <Menu>
              <CgMenuGridO />
            </Menu>
            <h3>To Do</h3>
          </Holder>

          <InputHold>
            <SearchHold>
              <LiaSearchSolid />
            </SearchHold>
            <input placeholder="Search" />
          </InputHold>

          <IconHold>
            <One onClick={toogle}>
              <CiSettings />
              {toggle ? <ClickToShow /> : null}
            </One>
            <Two onClick={toogle2}>
              <AiOutlineQuestion />
              {toggle2 ? <ClickToShowTwo /> : null}
            </Two>
            <Three>
              <VscMegaphone />
            </Three>
            <Four>AO</Four>
          </IconHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default DashboardHeader;

const Four = styled.div`
  font-size: 17px;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  margin-left: 20px;
`;

const Three = styled.div`
  font-size: 24px;
  color: white;
  margin-left: 23px;
`;

const Two = styled.div`
  font-size: 24px;
  color: white;
  margin-left: 23px;
`;

const One = styled.div`
  font-size: 24px;
  color: white;
  cursor: pointer;
`;

const IconHold = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const SearchHold = styled.div`
  display: flex;
  width: 40px;
  height: 100%;
  justify-content: center;
  color: dodgerblue;
  font-size: 20px;
  outline: none;
  border: none;
  align-items: center;
`;

const InputHold = styled.div`
  display: flex;
  height: 32px;
  width: 350px;
  background-color: white;
  border-radius: 3px;

  input {
    flex: 1;
    border: none;
    outline: none;
  }
`;

const Menu = styled.div`
  color: white;
  font-size: 35px;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  h3 {
    color: white;
    margin-left: 20px;
    margin-bottom: 22px;
    white-space: nowrap;
  }
`;

const Wrapper = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: dodgerblue;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
