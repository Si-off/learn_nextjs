import SEO from "@/components/SEO";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const API_KEY = "f0a5c9f22de3535dd7207281d9ea9f5a";

export default function Home() {
  const router = useRouter();
  const [movies, setMovies] = useState();

  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/api/movies/${id}`,
        query: {
          id,
          title,
        },
      },
      `/movies/${id}`
    );
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/movies`, { cache: "no-store" });
      const { results } = await response.json();
      setMovies(results);
    })();
  }, []);

  return (
    <Temp>
      <SEO title="Home" />
      {/* {!movies && <h4>Loading...</h4>} */}
      {movies?.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`} passHref>
          <a
            key={movie.id}
            onClick={() => {
              onClick(movie.id, movie.original_title);
            }}>
            {movie.original_title}
          </a>
        </Link>
      ))}
    </Temp>
  );
}

const Temp = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 3px;
`;
