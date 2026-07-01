import RadioGroup from "./RadioGroup";
import MoviePoster from "./MoviePoster";

export default function MovieList({ movies, selectedMovie, onChange, error }) {
  const options = movies.map((movie) => ({
    value: movie.title,
    movie,
  }));

  return (
    <RadioGroup
      name="selectedMovie"
      label="เลือกหนังที่คุณชอบ"
      required
      options={options}
      selectedValue={selectedMovie}
      onChange={onChange}
      error={error}
      renderOption={(option, isSelected) => (
        <div className="flex flex-1 items-center gap-3">
          <MoviePoster
            src={option.movie.poster}
            title={option.movie.title}
            className={isSelected ? "ring-2 ring-cinema-gold/60" : ""}
          />
          <div>
            <span
              className={`font-medium ${
                isSelected ? "text-cinema-gold-light" : "text-stone-100"
              }`}
            >
              {option.movie.title}
            </span>
            <p className="text-sm text-stone-500">
              {option.movie.year} · {option.movie.director}
            </p>
          </div>
        </div>
      )}
    />
  );
}
