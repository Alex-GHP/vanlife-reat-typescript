import { Link } from "react-router-dom"
 
function Navbar() {
  return (
    <div className="flex justify-between px-5 py-8 bg-[#FFF7ED]">
        <Link to="/" className="text-3xl font-bold">#VANLIFE</Link>
        <Link to="/about" className="text-[#4D4D4D] font-semibold self-center">About</Link>
    </div>
  )
}

export default Navbar