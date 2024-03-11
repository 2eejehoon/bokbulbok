import Header from "../Common/Header";
import SortSelect from "../Common/SortSelectModal";
import RouletteModal from "../Common/RouletteModal";
import RangeSliderPopover from "./RangeSliderPopover";
import AreaServiceButton from "@/components/Area/AreaServiceButton";

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
