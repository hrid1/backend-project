import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link to="/">BookShop</Link>
          </div>
          <div className="space-x-4">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/books" className="text-white hover:text-gray-300">Books</Link>
            <Link to="/addbook" className="text-white hover:text-gray-300">Upload Book</Link>
          </div>
        </div>
      </nav>
    );
};

export default Header;