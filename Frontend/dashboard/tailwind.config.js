/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))', // 16열 그리드 설정
        '17': 'repeat(17, minmax(0, 1fr))', // 17열 그리드 설정
        '20': 'repeat(20, minmax(0, 1fr))', // 20열 그리드 설정
      },
      gridColumn: {
        'span-13': 'span 13 / span 13', // col-span-13 추가
        'span-14': 'span 14 / span 14', // col-span-14 추가
        'span-15': 'span 15 / span 15', // col-span-15 추가
        'span-16': 'span 16 / span 16', // col-span-16 추가
      },
      colors: {
        // 'ikea-yellow': '#FBD90B',
        // 'ikea-yellow': '#FFE300',
        'ikea-yellow': '#FFD600',
        'ikea-blue': '#0057AE',
        'denso-gray': 'rgb(195, 194, 188)',
        'grandsun-navy': 'rgb(34, 53, 80)',
        'grandsun-red': 'rgb(157, 41, 44)',
        'grandsun-navy-hover': 'rgb(34, 53, 180)',
      },
      fontSize: {
        '21px': '21px', // 사용자 정의 크기 (30px)
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
        // sans가 제일 기본 상속 폰트이므로 전체 폰트바꾸려면 sans재지정후 맨앞에 원하는 폰트 넣기

        hi: ["PretendardVariable", "sans-serif"],
      },
    },
  },
  plugins: [],
}

