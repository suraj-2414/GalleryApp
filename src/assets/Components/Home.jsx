import { Download,Sparkles,LibraryBig  } from 'lucide-react';
const Home = ({get,setValue,value}) => {
  return (
    <div className='h-94 w-full' >
              <div className=' Top lg:h-full h-82 w-full  md:px-8 px-5 pt-8 flex  gap-3 '>
                     <div className='top-1-PART   lg:h-82 lg:p-7 md:h-78  md:p-4   w-1/2 '>
                          <div className=' lg:text-5xl md:text-4xl text-2xl font-semibold text-zinc-800'>
                              <span><span className='text-green-800'>F</span>ind.</span>
                              <span><span className='text-green-800'>C</span>lick.</span>
                              <span><span className='text-green-800'>E</span>xplore.</span>
                          </div>
                         <div className=' pt-1 font-normal text-zinc-600'>
                              <p className='  lg:text-lg text-sm lg:leading-5 leading-4'>PixelScout is a clean and modern platform to discover and download high-quality images for free. It helps creators, designers, and developers find inspiring visuals quickly through simple search and curated collections.</p>
                         </div>
                         <div className='font-medium flex lg:pt-12 lg:gap-5 lg:pl-18 md:pt-14 md:gap-3 md:pl-2  pt-8 gap-1   '> 
                               <button onMouseEnter={()=>{
                                    setValue("Mountain")
                                   // setTimeout(() => {
                                   //      get()
                                   // }, 2000);


                               }}   className=' border  lg:px-4 lg:py-2 lg:text-lg lg:rounded-2xl 
                               md:px-3 py-1 md:text-md  md:rounded-lg px-1.5 text-sm rounded-lg      bg-zinc-300 active:scale-90 hover:bg-green-800'>Mountain</button>
                               <button onClick={()=>{
                                      setValue("Road")
                                   //  get()
                               }}  className=' border lg:px-4 lg:py-2 lg:text-lg lg:rounded-2xl  md:px-3 py-1 md:text-md  md:rounded-lg px-1.5 text-sm rounded-lg   bg-zinc-300 active:scale-90 hover:bg-green-800'>Road</button>
                               <button onClick={()=>{
                                      setValue("Flowers")
                                   //  get()
                               }}  className=' border lg:px-4 lg:py-2 lg:text-lg lg:rounded-2xl  md:px-3 md:py-1 md:text-md  md:rounded-lg px-1.5 text-sm rounded-lg   bg-zinc-300 active:scale-90 hover:bg-green-800'>Flowers</button>
                               <button onClick={()=>{
                                      setValue("Moon")
                                   //  get()
                               }}  className=' border lg:px-4 lg:py-2 lg:text-lg lg:rounded-2xl  md:px-3 md:py-1 md:text-md  md:rounded-lg px-1.5 text-sm rounded-lg    bg-zinc-300 active:scale-90 hover:bg-green-800'>Moon</button>
                               <button onClick={()=>{
                                      setValue("Cars")
                                   //  get()
                               }}  className=' border  lg:px-4 lg:py-2 lg:text-lg lg:rounded-2xl  md:px-3 md:py-1 md:text-md  md:rounded-lg px-1.5 text-sm rounded-lg    bg-zinc-300 active:scale-90 hover:bg-green-800'>Cars</button>
             
                         </div>
                     </div>       
                     <div className='top-2-PART h-80 md:pt-4 pt-7.5 lg:pl-30 md:pl-16  w-1/2'>
                         <div className=' lg:w-80 lg:h-full md:w-60 md:h-60 w-40 h-40 bg-contain rounded-full overflow-hidden  rotate-y-180 bg-[url(https://plus.unsplash.com/premium_vector-1682301020694-f50022de89e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluZHxlbnwwfHwwfHx8MA%3D%3D)]  '> </div>
                     </div>
              </div>
              <div className=' footer  h-18 w-full flex justify-center items-center   md:gap-2 px-3 md:text-lg text-xs md:font-semibold font-medium          text-green-800 text-nowrap bg-white   cursor-pointer'>
                    <Download  />
                    <div className='md:pr-8 pr-3 hover:underline no-'> Free Downloads</div>
                    <Sparkles strokeWidth={1.25} />
                    <div className='md:pr-8  pr-3 hover:underline'> High Quality</div>
                    <LibraryBig strokeWidth={1.25} />
                    <div className='md:pr-8 pr-3 hover:underline'> Curated Collection</div>              
              </div>
    </div>
  )
}

export default Home