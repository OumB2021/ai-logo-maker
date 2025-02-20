import Link from "next/link";

function Header() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-6xl font-bold">Ai Logo Maker</h1>
      <p className="text-base text-zinc-500 max-w-2xl text-center">
        Start your new venture on the right foot with{" "}
        <strong className="text-purple-500">LogoPilot</strong> powered by{" "}
        <Link href="https://gemini.google.com/app">
          <strong className="text-blue-500 hover:text-blue-700">Gemini</strong>.
        </Link>{" "}
        Use the Ai logo maker to craft a logo design that{" "}
        <strong>perfectly</strong> captures the essence of your brand.
      </p>
    </div>
  );
}
export default Header;
