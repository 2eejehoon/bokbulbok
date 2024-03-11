import styled from "styled-components";
import Popover from "../common/Popover";
import Button from "../common/Button";
import { Select } from "../common/Select";
import useAreaSelect from "../../hooks/useAreaSelect";
import { AREA_ARRAY } from "@/utils/area";

const AreaSelect = () => {
  const { area, onAreaClick } = useAreaSelect();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <SelectButton>{area}</SelectButton>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content width={150}>
          <Select.Root>
            {AREA_ARRAY.map((area, index) => {
              return (
                <Select.Option key={index} onClick={onAreaClick}>
                  {area}
                </Select.Option>
              );
            })}
          </Select.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

const SelectButton = styled(Button)`
  font-size: 12px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 20px;
  color: black;
`;

export default AreaSelect;
