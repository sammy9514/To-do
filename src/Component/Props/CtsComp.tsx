import { styled } from "styled-components";

interface iData {
  title?: string;
  abs: string;
  btnS: string;
  Ticon: any;
  co: string;
}
export const CtsComp: React.FC<iData> = ({ title, abs, btnS, Ticon, co }) => {
  return (
    <div>
      <Container>
        <Title>{title}</Title>
        <Wrapper>
          <AbtSet>{abs} </AbtSet>
          <ToggleBtn>
            <Icon co={co}>{Ticon}</Icon>
            <BtnState>{btnS}</BtnState>
          </ToggleBtn>
        </Wrapper>
      </Container>
    </div>
  );
};

const BtnState = styled.div`
  font-size: 14px;
`;
const Icon = styled.div<{ co: string }>`
  font-size: 50px;
  color: ${({ co }) => co};
  display: flex;
  align-items: center;
`;
const ToggleBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;
const AbtSet = styled.div`
  font-size: 13px;
  font-weight: 600;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  font-weight: 500;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 45px;
  padding-top: 17px;
`;

const Container = styled.div``;
