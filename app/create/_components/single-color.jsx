function SingleColor({
  palette,
  onHandleInputChange,
  setSelectedOption,
  selectedOption,
}) {
  return (
    <div
      className={`flex flex-col items-center shadow-sm rounded-lg overflow-hidden border ${
        selectedOption === palette.name ? "border-zinc-800" : "border-zinc-200"
      }  hover:cursor-pointer`}
      onClick={() => {
        setSelectedOption(palette.name);
        onHandleInputChange(palette.name);
      }}
    >
      <div className="flex w-full">
        {palette.colors.map((color, i) => (
          <div
            key={i}
            className="flex-1 h-24"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Name */}
      <div className="p-3 text-center w-full bg-zinc-50">
        <p className="text-sm font-semibold text-zinc-800">{palette.name}</p>
      </div>
    </div>
  );
}
export default SingleColor;
