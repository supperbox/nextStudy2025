import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-4 bg-gray-600 text-white">
      <h1 className="text-xl font-bold">Fantastic Site</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              主页
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              关于
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
