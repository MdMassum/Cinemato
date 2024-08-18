import {MdHomeFilled} from 'react-icons/md'
import {PiTelevisionFill} from 'react-icons/pi'
import {BiSolidMoviePlay} from 'react-icons/bi'
import { IoSearchOutline } from "react-icons/io5";

export const nav = [
    {
        label: "Tv Shows",
        href: "tv",
        icon:<PiTelevisionFill/>

    },
    {
        label: "Movies",
        href: "movie",
        icon:<BiSolidMoviePlay/>
    }
]

export const mobileNav = [
    {
        label:"Home",
        href: '/',
        icon:<MdHomeFilled/>
    },
    ...nav,
    {
        label:"Search",
        href: '/search',
        icon: <IoSearchOutline/>
    }
]