"use client";
import BlogList from "@/components/blog-list";
import { useEffect, useState } from "react";
// import useSWR from "swr";
// const fetcher = (url) => fetch(url).then((r) => r.json());
export default function BlogPage() {
  // const { data, error } = useSWR("http://localhost:3000/blog/getList", fetcher);
  // console.log("🚀  data:", data);
  const [blogList, setBlogList] = useState([]);
  const [pagesize, setPagesize] = useState([]);
  const [pageNum, setPageNum] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let result = await fetch(
        `/api/blogs/getList?pageSize=${pagesize}&pageNum=${pageNum}`,
        {
          method: "get",
        }
      );
      let res = await result.json(); //必须通过此方法才可返回数据
      console.log("🚀  res:", res);
      setBlogList(res);
    };

    fetchData();
  }, []);

  return (
    <div>
      {blogList?.map((item: any) => {
        return <BlogList key={item.id} blogInfo={item}></BlogList>;
      })}
    </div>
  );
}
