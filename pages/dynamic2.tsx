import { GetServerSideProps } from "next";

//Execution on server for every single request, even on prod! Kinda beats the purpose of react but its available if needed!
//always in sync with realtime data, so good for dashboards
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      mycont: Math.random(),
    },
  };
};

export default function Home(props) {
  return <h1>Dynamic content: {props.mycont}</h1>;
}
