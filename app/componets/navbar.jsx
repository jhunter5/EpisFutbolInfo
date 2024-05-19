export default function Navbar () {
  return (
    <nav className="fixed inset-x-0 top-0 bg-surface-container text-on-surface w-full p-4 rounded-b-lg z-20">
      <ul className="flex flex-row justify-center gap-12 text-primary">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}