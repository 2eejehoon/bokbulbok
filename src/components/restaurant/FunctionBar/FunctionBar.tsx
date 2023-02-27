import style from "./FunctionBar.module.scss";
import SelectModal from "@/components/common/SelectModal/SelectModal";
import RangeSliderModal from "@/components/common/RangeSliderModal/RangeSliderModal";
import SortSelectModal from "@/components/common/SortSelectModal/SortSelectModal";
import RouletteModal from "@/components/common/RouletteModal/RouletteModal";

export default function FunctionBar() {
  return (
    <div className={style.container}>
      <div className={style.filtersort}>
        <SelectModal
          options={["전체", "한식", "중식", "양식", "일식", "이색음식"]}
        />
        <RangeSliderModal />
        <SortSelectModal options={["제목순", "등록순", "수정순"]} />
      </div>
      <div className={style.roulette}>
        <RouletteModal />
      </div>
    </div>
  );
}
