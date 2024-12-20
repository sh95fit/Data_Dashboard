import { Helmet } from 'react-helmet-async';

import Header from '../components/Header';
import DayInfo from '../components/DayInfo';
import Media from '../components/Media'
import Capacity from '../components/Capacity';
import Footer from '../components/Footer';
import DataDisplay from '../components/DataDisplay';


const TkDashboard = () => {
  return (
    <div
    // className="grid h-screen bg-gray-100 grid-cols-20 grid-rows-12"
    >

      <Helmet>
        <title>TK Corporation</title>
        <link rel="icon" href="/favicon/tk/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/tk/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/tk/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/tk/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/tk/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/tk/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/tk/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/tk/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/tk/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/tk/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/tk/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/tk/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/tk/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/tk/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/tk/manifest.json" />
      </Helmet>

      <div className='w-full h-full'>
        <Header />
        <DayInfo />
        <Media />
        <Capacity />
        <DataDisplay />
        <Footer />
      </div>

    </div>
  )
}

export default TkDashboard



