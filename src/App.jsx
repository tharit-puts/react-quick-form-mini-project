import { useState } from "react";
import { movies } from "./constants/movies";
import { validateForm } from "./utils/validation";
import SurveyForm from "./components/SurveyForm";
import SummaryView from "./components/SummaryView";

const initialFormData = {
  name: "",
  email: "",
  selectedMovie: "",
  comment: "",
};

export default function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  const handleStartOver = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
  };

  const selectedMovie = movies.find(
    (movie) => movie.title === formData.selectedMovie,
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-cinema-dark">
      <div className="cinema-spotlight pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-amber-500/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-red-900/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-amber-600/8 blur-3xl" />
      <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative mx-auto max-w-2xl px-4 py-10 sm:py-14">
        <header className="mb-8 text-center">
          <h1 className="font-display text-3xl font-bold text-stone-100 sm:text-4xl">
            Movie Survey
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            เลือกหนังเรื่องโปรดของคุณ แล้วแชร์ความคิดเห็น
          </p>
        </header>

        {isSubmitted && selectedMovie ? (
          <SummaryView
            formData={formData}
            selectedMovie={selectedMovie}
            onStartOver={handleStartOver}
          />
        ) : (
          <SurveyForm
            formData={formData}
            errors={errors}
            movies={movies}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
}
