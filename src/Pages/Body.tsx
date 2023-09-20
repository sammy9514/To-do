import { styled } from "styled-components";

export const Body = () => {
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
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  background-color: blue;
  height: calc(100vh - 60px);
`;
