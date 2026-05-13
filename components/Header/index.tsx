import Navigation from "../Navigation";
import Link from "next/link";


function Header() {

  return (
  <header className="bg-black text-white px-6 py-4">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-semibold">Art Store</h1>
        </Link>
        <Navigation />
      </nav>
    </header>
  );

}

export default Header;