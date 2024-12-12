import { useSelector, shallowEqual } from 'react-redux';
import DataField from './DataField';

const Individual = () => {
    const { pwrcpg } = useSelector((state) => state.datafield_tk, shallowEqual);
    // console.log("PWRCPG : ", pwrcpg);

    return (
        <div className='w-6/12 bg-tk-individual text-tk-comprehensive rounded-3xl px-7 py-14 font-bold'>
            <div className='text-5xl text-center pt-5 pb-0'>
                Individual information
                <div className='font-bold text-3xl text-center'>(Today)</div>
            </div>

            <div className=''>
                <DataField css='py-3' title="No. 1" cssTitle='text-4xl text-black font-bold'
                    value={pwrcpg[0]} unit="kWh" cssUnit='text-black' />
                <DataField css='py-3' title="No. 2" cssTitle='text-4xl text-black font-bold'
                    value={pwrcpg[1]} unit="kWh" cssUnit='text-black' />
                <DataField css='py-3' title="No. 3" cssTitle='text-4xl text-black font-bold'
                    value={pwrcpg[2]} unit="kWh" cssUnit='text-black' />
                <DataField css='py-3' title="No. 4" cssTitle='text-4xl text-black font-bold'
                    value={pwrcpg[3]} unit="kWh" cssUnit='text-black' />
            </div>
        </div>
    )
}

export default Individual
