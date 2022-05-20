import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>EST 320 - Blockchain  </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Hash" >Hash</Link>
        <Link to="/POW">Proof of Work</Link>
        <Link to="/Blocks">Blocks-chain</Link>
      </div>
      <div className="title">
        Final Presentation
      </div>

    </nav>
  );
}
 
export default Navbar;