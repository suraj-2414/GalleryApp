import axios from 'axios'
import { useState } from 'react'
import.meta.env.VITE_UNSPLASH_ACCESS_KEY
import Srch from './assets/Components/Srch'
import Images from './assets/Components/Images'

const App = () => {

  const [index, setIndex] = useState(1)
  const [value, setValue] = useState("")
  const [userdata, setUserData] = useState([])

  let printData 
  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
  const get =async ()=>{
        try{
           console.log(ACCESS_KEY)
                 const response = await axios.get(`https://api.unsplash.com/search/photos`,{
                               params:{
                                 query:value,
                                 page:index,
                                 per_page:28,
                               },
                               headers:{
                                Authorization:`Client-ID ${ACCESS_KEY}`
                               }
                              })
                   setUserData(response.data.results)  
                   console.log(response.data.results)  
                 
                           
          } 
          catch(error){
                      console.error("API Error: " ,error)
          }
        } 
  

  return (  
       <div className=' min-h-screen w-screen overflow-hidden px-0.5 bg-[url(https://images.unsplash.com/photo-1705097565168-fb30476501e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYnNpdGUlMjByZW5kcmluZyUyMHNrZWx0b258ZW58MHx8MHx8fDA%3D)] font-black       bg-cover   '>
            <Srch value={value } get={get} setValue={setValue}/>
            <Images printData={printData}  index={ index } setIndex={setIndex} get={get} setUserData={setUserData}   userdata={userdata} setValue={setValue} value={value} />
      </div>
     
  )
}

export default App
