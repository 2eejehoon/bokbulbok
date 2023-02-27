import style from "./FunctionBar.module.scss";
import RestaurantSelectModal from "@/components/restaurant/RestaurantSelectModal/RestaurantSelectModal";
import RangeSliderModal from "@/components/common/RangeSliderModal/RangeSliderModal";
import SortSelectModal from "@/components/common/SortSelectModal/SortSelectModal";
import RouletteModal from "@/components/common/RouletteModal/RouletteModal";

export default function FunctionBar() {
  return (
    <div className={style.container}>
      <div className={style.filtersort}>
        <RestaurantSelectModal />
        <RangeSliderModal />
        <SortSelectModal />
      </div>
      <div className={style.roulette}>
        <RouletteModal />
      </div>
    </div>
  );
}
