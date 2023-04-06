import Link from "next/link";
import BlurImage from "../common/BlurImage/BlurImage";
import RouletteButton from "../RouletteButton/RouletteButton";
import style from "./PlaceItem.module.scss";
import { convertCategory } from "@/utils/convert";

interface PlaceItemProps {
  contentId: string;
  image: string;
  title: string;
  address: string;
  category: string;
}

export default function PlaceItem({
  contentId,
  image,
  title,
  address,
  category,
}: PlaceItemProps) {
  if (image === "") return null;
  return (
    <li className={style.container}>
      <Link href={`/place/detail/${contentId}`} className={style.link}>
        <div className={style.thumbnail}>
          <BlurImage src={image} alt={title} />
        </div>
        <div className={style.body}>
          <span className={style.category}>{convertCategory(category)}</span>
          <span className={style.title}>{title}</span>
          <span className={style.text}>{address}</span>
        </div>
      </Link>
      <RouletteButton contentId={contentId} title={title} />
    </li>
  );
}
