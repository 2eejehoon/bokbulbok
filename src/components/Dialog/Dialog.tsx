import * as _Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

const Overlay = styled(_Dialog.Overlay)``;

const Content = styled(_Dialog.Content)<{
  width: string | number;
  height: string | number;
}>`
  z-index: 2;
  width: ${({ width }) =>
    typeof width === "string" ? `${width}` : `${width}px`};
  height: ${({ height }) =>
    typeof height === "string" ? `${height}` : `${height}px`};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;

const Title = styled(_Dialog.Title)``;

const Description = styled(_Dialog.Description)``;

const Dialog = {
  Root: _Dialog.Root,
  Trigger: _Dialog.Trigger,
  Overlay: Overlay,
  Content: Content,
  Title: Title,
  Description: Description,
  Close: _Dialog.Close,
};

export default Dialog;
