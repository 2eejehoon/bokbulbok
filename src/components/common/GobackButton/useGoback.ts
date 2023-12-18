import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import usePreviousPath from "../../../hooks/usePreviousPath";

export default function useGoback(): () => void {
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
