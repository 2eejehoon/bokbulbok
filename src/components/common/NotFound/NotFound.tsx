import style from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>404</h1>
      <p className={style.text}>요청한 페이지를 찾을 수 없습니다</p>
    </div>
  );
}
