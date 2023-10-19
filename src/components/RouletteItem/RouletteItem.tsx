import classNames from "classnames/bind";
import Link from "next/link";
import style from "./RouletteItem.module.scss";
import styled from "styled-components";
import { convertLengthToText } from "@/utils/convert";

interface RouletteItemProps {
  contentId: string;
  title: string;
  length: number;
}

const cx = classNames.bind(style);

export default function RouletteItem({
  contentId,
  title,
  length,
}: RouletteItemProps) {
  return (
    <Container
      key={contentId}
      className={cx("li", convertLengthToText(length))}
    >
      <Link href={`/place/detail/${contentId}`}>
        <Content className={cx("title", convertLengthToText(length))}>
          {title}
        </Content>
      </Link>
    </Container>
  );
}

const Container = styled.li``;

const Content = styled.div``;
