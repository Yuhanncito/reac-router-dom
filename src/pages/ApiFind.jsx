import {Link, useLoaderData} from 'react-router-dom'
export default function ApiFind() {
    const {post} = useLoaderData();
  return (
    <div className='container'>
        <div className="card">
            <h1>{post._id}</h1>
            <Link to="/" className='btn btn-primary'>Home</Link>
        </div>
    </div>
  )
}

export const FindData = async ({params}) => {
    try{
        const res = await fetch(`https://api-rainbow.vercel.app/api/products/${params.id}`)
        const post = await res.json()
        return {post}
    
    }catch(err){
        console.log(err)
    }
}
 