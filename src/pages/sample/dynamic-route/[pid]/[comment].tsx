import {useRouter} from "next/router";

// you can access with dynamic route by it
// /sample/dynamic-route/abc/12313?foo=bar
const Post = () => {
  const router = useRouter();
  const {pid, comment} = router.query;

  return (
    <p>
      Post: {pid} : comment: {comment}
    </p>
  );
};

export default Post;
