import { useRouter } from "next/router";

//dynamic paths with optional path lengths
export default function Home() {
  const router = useRouter();
  console.log(router.query);
  return <h1>Helllo!</h1>;
}
