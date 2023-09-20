import { styled } from "styled-components";

export const ClickToShowTwo = () => {
  return (
    <div>
      <Container>
        <Wrapper></Wrapper>
      </Container>
    </div>
  );
};

const Wrapper = styled.div`
  width: 90%;
  height: 97%;
  background-color: blue;
  /* overflow-x: hidden; */
`;
const Container = styled.div`
  width: 320px;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rebeccapurple;
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
