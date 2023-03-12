import { ReactElement } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BaseLayout from "@/components/common/Layout/BaseLayout/BaseLayout";
import NotFound from "@/components/common/NotFound/NotFound";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    window.setTimeout(() => router.push("/"), 1000);
  });

  return <NotFound />;
}

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
