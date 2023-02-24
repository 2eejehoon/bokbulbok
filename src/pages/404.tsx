import { ReactElement } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BaseLayout from "@/components/common/Layout/BaseLayout/BaseLayout";
import NotFound from "@/components/common/NotFound/NotFound";
import CustomHead from "@/components/CustomHead";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/"), 5000);
  }, []);

  return (
    <>
      <CustomHead title={"404"} />
      <NotFound />
    </>
  );
}

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
