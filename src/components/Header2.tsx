import Link from "next/link";

function Header2() {
  return (
    <header className="bg-white text-[#726E8D] w-full">
      {/* Navigation */}
      <nav className="flex justify-center items-center py-4">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base">
          <li>
            <Link href="/Plant pots">Plant pots</Link>
          </li>
          <li>
            <Link href="/Ceramics">Ceramics</Link>
          </li>
          <li>
            <Link href="/Tables">Tables</Link>
          </li>
          <li>
            <Link href="/Chairs">Chairs</Link>
          </li>
          <li>
            <Link href="/Crockery">Crockery</Link>
          </li>
          <li>
            <Link href="/Tableware">Tableware</Link>
          </li>
          <li>
            <Link href="/Cutlery">Cutlery</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header2;
