import Button from "../common/Button/Button";
import useGoback from "@/hooks/useGoback";

export default function GobackButton() {
  const handleGobackClick = useGoback();

  return (
    <Button type={"button"} onClick={handleGobackClick} color={"grey"} size={"small"}>
      뒤로가기
    </Button>
  );
}
