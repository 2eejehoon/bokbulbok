import Image from "next/image";
import style from "./Loading.module.scss";

function Loading() {
  return (
    <div className={style.container}>
      <Image src={"/loading.gif"} alt={"로딩"} width={30} height={30} />
    </div>
  );
}

export default Loading;
