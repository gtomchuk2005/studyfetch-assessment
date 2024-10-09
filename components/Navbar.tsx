import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-8">
        <li>
          <Link href="/generate-explanation" className="text-white">
            Generate Explanation
          </Link>
        </li>
        <li>
          <Link href="/catalog" className="text-white">
            Catalog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
