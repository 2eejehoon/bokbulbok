import Button from "../common/Button/Button";
import BlurImage from "../common/BlurImage/BlurImage";
import useCarousel from "@/hooks/useCarousel";
import styled from "styled-components";

interface CarouselProps {
  images?: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [imageIndex, handleButtonClick] = useCarousel();

  return (
    <Container>
      <ImageContainer>
        {(images ?? ["/noimg.png"]).map((image) => {
          return (
            <Image key={image} index={imageIndex}>
              <BlurImage src={image} alt={"음식점"} />
            </Image>
          );
        })}
      </ImageContainer>
      <ButtonContainer>
        {(images ?? []).map((_, index) => {
          return (
            <CarouselButton
              key={index}
              type={"button"}
              onClick={handleButtonClick}
            >
              {index + 1}
            </CarouselButton>
          );
        })}
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const ImageContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const Image = styled.div<{ index: number }>`
  flex: none;
  position: relative;
  border: 1px solid lightgrey;
  width: calc(100% - 20px);
  height: 260px;
  margin: 10px;
  border-radius: 15px;
  overflow: hidden;
  transition: 0.5s;
  transform: ${({ index }) =>
    `translate(calc(${-100 * index}% - ${20 * index}px))`};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 15px;
`;

const CarouselButton = styled(Button)`
  width: 25px;
  height: 25px;
  font-size: 10px;
  font-weight: 700;
  margin: 2px;
  padding: 6px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 50%;
`;
