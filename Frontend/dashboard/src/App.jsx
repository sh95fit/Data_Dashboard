import './App.css'
import IkeaDashboard from './ikea/pages/IkeaDashboard'
import DataFetcher from './ikea/components/SidebarDataFetcher'

// import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/ikea",
    element:(
      <>
        <IkeaDashboard />
        <div style={{ display: 'none' }}>
          <DataFetcher />
        </div>
      </>
    ),
  },
])

// const future = {
//   // startTransition : 경우 UI 업데이트를 백그라운드로 처리하여 사용자 경험 개선
//   //라우팅 상태 변경이 백그라운드에서 비동기로 처리되어 UI 전환이 부드럽고 빠르게 이루어짐
//   v7_startTransition: true,
//   // relativeSplatPath : *와 :(동적파라미터)가 혼합된 상대 경로를 처리하는 방식
//   // * 경로가 현재 경로와 상관 엾이 상대 경로로 평가되도록 처리
//   v7_relativeSplatPath: true,
//   // fetcherPersist : fetchers의 상태가 전역적으로 유지되도록 처리
//   // fetcher의 상태가 페이지를 전환해도 유지되어, 페이지를 다시 로드하지 않고도 이전 데이터 재사용 가능
//   v7_fetcherPersist: true,
//   // normalizeFormMethod : form의 method 필드가 대소문자 구분 없이 uppercase로 정규화
//   // 모든 form 메소드 POST, GET, PUT 등이 대소문자 구분없이 uppercase로 변환되어 처리 (서버와 호환성을 높이기 위한 용도)
//   v7_normalizeFormMethod: true,
//   // partialHydration : React Router가 페이지를 처음 로딩할 때, 필요한 부분만 하이드레이션하는 방식을 사용하도록 설정
//   // 하이드레이션은 서버에서 렌더링된 HTML을 클라이언트에서 React로 다시 활성화하는 과정
//   // React가 필요한 컴포넌트만 하이드레이션하여 초기 로딩 속도를 개선, 필요한 부분만 하이드레이션하여 효율성 증가
//   v7_partialHydration: true,
//   // skipActionErrorRevalidation : action에서 에러가 발생한 경우, 해당 요청에 대해 다시 유효성 검사를 하지 않도록 처리
//   // 개발자가 직접 에러 처리 관련 조치
//   v7_skipActionErrorRevalidation: true,
// };


function App() {

  return (
    // <RouterProvider router={router} future={future} />
    <RouterProvider router={router} />


    // 기존 방식
    // <Router>
    //   <Routes>
    //     <Route
    //       path="/ikea"
    //       element={
    //         <>
    //           <IkeaDashboard />
    //           <div style={{ display: 'none' }}>
    //             <DataFetcher />
    //           </div>
    //         </>
    //       }></Route>
    //   </Routes>
    // </Router>
  )
}

export default App
