import { useEffect, useState } from "react";

export default function usePreviousPath(): string {
  const [mount, setMount] = useState(false);
  const prevPath =
    typeof window && mount && window.sessionStorage.getItem("prevPath");

  useEffect(() => {
    setMount(true);
  }, []);

  return prevPath as string;
}
