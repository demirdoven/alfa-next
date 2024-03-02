
const Placeholder = ({catSlug}) => {

    return (
      <div className='relative'>
          
          {(() => {
              const arr = [];
              for (let i = 0; i < 5; i++) {
                  arr.push(
                      <div key={i} >
                          <div data-pid={'.'} className="w-full mb-4 pl-5 pr-7 pt-5 pb-7 overflow-hidden rounded-lg border-2 border-gray-200 bg-white hover:shadow-lg">
                              <div className="relative animate-pulse flex space-x-4 relative flex flex-row ">
                              
                                  <div className="w-3/12 relative ml-3 mr-1 lg:mx-3 mt-2 lg:mt-3 flex flex-col gap-y-2">
                                      <div className="bg-gray-200 h-20 lg:h-36 w-full rounded-lg"></div>
                                      { catSlug == 'tires' && <div className="bg-gray-200 h-10 w-full rounded-xl"></div> }
                                  </div>
                                  
                                  <div className="relative w-8/12 mt-2 lg:mt-4 px-3 lg:px-5 ">
                                      <div className="bg-gray-200 h-5 w-full mb-6 rounded-lg"></div>
                                      <div className=' w-full '>
                                          <div className="bg-gray-200 h-3 w-4/12 mb-2  rounded-lg"></div>
                                          <div className="bg-gray-200 h-3 w-4/12 mb-2  rounded-lg"></div>
                                          <div className="bg-gray-200 h-3 w-4/12 mb-2  rounded-lg"></div>
                                      </div>
                                  </div>
          
                                  <div className="w-3/12 pb-1 pr-1 flex flex-col align-center justify-end	">
                                      
                                      
                                      <span className="bg-gray-200 h-8 lg:h-10 w-full rounded-lg"></span>
          
          
          
                                  </div>
                              </div>
                          </div>
                      </div>
                  );
              }
              return arr;
          })()}
   
  
      </div>
    )
  }
  
  export default Placeholder