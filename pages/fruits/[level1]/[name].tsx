import { useRouter } from "next/router";

export default function Home() {
  //useRouter doesnt always work as expected, use getStaticprops
  const router = useRouter();
  console.log(router);
  //we get path values from router.query

  function takeMeHome() {
    //adds a new route to stack
    //router.push('/');

    //replaces route, back will have nothing!
    router.replace("/");
    //use links wherever possible!
  }

  return (
    <h1>
      Fruits nested level 2! hello from {router.query.level1} and{" "}
      {router.query.name}
      <button onClick={takeMeHome}>Home</button>
    </h1>
  );
}
