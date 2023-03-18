import RouletteModal from "../RouletteModal/RouletteModal";
import style from "./SelectGroup.module.scss";
import RangeSliderModal from "@/components/RangeSliderModal/RangeSliderModal";
import SortSelectModal from "@/components/SortSelectModal/SortSelectModal";

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
