import { useRouter } from "next/router";
import { useEffect } from "react";
import style from "./NotFound.module.scss";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timeOut = window.setTimeout(() => router.push("/"), 5000);

    return () => clearTimeout(timeOut);
  });

  return (
    <div className={style.container}>
      <h1 className={style.title}>404</h1>
      <p className={style.text}>요청한 페이지를 찾을 수 없습니다</p>
    </div>
  );
}

export default NotFound;
