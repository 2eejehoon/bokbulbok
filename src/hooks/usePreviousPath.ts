import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function usePreviousPath() {
  const router = useRouter();
  const prevPathRef = useRef<string | null>(null);

  const handleGoBackClick = () => {
    router.push(prevPathRef.current as string);
  };

  useEffect(() => {
    if (typeof window) {
      prevPathRef.current = sessionStorage.getItem("prevPath");
    }
  }, []);

  return { handleGoBackClick };
}
