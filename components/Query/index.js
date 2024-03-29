import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, summoner }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { summoner: summoner },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
