import Link from "next/link";

// This is custom 404 page, you can remove the folder name to using it
// Or using the common _error.tsx page
const FourOhFour = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
};

export default FourOhFour;
