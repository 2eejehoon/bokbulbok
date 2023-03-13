import SidoSelectModal from "../SidoSelectModal/SidoSelectModal";
import style from "./AreaSelectGroup.module.scss";
import SortSelectModal from "@/components/common/SortSelectModal/SortSelectModal";
import RouletteModal from "@/components/common/RouletteModal/RouletteModal";

export default function AreaSelectGroup() {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <SidoSelectModal />
        <SortSelectModal />
      </div>
      <div className={style.right}>
        <RouletteModal />
      </div>
    </div>
  );
}
