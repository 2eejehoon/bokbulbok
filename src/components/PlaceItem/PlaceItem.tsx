import Link from "next/link";
import { useCallback } from "react";
import BlurImage from "../common/BlurImage/BlurImage";
import style from "./PlaceItem.module.scss";
import { getCategoryText } from "@/utils/getCategoryText";

interface PlaceItemProps {
  id: string;
  image: string;
  title: string;
  address: string;
  category: string;
}

export default function PlaceItem({
  id,
  image,
  title,
  address,
  category,
}: PlaceItemProps) {
  const handleAdd = useCallback(() => console.log(`${id} 추가`), []);
  const handleRemove = useCallback(() => console.log(`${id} 제거`), []);

  if (image === "") return null;
  return (
    <li className={style.container}>
      <Link href={`/place/detail/${id}`} className={style.link}>
        <div className={style.thumbnail}>
          <BlurImage src={image} alt={title} width={120} height={120} />
        </div>
        <div className={style.body}>
          <span className={style.category}>{getCategoryText(category)}</span>
          <span className={style.title}>{title}</span>
          <span className={style.text}>{address}</span>
        </div>
      </Link>
    </li>
  );
}
