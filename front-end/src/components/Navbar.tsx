import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-white text-2xl">Home</Link>
        <Link href="/login" className="text-white">Login</Link>
        <Link href="/register" className="text-white">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
