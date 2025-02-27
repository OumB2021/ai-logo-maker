function HeaderDesc({ title, description }) {
  return (
    <div className="flex flex-col items-center md:items-start w-full gap-2 md:gap-1">
      <h1 className="text-3xl md:text-4xl md:text-left text-center font-bold text-zinc-800">
        {title}
      </h1>
      <p className="text-base md:text-lg text-zinc-500 text-center">
        {description}
      </p>
    </div>
  );
}
export default HeaderDesc;
