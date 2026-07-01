const sizeClasses = {
  sm: "h-[72px] w-[48px]",
  lg: "h-64 w-full overflow-hidden sm:h-80",
};

export default function MoviePoster({ src, title, size = "sm", className = "" }) {
  if (size === "lg") {
    return (
      <div className={`${sizeClasses.lg} ${className}`}>
        <img
          src={src}
          alt={`${title} poster`}
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${title} poster`}
      className={`shrink-0 rounded-sm object-cover shadow-md ${sizeClasses[size]} ${className}`}
    />
  );
}
