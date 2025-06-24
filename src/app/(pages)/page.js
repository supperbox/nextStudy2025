import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="text-lg text-center max-w-2xl">首页</p>
      <Link
        className="rounded-full bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors"
        href="/about"
      >
        欢迎光临
      </Link>
    </div>
  );
}
