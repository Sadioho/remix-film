export type Film = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: string[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};
export async function getFilms() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=1"
  );
  const data = await response.json();
  const films: Film[] = data.results;
  return films;
}
