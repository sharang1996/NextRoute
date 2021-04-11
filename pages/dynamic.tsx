import { GetStaticProps } from "next";
import path from "path";

//EXECUTION on the server
export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require("fs");

  const txt = fs.readFileSync(
    path.join(process.cwd(), "public/robots.txt"),
    "utf8"
  );

  return {
    //revalidate is for how often should the UI be rerendered, i.e check for changes
    //revalidate only works in production mode though!!
    revalidate: 10,
    props: {
      mycont: txt,
    },
  };
};

export default function Home(props) {
  return <h1>Dynamic content: {props.mycont}</h1>;
}
