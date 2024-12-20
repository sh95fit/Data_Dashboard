import { useSelector, shallowEqual } from 'react-redux';

const Capacity = () => {
    const { facilityCapacity } = useSelector((state) => state.dayinfo_tk1, shallowEqual);

    return (
        <div className='py-7'>
            <div className='p-3 text-6xl font-bold text-center text-nowrap'>Solar power generation information</div>
            <div className='p-3 text-5xl font-medium text-center text-nowrap'>
                POWER PRODUCTION : {facilityCapacity.toLocaleString()}kW
            </div>
        </div>
    )
}

export default Capacity
