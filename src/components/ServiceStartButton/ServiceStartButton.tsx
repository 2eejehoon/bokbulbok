import Button from "../common/Button/Button";
import Loading from "../common/Loading/Loading";
import style from "./ServiceStartButton.module.scss";
import useServiceStartButton from "@/hooks/useServiceStartButton";

export default function ServiceStartButton() {
  const { loaded, error, errorMessage, handleButtonClick } = useServiceStartButton();

  if (error) <p className={style.error}>{errorMessage}</p>;
  return (
    <div className={style.buttonContainer}>
      {loaded ? (
        <Button
          type={"button"}
          onClick={handleButtonClick}
          size={"large"}
          color={"black"}
        >
          시작하기
        </Button>
      ) : (
        <Loading />
      )}
    </div>
  );
}
