import React from 'react';

const Footer = props => {
  return (
    <div className="footer">
      <div className="footer-tosLink">
        <a>서비스 이용약관</a>
        <a>개인정보처리방침</a>
        <a>수수료 정책</a>
      </div>
      <div className="footer-termsOfService">
        <span>
          리얼크라우드는 플랫폼 제공자로서 프로젝트의 당사자가 아니며, 직접적인 통신판매를 진행하지
          않습니다. 프로젝트의 완수 및 선물제공의 책임은 해당 프로젝트의 창작자에게 있으며,
          프로젝트와 관련하여 후원자와 발생하는 법적 분쟁에 대한 책임은 해당 창작자가 부담합니다.
        </span>
      </div>
      <div className="footer-infoText">
        <div>
          <span>상호명</span>
          <span>리얼크라우드</span>
        </div>
        <div>
          <span>대표이사</span>
          <span>임동완</span>
        </div>
        <div>
          <span>사업자등록번호</span>
          <span>123-45-67890</span>
        </div>
        <div>
          <span>통신판매업신고번호</span>
          <span>2020-인천연수-1234</span>
        </div>
        <div>
          <span>대표전화</span>
          <span>010-1234-5678</span>
        </div>
        <div>
          <span>주소</span>
          <span>인천광역시 연수구 송도동 1-23</span>
        </div>
        <div>
          <span>이메일</span>
          <span>support@mircrowd.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
