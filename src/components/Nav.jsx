function Nav() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-end">
        <ul className="flex space-x-6">
          <li>
            <a href="/login" className="text-white hover:text-gray-300 text-2xl">Log out</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav