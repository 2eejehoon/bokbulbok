import classNames from "classnames/bind";
import Link from "next/link";
import style from "./RouletteItem.module.scss";

interface RouletteItemProps {
  contentId: string;
  title: string;
  length: string;
}

const cx = classNames.bind(style);

export default function RouletteItem({ contentId, title, length }: RouletteItemProps) {
  return (
    <li key={contentId} className={cx("li", length)}>
      <Link href={`/place/detail/${contentId}`}>
        <div className={cx("title", length)}>{title}</div>
      </Link>
    </li>
  );
}
