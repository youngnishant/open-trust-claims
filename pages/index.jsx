import { useEffect } from "react";
import compose from "../utils/composedb.client";

const Index = () => {
  const test = async () => {
    const res = await compose.executeQuery(`
    query {
     viewer {
        id
      }
    }
`);
    console.log(res);
  };
  useEffect(() => {
    test();
  }, []);
  return (
    <div>
      <h1>Introduction or start page</h1>
    </div>
  );
};

export default Index;
