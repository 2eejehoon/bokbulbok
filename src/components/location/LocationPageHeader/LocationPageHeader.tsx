import Header from "../../common/Header/Header";
import SortSelect from "../../common/SortSelect/SortSelectModal";
import RouletteModal from "../../common/RouletteModal/RouletteModal";
import RangeSliderPopover from "../RangeSliderPopover/RangeSliderPopover";
import AreaServiceButton from "@/components/area/AreaServiceButton/AreaServiceButton";

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
