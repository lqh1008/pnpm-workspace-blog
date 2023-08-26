import { parse } from "marked";
import { useEffect, useState } from "react";

const useMarked = (content: any): any => {
  const [tHtml, setTHtml] = useState("");
  useEffect(() => {
    setTHtml(parse(content));
  }, [content]);
  return {
    tHtml,
  };
};

export default useMarked;
