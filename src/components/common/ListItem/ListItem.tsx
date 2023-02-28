import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import style from "./ListItem.module.scss";

interface ListItemProps {
  id: string;
  image: string;
  title: string;
  address: string;
}

export default function ListItem({ id, image, title, address }: ListItemProps) {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = useCallback(() => setHover(true), []);
  const handleMouseLeave = useCallback(() => setHover(false), []);

  const handleAdd = useCallback(() => console.log(`${id} 추가`), []);
  const handleRemove = useCallback(() => console.log(`${id} 제거`), []);

  useEffect(() => {}, []);

  return (
    <>
      <li
        className={style.container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={`${id}`}>
          <div className={style.thumbnail}>
            <Image src={image} alt={title} width={"220"} height={"220"} />
          </div>
          <div className={style.body}>
            <span className={style.title}>{title}</span>
            <span className={style.text}>{address}</span>
          </div>
        </Link>
      </li>
    </>
  );
}
