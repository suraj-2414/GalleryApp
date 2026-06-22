const Pagination = ({index,setIndex, get }) => {



  return (
   <div className='flex justify-center  pt-10 pb-10   cursor-pointer '>
              <button onClick={()=>{
                      //  if(index>1){
                      //  setIndex(index-1)
                      //  get()
                      //  }
                        setIndex(index-1)
                      //  get()
              }}
              disabled={index===1}
               className=' md:py-1 md:px-6 md:text-xl text-md px-3 bg-amber-600 active:scale-90 disabled:cursor-not-allowed disabled:active:scale-100 disabled:opacity-50 rounded-xl'>
                ....Prev
              </button>

              <span className=' border md:py-1 md:px-6 rounded-xl md:mx-4 md:text-xl text-md px-3 mx-2 p-1' >
                 Page:{index}
              </span>

              <button onClick={()=>{
                        setIndex(prev=>prev+1)
                        // get()
              }}
               className='md:py-1 md:px-6 md:text-xl text-md px-3 bg-amber-600 active:scale-90  rounded-xl disabled:cursor-not-allowed disabled:active:scale-100 disabled:opacity-50'>
              Next....
              </button>
       </div>
  )
}

export default Pagination