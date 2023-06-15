import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 px-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold">
          <Link href="/">My Blog</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link className="text-white hover:text-gray-300" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300" href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
