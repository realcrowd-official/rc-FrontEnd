import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import HABContext from '@/context/headerAndBottom';

const Setting = () => {
  const history = useHistory();
  const HABCONTEXT = useContext(HABContext);

  useEffect(() => {
    HABCONTEXT.action.setBottomType('false');
    HABCONTEXT.action.setHeaderType('back');
    HABCONTEXT.action.setNotiType('none');
  }, []);

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('oid');
    history.replace('/');
  };

  const menuJson = [
    {
      title: '내 정보',
      subTitle: [
        { title: '프로필 수정', link: '/profileEdit' },
        {
          title: '배송지 관리',
          link: '/selectop/addr',
        },
        {
          title: '결제수단 관리',
        },
      ],
    },
    {
      title: '문의ㆍ서비스',
      subTitle: [
        { title: '카카오톡 문의하기', link: 'editProfile' },
        { title: '메이커 전환신청' },
        {
          title: '미르 공유하기',
        },
        {
          title: '공지사항ㆍ이벤트',
        },
        {
          title: '미르 약관보기',
        },
      ],
    },
    {
      title: '계정 설정',
      subTitle: [{ title: '로그아웃', link: 'logout' }, { title: '회원탈퇴' }],
    },
  ];
  return (
    <div className="home_body">
      {menuJson.map((Data) => {
        return (
          <section className="section s_section">
            <p>{Data.title}</p>
            <div>
              {Data.subTitle.map((Data) => {
                return (
                  <h5
                    onClick={() => {
                      console.log(Data.state);
                      Data.link === 'logout'
                        ? logOut()
                        : history.push({
                            pathname: `${Data.link}`,
                          });
                    }}
                  >
                    {Data.title}
                  </h5>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Setting;
