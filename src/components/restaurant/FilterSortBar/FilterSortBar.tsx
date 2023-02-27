import style from "./FilterSortBar.module.scss";
import CategorySelectModal from "@/components/common/CategorySelectModal/CategorySelectModal";
import RangeSliderModal from "@/components/common/RangeSliderModal/RangeSliderModal";

export default function FilterSortBar() {
  return (
    <div className={style.container}>
      <div className={style.filter}>
        <CategorySelectModal />
        <RangeSliderModal />
      </div>
      <div className={style.sort}>
        <CategorySelectModal />
      </div>
    </div>
  );
}
