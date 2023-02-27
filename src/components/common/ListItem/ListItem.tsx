import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import Button from "../Button/Button";
import style from "./ListItem.module.scss";

interface ListItemProps {
  id: string;
  image: string;
  title: string;
  address: string;
  phone: string;
}

export default function ListItem({
  id,
  image,
  title,
  address,
  phone,
}: ListItemProps) {
  const [value, setValue] = useState(false);
  const handleAdd = useCallback(() => console.log(`${id} 추가`), []);
  const handleRemove = useCallback(() => console.log(`${id} 제거`), []);

  useEffect(() => {}, []);

  return (
    <>
      <li className={style.container}>
        <Link href={`/restaurant/${id}`}>
          <div className={style.thumbnail}>
            <Image
              src={
                "data:image/jpeg;base64,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"
              }
              alt={title}
              width={"220"}
              height={"220"}
            />
          </div>
          <div className={style.body}>
            <span className={style.title}>{title}</span>
            <span className={style.text}>{address}</span>
            <span className={style.text}>{phone}</span>
          </div>
        </Link>
        <div className={style.buttonContainer}>
          <Button type="button" color="black" size="medium" onClick={handleAdd}>
            추가하기
          </Button>
          <Button
            type="button"
            color="grey"
            size="medium"
            onClick={handleRemove}
          >
            제거하기
          </Button>
        </div>
      </li>
    </>
  );
}
