import React, { Component, ErrorInfo } from 'react';

// 상태 타입 정의
interface ErrorBoundaryState {
  hasError: boolean;
}

// 속성 타입 정의
interface ErrorBoundaryProps {
  children: React.ReactNode; // ErrorBoundary 안에 들어갈 컴포넌트 자식 요소
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false }; // 초기 상태 설정
  }

  // 오류가 발생했을 때 상태 업데이트
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true }; 
  }

  // 에러 캐치 및 로깅
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    // 오류 발생 시 사용자에게 대체 UI 제공
    if (this.state.hasError) {
      return (
        <h1 style={{ color: 'white' }}>오류남 ㅎ</h1>
      );
    }

    // 오류가 없을 때, 자식 컴포넌트를 렌더링
    return this.props.children; 
  }
}

export default ErrorBoundary;