"use client";
import React, { useEffect } from "react";
import { Card, CardBody } from "@nextui-org/react";
import useMarked from "@/hooks/useMarked";

export default function App({ blogInfo }: any) {
  const { content } = blogInfo;
  const { tHtml } = useMarked(content);

  return (
    <Card>
      <CardBody>
        <div dangerouslySetInnerHTML={{ __html: tHtml }}></div>
      </CardBody>
    </Card>
  );
}
