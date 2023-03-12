import { useEffect, MutableRefObject } from "react";

interface useIniniteScrollProps {
  ref: MutableRefObject<null>;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
}

export default function useIniniteScroll({
  ref,
  hasNextPage,
  fetchNextPage,
}: useIniniteScrollProps) {
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
