import { NextSeo } from "next-seo";

interface SeoProps {
  title?: string;
  description?: string;
  url: string;
  image?: string;
}

function Seo({ title, description, url, image }: SeoProps) {
  return (
    <NextSeo
      title={title ?? "복불복"}
      description={description ?? "음식점 상세 정보"}
      openGraph={{
        type: "website",
        locale: "ko_KR",
        url,
        title,
        images: [{ url: image ?? "", width: 300, height: 200, alt: title }],
      }}
    />
  );
}

export default Seo;
