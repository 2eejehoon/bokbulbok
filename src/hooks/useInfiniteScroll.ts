import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useEffect, MutableRefObject } from "react";

interface useInfiniteScrollProps {
  ref: MutableRefObject<HTMLElement | null>;
  hasNextPage: boolean | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<unknown>>;
}

export default function useInfiniteScroll({
  ref,
  hasNextPage,
  fetchNextPage,
}: useInfiniteScrollProps) {
  useEffect(() => {
    if (!hasNextPage) {
      return;
    }

    const options = { root: null, rootMargin: "0px", threshold: 0 };

    const callback = (entries: IntersectionObserverEntry[]) =>
      entries.forEach((entry) => entry.isIntersecting && fetchNextPage());

    const observer = new IntersectionObserver(callback, options);

    const target = ref && ref.current;

    if (!target) {
      return;
    }

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [ref, hasNextPage, fetchNextPage]);
}
