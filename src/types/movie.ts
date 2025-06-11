export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface MovieCardProps {
  data: Movie;
}

export interface MovieApiResponse {
  Search?: Movie[];
  totalResults?: string;
  Response?: string;
  Error?: string;
}