// contain topbar navbar and cart drawer
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>
        {/* Center links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          ></Link>
          Men
        </div>
      </nav>
    </>
  );
}

export default Navbar;
