import { MdSunny, MdCloud, MdThunderstorm, MdFoggy, MdNightlight } from 'react-icons/md';
import { RiCloudWindyFill } from "react-icons/ri";
import { IoRainySharp } from "react-icons/io5";
import { BsFillCloudSnowFill } from "react-icons/bs";

const weatherIcons = {
  sunny: <MdSunny className="text-6xl text-yellow-400" />,
  cloudy: <MdCloud className="text-6xl text-gray-400" />,
  rainy: <IoRainySharp className="text-6xl text-gray-400" />,
  snowy: <BsFillCloudSnowFill className="text-6xl text-blue-300" />,
  thunderstorm: <MdThunderstorm className="text-6xl text-gray-400" />,
  foggy: <MdFoggy className="text-6xl text-gray-400" />,
  windy: <RiCloudWindyFill className="text-6xl text-gray-400" />,
  night: <MdNightlight className="text-6xl text-yellow-400" />,
};

export const getWeatherIcon = (weather) => {
  return weatherIcons[weather] || weatherIcons.sunny; // 기본 값으로 sunny 아이콘 반환
};