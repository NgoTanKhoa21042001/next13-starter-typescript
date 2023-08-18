"use client";
import Link from "next/link";
import { Button, Card } from "react-bootstrap";
import useSWR, { Fetcher } from "swr";
// Dynamic routes
const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    // Đoạn code này sử dụng hook useSWR để lấy dữ liệu từ một nguồn bên ngoài. Trong trường hợp này, dữ liệu được lấy từ API có URL là http://localhost:8000/blogs/${params.id}. Hàm fetcher được sử dụng để thực sự lấy dữ liệu từ API. Các tùy chọn revalidateIfStale, revalidateOnFocus và revalidateOnReconnect được sử dụng để kiểm soát khi nào dữ liệu được xác thực lại.
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    // ngăn gọi lại data khi chuyển trang (Revalidation)
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      {" "}
      <div className="my-3">
        <Link href={"/blogs"}>Go Back</Link>
      </div>
      <Card className="text-center">
        <Card.Header>Title: {data?.title}</Card.Header>
        <Card.Body>
          <Card.Text>{data?.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Author: {data?.author}</Card.Footer>
      </Card>
    </div>
  );
};

export default ViewDetailBlog;
