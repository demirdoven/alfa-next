import Link from "next/link"

const StickyBar = () => {
  return (
    <div className="sticky-bar bg-alfa-red-1 text-white text-center text-xs font-normal py-2">
        <Link href={'/'} className="block px-10">Bis zu 10% Rabatt auf Allwetterreifen von Syron und Berlin Tires / Nur für kurze Zeit!</Link>
    </div>
  )
}

export default StickyBar