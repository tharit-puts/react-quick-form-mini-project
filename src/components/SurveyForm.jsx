import TextField from "./TextField";
import MovieList from "./MovieList";

export default function SurveyForm({
  formData,
  errors,
  movies,
  onInputChange,
  onSubmit,
  onReset,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="cinema-card relative overflow-hidden rounded-2xl p-6 sm:p-8"
      noValidate
    >
      <h2 className="font-display mb-1 text-xl font-bold text-stone-100">
        แบบสำรวจหนังที่ชอบ
      </h2>
      <p className="mb-7 text-sm text-stone-500">
        กรอกข้อมูลของคุณเพื่อร่วมแบบสำรวจ
      </p>

      <TextField
        label="ชื่อ"
        name="name"
        required
        value={formData.name}
        onChange={(value) => onInputChange("name", value)}
        error={errors.name}
        placeholder="กรุณากรอกชื่อของคุณ"
      />

      <TextField
        label="อีเมล"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={(value) => onInputChange("email", value)}
        error={errors.email}
        placeholder="example@email.com"
      />

      <MovieList
        movies={movies}
        selectedMovie={formData.selectedMovie}
        onChange={(value) => onInputChange("selectedMovie", value)}
        error={errors.selectedMovie}
      />

      <div className="mb-7">
        <label
          htmlFor="comment"
          className="mb-1.5 block text-sm font-medium text-stone-300"
        >
          ความคิดเห็นเกี่ยวกับภาพยนตร์
          <span className="ml-1.5 text-xs font-normal text-stone-600">
            (ไม่บังคับ)
          </span>
        </label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={(event) => onInputChange("comment", event.target.value)}
          rows={4}
          placeholder="แชร์ความคิดเห็นของคุณ..."
          className="cinema-input w-full resize-none rounded-xl px-4 py-3"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-cinema-primary rounded-xl px-6 py-3">
          ส่งแบบสำรวจ
        </button>
        <button
          type="button"
          onClick={onReset}
          className="btn-cinema-secondary rounded-xl px-6 py-3"
        >
          รีเซ็ต
        </button>
      </div>
    </form>
  );
}
