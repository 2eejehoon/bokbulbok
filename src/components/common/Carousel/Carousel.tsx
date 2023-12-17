import styled from "styled-components";
import Button from "../Button/Button";
import BlurImage from "../BlurImage/BlurImage";
import useCarousel from "@/hooks/useCarousel";

interface CarouselProps {
  images?: string[];
}

export default function Carousel({ images = [] }: CarouselProps) {
  const { imageIndex, handleButtonClick } = useCarousel();

  return (
    <Container>
      <Cropper>
        {(images.length === 0 ? ["/noimg.png"] : images).map((image) => {
          return (
            <ImageContainer key={image} index={imageIndex}>
              <BlurImage src={image} alt={"음식점"} />
            </ImageContainer>
          );
        })}
      </Cropper>
      <ButtonContainer>
        {images.map((_, index) => {
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

const Cropper = styled.div`
  display: flex;
  overflow: hidden;
`;

const ImageContainer = styled.div<{ index: number }>`
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
  gap: 2px;
  width: 100%;
  bottom: 15px;
`;

const CarouselButton = styled(Button)`
  width: 25px;
  height: 25px;
  font-size: 10px;
  font-weight: 700;
  padding: 6px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 50%;
`;
