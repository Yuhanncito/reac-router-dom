import {Link, Navigate, useLoaderData} from 'react-router-dom'
import { useUserContext } from '../context/UserContext';
export default function ApiGet() {
  const {get} = useLoaderData();

  const user = useUserContext();
  if(!user){
    <Navigate to="/" />
  }

  console.log(get)

  return (
    <div className="container">
      {
        get.length > 0? (
          get.map((data)=>(
            <div className='card'>
              <Link to={`/apiGet/${data._id}`}>{data._id}</Link>
            </div>
          ))
        ):(
          <p>Sin datos</p>
        )
      }
    </div>
  )
}

export const GetData = async () =>{
  try{
    const res = await fetch("https://api-rainbow.vercel.app/api/products")
    const get = await res.json()

    return {get}

  }catch(err){
    console.log(err)
  }
}
