import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getPrevPathFromSessionStorage } from "@/utils/storage";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const prevPath = getPrevPathFromSessionStorage() || "/";
    const timeOut = setTimeout(() => router.push(prevPath), 5000);

    return () => clearTimeout(timeOut);
  }, [router]);

  return (
    <Container>
      <Title>404</Title>
      <Text>요청한 페이지를 찾을 수 없습니다</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  color: black;
`;

const Text = styled.p`
  color: gray;
`;
