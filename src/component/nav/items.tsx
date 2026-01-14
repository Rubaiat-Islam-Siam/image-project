import {FC} from 'react'
import Link from 'next/link'

type Tprops = {label: string, url:string}
const Item: FC<Tprops> = ({url,label}) => {
  return (
   <Link
        href={url}
        className="
    inline-block relative z-20 overflow-hidden
    p-2 text-lg text-slate-800 uppercase tracking-wide
    hover:text-white
    transition-all duration-200
    after:content-['']
    after:absolute after:left-0 after:bottom-0
    after:w-full after:h-px
    after:bg-slate-700
    after:-z-10
    after:transition-all after:duration-200
    hover:after:h-9
    active:translate-y-0.5
    
  "
      >
        {label}
      </Link>
  )
}

export default Item;
