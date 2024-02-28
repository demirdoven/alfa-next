import Link from "next/link"

const StickyBar = () => {
  return (
    <div className="sticky-bar bg-alfa-red-1 text-white text-center text-xs font-normal py-2">
        <Link href={'/'} className="block px-10">10% discount on all-weather tires from Syron and Berlin Tires / Only for a short time!</Link>
    </div>
  )
}

export default StickyBar