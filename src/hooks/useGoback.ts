import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import usePreviousPath from "./usePreviousPath";

export default function useGoback() {
  const router = useRouter();
  const prevPath = usePreviousPath();

  const handleGoBackClick = useCallback(() => {
    router.back();
  }, []);

  useEffect(() => {
    if (prevPath) router.prefetch(prevPath);
  }, []);

  return handleGoBackClick;
}
