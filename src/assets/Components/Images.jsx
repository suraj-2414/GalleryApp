import Home from './Home'
import Pagination from './Pagination'


const Images = ({userdata,printData, index,value,setValue ,setIndex,get} ) => {


  
      if(userdata.length>0){
       printData= userdata.map(function(elem ){
         return  <a key={elem.id} href={elem.links.html}>
                      <div  className='md:m-1.5 m-0.5 ' >                    
                           <div   className=' card w-full overflow-hidden rounded-xl aspect-square    '>
                                <img className='h-full w-full object-cover transition-transform duration-300 hover:scale-105 ' src={elem.urls.small} alt="" />
                          </div>                         
                     </div>
                 </a>
  })
 }  
 
  return (
    
    <div className=' ' >
      {userdata.length>0 ?<Pagination  index={ index } setIndex={setIndex} get={get}   />: <Home get={get} setValue={setValue} value={value}/>}
       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ' >
                     {printData}
       </div>
       
    </div>
  )
}

export default Images