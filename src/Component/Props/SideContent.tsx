import { styled } from "styled-components";
import react from "react";

interface iSide {
  text: string;
  icone: any;
  hbcc: string;
  ifs: string;
}

export const SideContent: React.FC<iSide> = ({ text, icone, hbcc, ifs }) => {
  return (
    <div>
      <Container hbcc={hbcc}>
        <Icon ifs={ifs}>{icone}</Icon>
        <Text>{text}</Text>
      </Container>
    </div>
  );
};

const Text = styled.div`
  font-size: 13px;
`;

const Icon = styled.div<{ ifs: string }>`
  font-size: ${({ ifs }) => ifs};
`;

const Container = styled.div<{ hbcc: string }>`
  width: 92%;
  height: 47px;
  display: flex;
  padding-left: 26px;
  align-items: center;
  gap: 15px;

  &:hover {
    background-color: ${({ hbcc }) => hbcc};
  }
  &:active {
    background-color: yellow;
  }
`;
