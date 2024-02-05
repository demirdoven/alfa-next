import Link from "next/link";
import { BiSolidPhone, BiSolidEnvelope } from "react-icons/bi";
import { FaTruckFast } from "react-icons/fa6";
import { RiArrowTurnBackFill } from "react-icons/ri";

const TopBar = ( {className} ) => {
  return (
    <div className={`${className} bg-alfa-black-1 text-white`}>
        <div className="container mx-auto lg:max-w-6xl flex justify-between py-2">
            <div className="flex gap-x-6 items-center ">
                <Link href="" className="flex gap-x-2  items-center text-[0.8em]"><BiSolidPhone size="1.6em"/> 06221-40554</Link>
                <Link href="" className="flex gap-x-2  items-center text-[0.8em]"><BiSolidEnvelope size="1.5em" /> service@alfatires.com</Link>
            </div>
            <div className="flex gap-x-6 items-center ">
                <Link href="" className="flex gap-x-2 items-center text-[0.8em]"><FaTruckFast size="1.5em" /> Kostenloser Versand innerhalb Deutschlands *</Link>
                <Link href="" className="flex gap-x-2 items-center text-[0.8em]"><RiArrowTurnBackFill size="1.5em" /> 30 Tage Widerrufsrecht</Link>
            </div>
        </div>
    </div>
  )
}

export default TopBar