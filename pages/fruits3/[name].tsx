import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

//EXECUTION on the server
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    revalidate: 10,
    props: {
      mycont: Math.random(),
    },
  };
};

//for a [name] dynamic path, getStaticPaths is compulsory!
//this function specifies when getStaticProps should run.
//getStaticProps runs at BUILD time, not at runtime, so you need to specify which paths to build for!
//routes not specified here will yield 404!!!
export const getStaticPaths: GetStaticPaths = async (context) => {
  //here you can access db, make calls etc(node stuff)
  return {
    paths: [
      {
        params: { name: "hello" },
      },
      {
        params: { name: "world" },
      },
    ],
    //fallback false implies that the paths array is the only thing renderable!
    //A true value would imply that at runtime, if another page is requested, the server will build this new page and add it to the saved pages, so subsequent fetches would be instantaneous!
    fallback: true,
  };
};

export default function Home(props) {
  const router = useRouter();

  //we check if props are available, for pages which are not generated before during build
  if (router.isFallback) {
    return <h1>loading...</h1>;
  }
  return <h1>Dynamic content: {props.mycont}</h1>;
}
