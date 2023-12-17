import Header from "../../common/Header/Header";
import AreaSelect from "../AreaSelect/AreaSelect";
import SortSelect from "../../common/SortSelect/SortSelectModal";
import RouletteModal from "../../common/RouletteModal/RouletteModal";
import LocationServiceButton from "../../Location/LocationServiceButton/LocationServiceButton";

const AreaPageHeader = () => {
  return (
    <Header>
      <Header.Left>
        <AreaSelect />
        <SortSelect />
      </Header.Left>
      <Header.Right>
        <LocationServiceButton />
        <RouletteModal />
      </Header.Right>
    </Header>
  );
};

export default AreaPageHeader;
