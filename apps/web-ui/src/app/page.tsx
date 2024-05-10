"use client";
import { useQuery, gql } from "@urql/next";

const MyQuery = gql`
  query {
    ping
  }
`;

export default function Home() {
  const [result, reexecuteQuery] = useQuery({ query: MyQuery });

  const onButtonClick = () => {
    reexecuteQuery({ requestPolicy: 'network-only' });
  }

  return (
    <div className="py-8">

      <div className="w-full max-w-4xl mx-auto font-mono text-sm px-4 py-4">
        <div className="mb-4">
          <p>{result.data?.ping}</p>
        </div>
        <button onClick={onButtonClick} type="button" className="w-full border border-gray-400 rounded-md py-2 px-4">Refresh</button>
      </div>

    </div>
  );
}
