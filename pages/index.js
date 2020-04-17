import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = () => (
  <div>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

//API
Index.getInitialProps = async function() {
  const res = await fetch(
    "https://my-json-server.typicode.com/wrongakram/demo/products"
  );
  const data = await res.json();
  return {
    products: data
  };
};

export default Index;
