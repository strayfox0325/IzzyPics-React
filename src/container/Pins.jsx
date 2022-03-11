  /* Imports */

import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import {Navbar, Feed, PinDetails, CreatePin, Search} from '../components'


const Pins = ({user}) => {

/* Hooks */

const [searchTerm, setsearchTerm] = useState('')

/* Render */

  return (
    <div className="px-2 md:px-5">
        <div className="bg-gray-50">
            <Navbar searchTerm={searchTerm} setsearchTerm={setsearchTerm} user={user}/>
            </div>
            <div className="h-full">
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/category/:categoryId" element={<Feed />} />
                    <Route path="/pin-details/:pinId" element={<PinDetails user={user} />} />
                    <Route path="/create-pin" element={<CreatePin user={user} />} />
                    <Route path="/search" element={<Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />} />
                </Routes>
            </div>
    </div>
  )
}

export default Pins