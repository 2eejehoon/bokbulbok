import RangeSliderModal from "../RangeSliderModal/RangeSliderModal";
import SortSelectModal from "../SortSelectModal/SortSelectModal";
import RouletteModal from "../RouletteModal/RouletteModal";
import CategorySelectModal from "../CategorySelectModal/CategorySelectModal";
import style from "./FunctionBar.module.scss";

export default function FunctionBar() {
  return (
    <div className={style.container}>
      <div className={style.filtersort}>
        <CategorySelectModal
          options={["모두", "한식", "중식", "양식", "일식", "이색음식"]}
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
