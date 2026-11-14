const sizes = {
  narrow: "w-[min(100%-2rem,860px)]",
  normal: "w-[min(100%-2rem,1152px)]",
  wide: "w-[min(100%-2rem,1280px)]",
};

export default function Container({ children, className = "", size = "narrow" }) {
  return (
    <div className={`mx-auto ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}