import { Search ,X  } from 'lucide-react';

const Srch = ({value,setValue,get}) => {
  return (
    <div className=' srcho flex justify-between items-center pt-4 md:pt-7 md:pb-2 pb-0.5 px-4 md:px-10'>
        <div className='pb-2 '> 
          <div  className='logo  lg:h-18 lg:w-16 md:h-14 md:w-12 h-10 w-8 bg-[url(data:image/jpeg;base64,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)] 
              bg-cover rotate-y-180 rounded-b-4xl '>
         </div>
        </div>
          
        <h1 className=' appName font-extrabold   font-sans text-lg md:text-3xl lg:pr-25 lg:text-4xl'><span className='text-green-800'>pi</span>xelScout</h1>
              
        <div className=' srch-box relative flex items-center justify-center   '>   
          <button onClick={()=>{
                     get()                      
                }}
                className=' active:scale-95 '
                ><Search color="#ebe5e5" className='  bg-green-800  lg:h-12 lg:w-12 lg:px-3  md:h-10 md:w-10 md:px-2 h-6 w-6  px-1  rounded-full hover:scale-105' strokeWidth={3} />
            </button>     
            <input onChange={(e)=>{
              setValue(e.target.value)
            }}
            value={value}
            className=' input lg:w-70 lg:px-4 lg:py-2 lg:text-xl md:px-3 md:py-1 md:text-lg md:w-46 px-2 py-0.5 w-32 text-sm  border-2 md:m-3 m-1.5 font-medium  capitalize rounded-lg outline-none '
            type="text" placeholder='Search Image..' />  
            <button onClick={()=>{
              setValue('')
            }} className=' absolute md:right-5 right-2 active:text-red-900  '>
               <X className=' md:h-6  h-4 '
                strokeWidth={2} />   
            </button>   

            
        </div>
    </div>
  )
}

export default Srch
