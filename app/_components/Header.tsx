import Link from "next/link";

export const Header = () => (
  <header className="w-full sticky top-0 p-4 bg-gray-800">
    <Link href={'/'}>
      <h1 className="text-xl text-white font-bold">STULOG</h1>
    </Link>
  </header>
)