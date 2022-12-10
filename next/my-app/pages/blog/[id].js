import { useRouter } from 'next/router'


export default ()=>{

    const router=useRouter()
    return <h1>{router.query.id}</h1>
    //http://localhost:3000/blog/test
    //test
}