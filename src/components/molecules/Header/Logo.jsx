import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo bg-transparent">
      <Link to="/">
        <img src="/EDteam.png" alt="Logo ecommerce" style={{ width: '10em', height: 'auto' }} />
      </Link>
    </div>

  )
}

export default Logo;
