import TK_LOGO from '../assets/img/TK_logo.png'

const Header = () => {
    return (
        <header className="w-full h-full bg-tk-gray p-12 flex justify-around items-center">
            <img src={TK_LOGO} />
            <div className='pt-4 text-5xl font-bold text-nowrap'>Solar Power Generation</div>
        </header>
    )
}

export default Header