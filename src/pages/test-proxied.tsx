import { useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  return (
    <div>
      <a href="/home">Go back home</a>

      <button
        onClick={async () => {
          try {
            const res = await fetch(
              "https://repro-nextjs-bug-redirect-post-2.vercel.app/api/hello",
              {
                method: "POST",
              }
            );
            const newData = await res.json();
            setData(newData);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        Trigger POST
      </button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Home;
