import { Link, useNavigate } from "react-router-dom";

function Nav({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    if (onLogout) onLogout();
    navigate("/"); 
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-end">
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 text-2xl"
              onClick={handleLogout}
            >
              Log out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;