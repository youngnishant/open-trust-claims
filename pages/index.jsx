import { gql, useQuery } from "@apollo/client";

const CLAIN_QUERY = gql`
  query claim {
    viewer
  }
`;

const Index = () => {
  const { data } = useQuery(CLAIN_QUERY);
  console.log(data);

  return (
    <div>
      <h1>Introduction or start page</h1>
    </div>
  );
};

export default Index;
