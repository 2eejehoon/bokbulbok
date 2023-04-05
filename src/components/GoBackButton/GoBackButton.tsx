import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "../common/Button/Button";

export default function GoBackButton() {
  const router = useRouter();
  const [prevPath, setPrevPath] = useState("");

  const handleGoBackClick = () => {
    router.push(prevPath);
  };

  useEffect(() => {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;

    const prevPath = storage.getItem("prevPath");

    setPrevPath(prevPath as string);
  }, []);

  return (
    <Button type={"button"} onClick={handleGoBackClick} color={"grey"} size={"small"}>
      뒤로가기
    </Button>
  );
}
