import styled from "styled-components";
import { convertCategoryToText, convertBrToSpace } from "@/utils/convert";

interface PlaceInfoProps {
  title?: string;
  category?: string;
  menu?: string;
  address?: string;
  tel?: string;
  businessday?: string;
  businesshour?: string;
  overview?: string;
}

export default function PlaceInfo({
  title,
  category,
  menu,
  address,
  tel,
  businessday,
  businesshour,
  overview,
}: PlaceInfoProps) {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <Category>{convertCategoryToText(category)}</Category>
      </TitleContainer>

      {address && (
        <TextContainer>
          <Icon>&#128205;</Icon>
          <Text>{address}</Text>
        </TextContainer>
      )}

      {menu && (
        <TextContainer>
          <Icon>&#127859;</Icon>
          <Text>{menu}</Text>
        </TextContainer>
      )}

      {tel && (
        <TextContainer>
          <Icon>&#128222;</Icon>
          <Text>{tel}</Text>
        </TextContainer>
      )}

      {businessday && (
        <TextContainer>
          <Icon>&#128197;</Icon>
          <Text>{businessday}</Text>
        </TextContainer>
      )}

      {businesshour && (
        <TextContainer>
          <Icon>&#128338;</Icon>
          <Text>{convertBrToSpace(businesshour)}</Text>
        </TextContainer>
      )}

      {overview && (
        <TextContainer>
          <Text>{convertBrToSpace(overview)}</Text>
        </TextContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
`;

const TitleContainer = styled.p`
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 36px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Title = styled.span`
  color: black;
  margin-right: 5px;
  font-size: 16px;
  font-weight: 700;
`;

const Category = styled.span`
  color: grey;
  font-weight: 400;
  font-size: 14px;
`;

const TextContainer = styled.p`
  width: 100%;
  margin: 0;
  margin-bottom: 5px;
`;

const Icon = styled.span`
  font-size: 12px;
  margin-right: 5px;
`;

const Text = styled.text`
  color: black;
  font-size: 12px;
  font-weight: 400;
`;
