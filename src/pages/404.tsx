import { ReactElement } from "react";
import BaseLayout from "@/components/common/Layout/BaseLayout/BaseLayout";
import NotFound from "@/components/common/NotFound/NotFound";

export default function NotFoundPage() {
  return <NotFound />;
}

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
