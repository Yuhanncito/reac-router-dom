import {Button} from 'react-bootstrap'
import { useUserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
function Home() {

  const{user,setUser} = useUserContext();

  const navigate = useNavigate();

  const handleClickLogin = () =>{
    setUser({name:"Gerardo Olivares"});
  }
  return(
    <div>
      <h1>home</h1>
      {!user && (
        <Button onClick={handleClickLogin}>Login</Button>
      )
      }
    </div>
  )
}

export default Home