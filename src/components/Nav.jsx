import {Link} from 'react-router';
function Nav({ onLogout }) {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-end">
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={onLogout}
              className="text-black hover:text-gray-300 text-2xl bg-transparent border-none"
            >
              <Link herf="/login">Log out</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
  
}
export default Nav;