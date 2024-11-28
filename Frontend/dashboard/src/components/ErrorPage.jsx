import React, { useState } from "react";
// import { useRouteError, Link, useNavigate } from "react-router-dom";
import { useRouteError, Link } from "react-router-dom";

// 403, 404, 500 등 다양한 에러를 처리할 컴포넌트
function ErrorPage() {
  const error = useRouteError(); // 현재 에러 객체 가져오기
  // const navigate = useNavigate();
  const errorStatus = error?.status || 500; // 에러 상태 (기본 500)
  const errorMessage = error?.statusText || "Internal Server Error"; // 에러 메시지

  const [path, setPath] = useState(''); // 경로를 입력받을 상태 변수

  // 경로 입력을 처리하는 함수
  const handleChange = (event) => {
    setPath(event.target.value);
  };

  // 엔터 키를 눌렀을 때 경로 이동 처리
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && path) {
      // 엔터 키가 눌렸을 때 경로로 이동
      // navigate(path); // 페이지 리로드 없이 경로 이동
      window.location.href = path; // 사용자 경험상 페이지 리로드가 발생하는 것이 필요
    }
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-16 text-center bg-white border border-gray-200 rounded-md shadow-lg">
        <h1 className="mb-4 text-5xl font-bold">ERROR - {errorStatus}</h1>
        <p className="mb-2 text-2xl text-gray-700">{errorMessage}</p>
        {errorStatus === 403 && (
          <p className="text-sm text-gray-500">접근이 거부되었습니다.</p>
        )}
        {errorStatus === 404 && (
          <p className="text-sm font-semibold text-gray-500">요청한 페이지를 찾을 수 없습니다.</p>
        )}
        {errorStatus === 500 && (
          <p className="text-sm text-gray-500">페이지가 작동하지 않습니다.</p>
        )}

        {/* 경로 입력 필드 */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Enter path (e.g., /grandsun)"
            value={path}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* 경로가 입력되면 해당 경로로 이동하는 링크 */}
        {path && (
          <Link
            to={path} // 입력된 경로로 이동
            className="inline-block px-6 py-3 mt-4 text-sm font-medium text-white transition duration-300 rounded-md bg-grandsun-navy hover:bg-grandsun-navy-hover"
          >
            Go to {path}
          </Link>
        )}
      </div>
    </div>
  );
}

export default ErrorPage