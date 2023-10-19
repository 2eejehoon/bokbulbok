import { InfiniteData } from "@tanstack/react-query";
import PlaceItem from "../PlaceItem/PlaceItem";
import styled from "styled-components";
import { PlaceDataType } from "@/types/place";

interface PlaceListProps {
  data?: InfiniteData<{
    placeList: PlaceDataType[];
    nextCursor: number;
    prevCursor: number;
  }>;
}

export default function PlaceList({ data }: PlaceListProps) {
  return (
    <Container>
      {data?.pages.map((place) =>
        place.placeList?.map((place) => {
          return (
            <PlaceItem
              key={place.contentid}
              contentId={place.contentid}
              image={place.firstimage === "" ? "/noimg.png" : place.firstimage}
              title={place.title}
              address={place.addr1}
              category={place.cat3}
            />
          );
        })
      )}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow-y: scroll;
  margin: 0px;
  padding: 0px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
