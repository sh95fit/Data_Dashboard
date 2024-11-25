import React from 'react'
import Sidebar from '../components/Sidebar'
import Media from '../components/Media'
// import Comment from '../components/Comment'

import { Helmet } from 'react-helmet-async';


const IkeaDashboard = () => {
  return (
    <div className="grid h-screen bg-gray-100 grid-cols-20 grid-rows-12">

      <Helmet>
        <title>IKEA</title>
        <link rel="icon" href="/favicon/ikea/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/ikea/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/ikea/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/ikea/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/ikea/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/ikea/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/ikea/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/ikea/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/ikea/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/ikea/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/ikea/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/ikea/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/ikea/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/ikea/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/ikea/manifest.json"/>
      </Helmet>


      <div className="col-span-4 row-span-12">
        <Sidebar />
      </div>
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
