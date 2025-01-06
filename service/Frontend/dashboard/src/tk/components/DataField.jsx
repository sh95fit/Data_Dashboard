// eslint-disable-next-line react/prop-types
const DataField = ({ css = 'py-2', title, cssTitle = 'text-xl', value, unit, cssUnit = '' }) => {

  return (
    <div className={`flex items-center font-bold text-2xl ${css}`}>
      <div className={`w-4/12 py-3 text-center ${cssTitle}`}>{title}</div>
      <div className='w-5/12 bg-white text-3.5xl text-right text-black pe-2 py-3 rounded-lg'>{value.toLocaleString()}</div>
      <div className={`w-3/12 px-5 pt-4 text-2xl font-normal ${cssUnit}`}>{unit}</div>
    </div>
  )
}

export default DataField
