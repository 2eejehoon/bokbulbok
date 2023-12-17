import styled from "styled-components";
import ServiceStartButton from "./ServiceStartButton/ServiceStartButton";

export default function Home() {
  return (
    <Container>
      <Title>복불복</Title>
      <Text>
        내 주변 음식점 정보 확인하고 <br /> 룰렛 게임으로 랜덤한 음식점을 선택할
        수 있습니다.
      </Text>
      <ServiceStartButton />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  padding: 5px;
  margin: 5px;
`;

const Text = styled.p`
  text-align: center;
  line-height: 25px;
  font-size: 16px;
  font-weight: 400;
  padding: 5px;
  margin: 5px;
  color: grey;
`;
