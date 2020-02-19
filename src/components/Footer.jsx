import React from 'react';

import { FOOTER_INFO_LINK, FOOTER_TOS_LINK } from '@/global/globalVar.ts';

const Footer = props => {
  return (
    <div className="footer">
      <div className="footer-tosLink">
        {FOOTER_TOS_LINK.map((Data, i) => {
          return (
            <a key={i} href={Data.href} title={Data.title} target="_blank">
              {Data.title}
            </a>
          );
        })}
      </div>
      <div className="footer-termsOfService">
        <span>
          리얼크라우드는 플랫폼 제공자로서 프로젝트의 당사자가 아니며, 직접적인
          통신판매를 진행하지 않습니다. 프로젝트의 완수 및 선물제공의 책임은
          해당 프로젝트의 창작자에게 있으며, 프로젝트와 관련하여 후원자와
          발생하는 법적 분쟁에 대한 책임은 해당 창작자가 부담합니다.
        </span>
      </div>
      <div className="footer-infoText">
        {FOOTER_INFO_LINK.map((Data, i) => {
          return (
            <div key={i}>
              <span>{Data.title}</span>
              <span>{Data.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
