'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from "framer-motion";

const SchnellAndEinfach = () => {
  return (
   <>
     <AnimatePresence>
			
        <div className="w-full bg-alfa-gray-1 py-7 lg:py-12 px-4 lg:px-0 mb-2">
          <div className=" container mx-auto lg:max-w-6xl">

              <motion.div
              className="flex flex-col lg:flex-row items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.50 }}
              >

                <div className="w-full lg:w-1/2">
                    <h1 className="text-2xl font-medium">Alfa Tires <br />Schnell & Einfach</h1>
                    <p className="mt-2 text-sm font-light">Alfatires bietet eine große Auswahl an Qualitäts- und Premium Markenreifen, Felgen und Kompletträdern. Der Reifen- und Felgenexperte legt dabei höchste Priorität auf Qualität und Service und findet garantiert das passende Produkt für dich.</p>
                </div>
                <div className="w-full lg:w-1/2">
                  <ul className="w-full flex flex-col lg:flex-row justify-between items-start gap-2">
                    <li className="w-full lg:w-1/3 flex flex-row lg:flex-col items-center justify-start lg:justify-center lg:text-center gap-y-4">
                      <Image src={'/home-sections/shipping-icon-red.webp'} alt="dsa" width="80" height="80" />
                      <p className="px-4">Kostenloser Versand innerhalb DE</p>
                    </li>
                    <li className="w-full lg:w-1/3 flex flex-row lg:flex-col items-center justify-start lg:justify-center lg:text-center gap-y-4">
                      <Image src={'/home-sections/return-icon-red.webp'} alt="dsa" width="80" height="80" />
                      <p className="px-4">30 Tage Widerrufsrecht</p>
                    </li>
                    <li className="w-full lg:w-1/3 flex flex-row lg:flex-col items-center justify-start lg:justify-center lg:text-center gap-y-4">
                      <Image src={'/home-sections/call-center-icon-red.webp'} alt="dsa" width="80" height="80" />
                      <p className="px-4">Service-Hotline Mit Reifenexperten</p>
                    </li>
                  </ul>
                </div>
              </motion.div>
          </div>
        </div>
		</AnimatePresence>
    </>
  )
   
}
export default SchnellAndEinfach