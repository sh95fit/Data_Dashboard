import Comprehensive from './Comprehensive';
import Individual from './Individual';


const DataDisplay = () => {

    // 페이지 자동 전환
    // - useEffect 에서 setInterval 을 초단위로 실행되게 함.
    // - 30초 주기일 경우 time 에서 초단위를 추출해서 30 으로 나눴을때 몫에 따른 페이지 전환
    // - 1분 단위일 경우 timd 에서 분단위를 추출해서 2로 나누었을때 나머지에 따른 페이지 전환
    return (
        <div className='flex justify-center gap-4 p-5'>
            <Comprehensive />
            <Individual />
        </div>
    )
}

export default DataDisplay
