import style from "./SelectGroup.module.scss";
import RangeSliderModal from "@/components/RangeSliderModal/RangeSliderModal";
import SortSelectModal from "@/components/common/SortSelectModal/SortSelectModal";
import RouletteModal from "@/components/common/RouletteModal/RouletteModal";

export default function SelectGroup() {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <RangeSliderModal />
        <SortSelectModal />
      </div>
      <div className={style.right}>
        <RouletteModal />
      </div>
    </div>
  );
}