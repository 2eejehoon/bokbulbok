import styled from "styled-components";
import Image from "next/image";

type LoadingProps = {
  height: number;
};

export default function Loading({ height }: LoadingProps) {
  return (
    <Container height={height}>
      <Image
        src="/loading.gif"
        alt="로딩중"
        fill
        style={{ objectFit: "contain" }}
      />
    </Container>
  );
}

const Container = styled.div<{ height: number }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => `${height}px`};
`;
