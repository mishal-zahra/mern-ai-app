import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">MERN AI App</h1>
      <div>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/dashboard" className="mr-4">
          Dashboard
        </Link>
        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
