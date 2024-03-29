import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useEffect, useRef, RefObject } from "react";

interface useInfiniteScrollArgs {
  hasNextPage?: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<unknown>>;
}

export default function useInfiniteScroll({
  hasNextPage,
  fetchNextPage,
}: useInfiniteScrollArgs): RefObject<HTMLDivElement> {
  const targetRef = useRef<HTMLDivElement>(null);

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
  }, [hasNextPage, fetchNextPage]);

  return targetRef;
}
