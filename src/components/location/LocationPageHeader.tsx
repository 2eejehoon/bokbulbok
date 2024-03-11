import Header from "../common/Header";
import SortSelect from "../common/SortSelectModal";
import RouletteModal from "../common/RouletteModal";
import RangeSliderPopover from "./RangeSliderPopover";
import AreaServiceButton from "@/components/area/AreaServiceButton";

const LocationPageHeader = () => {
  return (
    <Header>
      <Header.Left>
        <RangeSliderPopover />
        <SortSelect />
      </Header.Left>
      <Header.Right>
        <AreaServiceButton />
        <RouletteModal />
      </Header.Right>
    </Header>
  );
};

export default LocationPageHeader;
