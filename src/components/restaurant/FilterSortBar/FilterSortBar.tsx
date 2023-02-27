import style from "./FilterSortBar.module.scss";
import RestaurantSelectModal from "@/components/restaurant/RestaurantSelectModal/RestaurantSelectModal";
import RangeSliderModal from "@/components/common/RangeSliderModal/RangeSliderModal";
import SortSelectModal from "@/components/common/SortSelectModal/SortSelectModal";

export default function FilterSortBar() {
  return (
    <div className={style.container}>
      <div className={style.filter}>
        <RestaurantSelectModal />
        <RangeSliderModal />
      </div>
      <div className={style.sort}>
        <SortSelectModal />
      </div>
    </div>
  );
}
