import { Link, NavLink, useNavigate} from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import {Button} from 'react-bootstrap'

export default function Nav() {
  const {user,setUser} = useUserContext();
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <NavLink to="/" className="btn btn-outline-primary">home</NavLink>
            <NavLink to="/about" className="btn btn-outline-primary">about</NavLink>
            {user && (
              <>
                <NavLink to="/apiGet" className="btn btn-outline-primary">nada</NavLink>
                <Button onClick={()=>{
                  setUser(null)
                  navigate("/")
                }}>LogOut</Button>
              </>
                
            )

            }
        </div>
    </nav>
  )
}
