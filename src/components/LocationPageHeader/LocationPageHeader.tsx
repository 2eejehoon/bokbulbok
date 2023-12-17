import Header from "../Header/Header";
import RangeSliderPopover from "../RangeSliderPopover/RangeSliderPopover";
import RouletteModal from "../RouletteModal/RouletteModal";
import SortSelect from "../SortSelect/SortSelectModal";

const LocationPageHeader = () => {
  return (
    <Header>
      <Header.Left>
        <RangeSliderPopover />
        <SortSelect />
      </Header.Left>
      <Header.Right>
        <RouletteModal />
      </Header.Right>
    </Header>
  );
};

export default LocationPageHeader;
