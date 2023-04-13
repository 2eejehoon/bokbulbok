import style from "./PlaceInfo.module.scss";
import { convertCategory, convertBr } from "@/utils/convert";

interface PlaceInfoProps {
  title?: string;
  category?: string;
  menu?: string;
  address?: string;
  tel?: string;
  businessday?: string;
  businesshour?: string;
  overview?: string;
}

function PlaceInfo({
  title,
  category,
  menu,
  address,
  tel,
  businessday,
  businesshour,
  overview,
}: PlaceInfoProps) {
  return (
    <div className={style.container}>
      <p className={style.titleContainer}>
        <span className={style.title}>{title}</span>
        <span className={style.category}>{convertCategory(category)}</span>
      </p>

      {address && (
        <p className={style.textContainer}>
          <span className={style.icon}>&#128205;</span>
          <span className={style.text}>{address}</span>
        </p>
      )}

      {menu && (
        <p className={style.textContainer}>
          <span className={style.icon}>&#127859;</span>
          <span className={style.text}>{menu}</span>
        </p>
      )}

      {tel && (
        <p className={style.textContainer}>
          <span className={style.icon}>&#128222;</span>
          <span className={style.text}>{tel}</span>
        </p>
      )}

      {businessday && (
        <p className={style.textContainer}>
          <span className={style.icon}>&#128197;</span>
          <span className={style.text}>{businessday}</span>
        </p>
      )}

      {businesshour && (
        <p className={style.textContainer}>
          <span className={style.icon}>&#128338;</span>
          <span className={style.text}>{convertBr(businesshour)}</span>
        </p>
      )}

      {overview && (
        <p className={style.textContainer}>
          <span className={style.text}>{convertBr(overview)}</span>
        </p>
      )}
    </div>
  );
}

export default PlaceInfo;
