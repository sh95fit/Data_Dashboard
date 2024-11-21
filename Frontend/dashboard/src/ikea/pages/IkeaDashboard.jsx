import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import Media from '../components/Media'
// import Comment from '../components/Comment'

import { Helmet } from 'react-helmet';


// const IkeaFavicon = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === '/ikea') {
//       document.title = "IKEA";
//       const favicon = document.querySelector("link[rel='icon']");
//       if (favicon) {
//         favicon.href = "/favicon/ikea/favicon.ico"
//       }
//     }
//   }, [location]);

//   return null;
// }


const IkeaDashboard = () => {
  return (
    <div className="grid h-screen bg-gray-100 grid-cols-20 grid-rows-12">

      <Helmet>
        <title>Ikea</title>
        <link rel="icon" href="/favicon/ikea/favicon.ico" type="image/x-icon" />
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



