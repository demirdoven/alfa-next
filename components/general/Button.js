import Link from "next/link"

export const Button = ({ type = 'dark', text, href, classList='', innerClassList='text-sm', setMiniCart='', onClick=( ()=>{} ) }) => {
    
    function handlerClick(){
        onClick(event)
    }

    return (

    <Link 
        className={`${classList}`} 
        href={`${href}`}
    >
        <span 
            className={` ${ type == 'light' && 'bg-white text-red-600 hover:bg-red-600 hover:text-white' } ${ type == 'dark' && 'bg-red-600 text-white hover:bg-red-700' } border border-red-600 text-red-600 text-xl font-bold py-2 px-8 rounded-md ${innerClassList}`}
            onClick={handlerClick}
        >
        {text}
        </span>
    </Link>


  )
}
