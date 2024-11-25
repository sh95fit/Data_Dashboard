import React from 'react'
import Sidebar from '../components/Sidebar'
import Media from '../components/Media'
// import Comment from '../components/Comment'

import { Helmet } from 'react-helmet-async';


const IkeaDashboard = () => {
  return (
    <div className="grid h-screen bg-gray-100 grid-cols-20 grid-rows-12">

      <Helmet>
        <title>DENSO</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/denso/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/denso/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/denso/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/denso/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/denso/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/denso/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/denso/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/denso/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/denso/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/denso/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/denso/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/denso/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/denso/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/denso/manifest.json"/>
      </Helmet>


      <div className="col-span-4 row-span-12">
        <Sidebar />
      </div>
      {/* <div className="col-span-16 row-span-10"> */}
      <div className="col-span-16 row-span-12">
        <Media />
      </div>
      {/* <div className="row-span-2 col-span-16">
        <Comment />
      </div> */}
    </div>
  )
}

export default IkeaDashboard



