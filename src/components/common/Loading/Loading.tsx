import style from "./Loading.module.scss";

function Loading() {
  return (
    <div className={style.container}>
      <div className={style.overlayLoader}>
        <div className={style.loader}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
