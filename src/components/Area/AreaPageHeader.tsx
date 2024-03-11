import Header from "../Common/Header";
import SortSelect from "../Common/SortSelectModal";
import RouletteModal from "../Common/RouletteModal";
import AreaSelect from "./AreaSelect";
import LocationServiceButton from "@/components/Location/LocationServiceButton";

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
