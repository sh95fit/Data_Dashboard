import { useSelector, shallowEqual } from 'react-redux';
import DataField from './DataField';

const Comprehensive = () => {
  const { outp, todaycpg, accmcpg, totalco2 } = useSelector((state) => state.datafield_tk, shallowEqual);

  return (
    <div className='w-6/12 font-bold text-white bg-tk-comprehensive rounded-3xl px-7 py-14'>
      <div className='p-5 text-5xl text-center'>
        Comprehensive information
      </div>
      <div className='p-5'>
        <DataField title="CURRENT ENERGY" value={outp} unit="kW" />
        <DataField title="TODAY'S ENERGY" value={todaycpg} unit="kWh" />
        <DataField title="LIFETIME ENERGY" value={accmcpg} unit="MWh" />
        <DataField title="CO₂ REDUCTION" value={totalco2} unit="tCO₂eq/ MWh" cssUnit='pt-1'/>
      </div>
    </div>
  )
}

export default Comprehensive
