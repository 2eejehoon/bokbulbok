import styled from "styled-components";
import Link from "next/link";
import BlurImage from "../BlurImage/BlurImage";
import RouletteButton from "../RouletteButton/RouletteButton";
import { Category, convertCategoryToText } from "@/utils/category";

interface PlaceItemProps {
  contentId: string;
  image: string;
  title: string;
  address: string;
  category: Category;
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
        <BlurImage src={image} alt={title} width={120} height={120} />
      </Thumbnail>
      <Link href={`/detail/${contentId}`}>
        <Body>
          <CategoryText>{convertCategoryToText(category)}</CategoryText>
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
  contain: size;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  min-width: 120px;
  height: 120px;

  img {
    width: 120px;
    height: 120px;
    aspect-ratio: 1/1;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 5px;
`;

const CategoryText = styled.span`
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
