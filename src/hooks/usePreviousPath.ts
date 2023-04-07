import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function GoBackButton() {
  const [mount, setMount] = useState(false);
  const router = useRouter();
  const prevPath = typeof window && mount && window.sessionStorage.getItem("prevPath");

  const handleGoBackClick = () => {
    router.push(prevPath as string);
  };

  useEffect(() => {
    setMount(true);
  }, []);

  return handleGoBackClick;
}
