import Link from "next/link";
import { useCallback } from "react";
import BlurImage from "../common/BlurImage/BlurImage";
import RouletteButton from "../RouletteButton/RouletteButton";
import style from "./PlaceItem.module.scss";
import { getCategoryText } from "@/utils/getCategoryText";

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
  const handleAdd = useCallback(() => console.log(`${contentId} 추가`), []);
  const handleRemove = useCallback(() => console.log(`${contentId} 제거`), []);

  if (image === "") return null;
  return (
    <li className={style.container}>
      <Link href={`/place/detail/${contentId}`} className={style.link}>
        <div className={style.thumbnail}>
          <BlurImage src={image} alt={title} width={120} height={120} />
        </div>
        <div className={style.body}>
          <span className={style.category}>{getCategoryText(category)}</span>
          <span className={style.title}>{title}</span>
          <span className={style.text}>{address}</span>
        </div>
      </Link>
      <div className={style.buttonContainer}>
        <RouletteButton contentId={contentId} />
      </div>
    </li>
  );
}
