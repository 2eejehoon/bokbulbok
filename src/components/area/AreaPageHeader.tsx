import Header from "../common/Header";
import SortSelect from "../common/SortSelectModal";
import RouletteModal from "../common/RouletteModal";
import AreaSelect from "./AreaSelect";
import LocationServiceButton from "@/components/location/LocationServiceButton";

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
