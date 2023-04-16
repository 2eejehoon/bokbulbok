import style from "./ServiceIntro.module.scss";

export default function ServiceIntro() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>복불복</h1>
      <p className={style.intro}>
        내 주변 음식점 정보 확인하고 <br /> 룰렛 게임으로 랜덤한 음식점을 선택할 수
        있습니다.
      </p>
    </div>
  );
}
