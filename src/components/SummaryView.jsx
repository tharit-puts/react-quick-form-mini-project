import MoviePoster from "./MoviePoster";

export default function SummaryView({ formData, selectedMovie, onStartOver }) {
  return (
    <div className="cinema-card relative overflow-hidden rounded-2xl p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-2xl">🎬</span>
        <div>
          <p className="text-xs font-medium tracking-[0.25em] text-cinema-gold uppercase">
            Premiere Ticket
          </p>
          <h2 className="font-display text-xl font-bold text-stone-100">
            สรุปข้อมูลแบบสำรวจ
          </h2>
        </div>
      </div>

      <dl className="space-y-3">
        <div className="rounded-xl border border-cinema-border bg-cinema-surface/60 p-4">
          <dt className="text-xs font-medium tracking-wider text-stone-500 uppercase">
            ชื่อ
          </dt>
          <dd className="mt-1 text-lg text-stone-100">{formData.name}</dd>
        </div>

        <div className="rounded-xl border border-cinema-border bg-cinema-surface/60 p-4">
          <dt className="text-xs font-medium tracking-wider text-stone-500 uppercase">
            อีเมล
          </dt>
          <dd className="mt-1 text-lg text-stone-100">{formData.email}</dd>
        </div>

        <div className="overflow-hidden rounded-xl border border-cinema-gold/30 bg-cinema-gold/5">
          <MoviePoster
            src={selectedMovie.poster}
            title={selectedMovie.title}
            size="lg"
          />
          <div className="p-4">
            <dt className="text-xs font-medium tracking-wider text-cinema-gold uppercase">
              ภาพยนตร์ที่เลือก
            </dt>
            <dd className="mt-1">
              <span className="font-display text-xl font-bold text-stone-100">
                {selectedMovie.title}
              </span>
              <p className="mt-1 text-sm text-stone-400">
                {selectedMovie.year} · {selectedMovie.director}
              </p>
            </dd>
          </div>
        </div>

        {formData.comment && (
          <div className="rounded-xl border border-cinema-border bg-cinema-surface/60 p-4">
            <dt className="text-xs font-medium tracking-wider text-stone-500 uppercase">
              ความคิดเห็น
            </dt>
            <dd className="mt-1 leading-relaxed text-stone-300">
              {formData.comment}
            </dd>
          </div>
        )}
      </dl>

      <button
        type="button"
        onClick={onStartOver}
        className="btn-cinema-primary mt-7 w-full rounded-xl px-6 py-3 sm:w-auto"
      >
        เริ่มทำแบบสำรวจใหม่
      </button>
    </div>
  );
}
