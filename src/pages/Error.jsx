import React from 'react';
import { Link } from 'react-router-dom';

class Error extends React.Component {
  render() {
    return (
      <div className="error">
        <div className="error-text">
          <h1>죄송합니다</h1>
          <p>요청하신 페이지를 찾을 수 없습니다.</p>
        </div>
        <div className="error-button">
          <div>
            <Link to="/">
              <button>메인으로 돌아가기</button>
            </Link>
          </div>
          <div>
            <button
              onClick={() => {
                window.open('http://pf.kakao.com/_uxjxjuxb/chat', '_blank');
              }}
            >
              카카오톡 문의하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Error;
