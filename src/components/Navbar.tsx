import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-background bg-opacity-80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold font-mono text-accent hover:text-white transition-colors">
          AmalShadinA
        </Link>
        <div className="hidden md:flex space-x-6 items-center text-primary">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <Link to="/certificates" className="hover:text-accent transition-colors">Certificates</Link>
          <Link to="/resume" className="border border-accent text-accent px-4 py-2 rounded hover:bg-accent hover:bg-opacity-10 transition-all">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;