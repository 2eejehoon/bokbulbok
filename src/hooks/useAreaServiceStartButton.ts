import { useRouter } from "next/router";

export default function useAreaServiceStartButton() {
  const router = useRouter();

  const onAreaButtonClick = () => {
    router.push({
      pathname: "/area/area",
      query: {
        areaCode: 1,
        sort: "D",
      },
    });
  };

  return onAreaButtonClick;
}
