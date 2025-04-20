import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-lg">
              Job Board
            </Link>
            {/* Add more navigation links here if needed */}
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-indigo-100 hover:text-white transition duration-300">
              Login
            </Link>
            <Link href="/signup" className="bg-yellow-400 hover:bg-yellow-500 text-indigo-700 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition duration-300">
              Sign Up
            </Link>
            <Link href="/admin" className="text-indigo-100 hover:text-white transition duration-300">
              Admin
            </Link>
            {/* Add conditional rendering for logged-in users (e.g., logout) */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;