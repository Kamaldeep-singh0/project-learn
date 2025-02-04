import axios from 'axios';
import { useEffect, useState } from 'react'

interface Post {
  name: string;
  age: string;
  height: string;
}
 
function Card() {

const [data1,setData1] = useState<Post| null>(null);

  useEffect(()=>{
    const fetchData = async ()=>{
    const response = await axios.get<Post>("http://localhost:3000/api/user/details")
      setData1(response.data)  ;
  }
     fetchData();
  },[])

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="w-auto h-auto p-8 rounded-lg shadow-2xl shadow-black flex flex-col items-center justify-center  bg-slate-600">
         <div>Name : {data1?.name}</div>
         <div>Height : {data1?.height}</div>
         <div>Age : {data1?.age}</div>
      </div>
    </div>
         )
}

export default Card
