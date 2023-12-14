import * as _Popover from "@radix-ui/react-popover";
import styled from "styled-components";

const _Trigger = styled(_Popover.Trigger)``;

const _Close = styled(_Popover.Close)``;

const _Content = styled(_Popover.Content)<{
  width: string | number;
  height: string | number;
}>`
  width: ${({ width }) =>
    typeof width === "string" ? `${width}` : `${width}px`};
  height: ${({ height }) =>
    typeof height === "string" ? `${height}` : `${height}px`};
  padding: 10px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 5px;
  z-index: 2;
`;

const Popover = {
  Root: _Popover.Root,
  Trigger: _Trigger,
  Close: _Close,
  Portal: _Popover.Portal,
  Content: _Content,
};

export default Popover;
