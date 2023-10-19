import Link from "next/link";
import BlurImage from "../common/BlurImage/BlurImage";
import RouletteButton from "../RouletteButton/RouletteButton";
import styled from "styled-components";
import { convertCategoryToText } from "@/utils/convert";

interface PlaceItemProps {
  contentId: string;
  image: string;
  title: string;
  address: string;
  category: string;
}

export default function PlaceItem({
  contentId,
  image,
  title,
  address,
  category,
}: PlaceItemProps) {
  return (
    <Container>
      <Thumbnail>
        <BlurImage src={image} alt={title} />
      </Thumbnail>
      <Link href={`/place/detail/${contentId}`}>
        <Body>
          <Category>{convertCategoryToText(category)}</Category>
          <Title>{title}</Title>
          <Text>{address}</Text>
        </Body>
      </Link>
      <RouletteButton contentId={contentId} title={title} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid lightgrey;
`;

const Thumbnail = styled.div`
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 120px;
  height: 120px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 5px;
`;

const Category = styled.span`
  padding: 5px;
  font-size: 12px;
  background-color: lightgrey;
  border-radius: 10px;
`;

const Title = styled.span`
  padding: 2px;
  font-size: 14px;
  font-weight: 600;
`;

const Text = styled.span`
  padding: 2px;
  color: gray;
  font-size: 12px;
  font-weight: 500;
`;
