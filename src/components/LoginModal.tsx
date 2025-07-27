import React, { useState } from "react";

// 로그인 모달 컴포넌트의 props 정의
interface LoginModalProps {
  isOpen: boolean; // 모달이 열려있는지 여부
  onClose: () => void; // 모달을 닫는 함수
  onLoginSuccess: () => void; // 로그인 성공 시 호출될 함수
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 모달이 열려있지 않으면 아무것도 렌더링하지 않음
  if (!isOpen) return null;

  const handleLogin = () => {
    // 실제 로그인 로직 (API 호출 등)은 여기에 구현됩니다.
    // 여기서는 간단한 더미 로그인 로직을 사용합니다.
    if (username === "testuser" && password === "password") {
      setError("");
      onLoginSuccess(); // 로그인 성공 시 부모 컴포넌트의 로그인 상태 업데이트
      onClose(); // 모달 닫기
    } else {
      setError("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    // 모달 오버레이
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 font-sans">
      {/* 모달 내용 컨테이너 */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-4 transform transition-all duration-300 scale-100 opacity-100">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">
          로그인
        </h2>
        {error && (
          <p className="text-red-600 text-sm mb-4 text-center bg-red-50 p-2 rounded-lg border border-red-200">
            {error}
          </p>
        )}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              아이디
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-200"
              placeholder="아이디를 입력하세요"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-200"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <button
            onClick={handleLogin}
            className="w-full bg-brand-green text-white py-3 rounded-lg font-semibold text-base hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            로그인
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold text-base hover:bg-gray-300 transition-colors duration-200"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
