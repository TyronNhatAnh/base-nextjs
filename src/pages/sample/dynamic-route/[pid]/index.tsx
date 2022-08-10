import {useRouter} from "next/router";

// you can access with dynamic route by it
// /sample/dynamic-route/abc?foo=bar
// /sample/dynamic-route/1
// /sample/dynamic-route/abc
const Post = () => {
  const router = useRouter();
  const {pid} = router.query;

  return <p>Post: {pid}</p>;
};

export default Post;
