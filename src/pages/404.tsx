import BaseLayout from "@/components/Layout/BaseLayout";
import NotFound from "@/components/NotFound/NotFound";
import CustomHead from "@/components/CustomHead/CustomHead";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/"), 5000);
  }, []);

  return (
    <>
      <CustomHead title={router.pathname.slice(1)} />
      <NotFound />
    </>
  );
}

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
