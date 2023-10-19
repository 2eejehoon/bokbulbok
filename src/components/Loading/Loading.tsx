import Image from "next/image";
import styled from "styled-components";

export default function Loading() {
  return (
    <Container>
      <Image src={"/loading.gif"} alt={"로딩"} width={30} height={30} />
    </Container>
  );
}

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  padding: 10px;
`;
