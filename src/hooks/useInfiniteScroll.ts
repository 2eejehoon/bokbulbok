import { FetchNextPageOptions, InfiniteQueryObserverResult } from "@tanstack/react-query";
import { useEffect, MutableRefObject } from "react";

interface useInfiniteScrollArgs {
  targetRef: MutableRefObject<HTMLElement | null>;
  hasNextPage: boolean | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<unknown>>;
}

export default function useInfiniteScroll({
  targetRef,
  hasNextPage,
  fetchNextPage,
}: useInfiniteScrollArgs): void {
  useEffect(() => {
    if (!hasNextPage) {
      return;
    }

    const callback = (entries: IntersectionObserverEntry[]) =>
      entries.forEach((entry) => entry.isIntersecting && fetchNextPage());

    const options = { root: null, rootMargin: "0px", threshold: 0 };

    const observer = new IntersectionObserver(callback, options);

    const target = targetRef && targetRef.current;

    if (!target) {
      return;
    }

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [targetRef, hasNextPage, fetchNextPage]);
}
