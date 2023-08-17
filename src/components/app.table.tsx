"use client";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { mutate } from "swr";
import CreateModal from "./create.modal";
import UpdateModal from "./update.modal";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
interface IProps {
  blogs: IBlog[];
}
const AppTable = (props: IProps) => {
  // nhấn edit thì biết đang edit blog nào

  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  // Lấy data
  const { blogs } = props;
  const handleDelete = (id: number) => {
    if (confirm(`Do you want to delete this blog? (id = ${id}`)) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            // fetch lại data khi ấn save
            mutate("http://localhost:8000/blogs");
          } else {
            toast.error("Delete a blog failed");
          }
        });
    }
  };
  return (
    <>
      {" "}
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>Table Blogs</h3>
        <Button variant="secondary" onClick={() => setShowModalCreate(true)}>
          Add new
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>
                {/* ấn vào view sẽ chuyển trang hiển thị blog có id tương ứng */}
                <Link href={`blogs/${item.id}`}>
                  <Button>View</Button>
                </Link>
                <Button
                  variant="warning"
                  className="mx-3"
                  onClick={() => {
                    // set data chính bằng blog hiện tại
                    setBlog(item);
                    setShowModalUpdate(true);
                  }}
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />
      <UpdateModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
      />
    </>
  );
};
export default AppTable;
