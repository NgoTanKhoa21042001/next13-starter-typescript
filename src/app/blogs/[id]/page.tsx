// Dynamic routes
const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  console.log(params.id);

  return <div>View Detail blog {params.id}</div>;
};

export default ViewDetailBlog;
