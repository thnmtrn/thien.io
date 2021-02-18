import Container from '@/components/Container';
import MovieCard from '@/components/MovieCard';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export default function Movies({ movies }) {
  return (
    <Container
      title="Movies – Thien Tran"
      description="A collection of my favorite movies"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Movies
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          These are a collection of movies
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.slug}
              title={movie.title}
              slug={movie.slug}
              logo={movie.logo}
              description={movie.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const movies = await getAllFilesFrontMatter('movies');

  return { props: { movies } };
}
