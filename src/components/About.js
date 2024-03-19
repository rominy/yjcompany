import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MenuBanner from '../components/MenuBanner';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import about from '../assets/images/aboutimg.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPageTitle, selectCurrentPageTitle, selectPageURL } from '../features/pageSlice';

const AboutContainer = styled.section`
  margin-bottom: 80px;

  .inner {
    max-width: 1200px;
    margin: 60px auto 80px auto;

    .category {
      display: flex;
      justify-content: center;
      
      .active {
        color: #fff;
        background-color: #555;
      }

      li {
        cursor: pointer;
        padding: 10px 34px;
        border: 1px solid #ccc;
        border-right: 0;
        font-size: 15px;
        font-weight: 500;

        /* 설명* 액티브된 버튼 제외 나머지 버튼에 대한 hover 이벤트 처리,
        class명이 active를 가지고 있는 엘리먼트를 제외한 나머지 요소에 대한 hover */
        &:hover:not(.active) {
          background-color: rgba(55, 55, 55, 0.4);
          color: #fff;
        }

        &:last-child {
          border-right: 1px solid #ccc;
        }

      }
    }
  }
`;

function About(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const pageURL = useSelector(selectPageURL);
  const title = useSelector(selectCurrentPageTitle);
  const { pathname } = location;

  // 설명* 새로고침 시 초기화 방지
  const extractedKey = Object.keys(pageURL).find(key => pageURL[key] === pathname);
  
  const [isActive, setIsActive] = useState('');
  
  // 설명* 헤더 메뉴 클릭 시 title값이 반영되지 않아 카테고리탭 active class가 추가되지 않음 
  // title 값이 바뀔때마다 isActive 상태를 변환
  useEffect(() => {
    setIsActive(title || extractedKey);
  }, [title])


  const handleTabClick = (e, page) => {
    dispatch(getCurrentPageTitle(page));
    setIsActive(page);
    navigate(`${pageURL[page]}`);
  };

  return (
    <>
    <AboutContainer>
      <MenuBanner imgURL='https://raw.githubusercontent.com/rominy/yjcompany/main/src/assets/images/aboutimg.jpg' title={isActive} />
      <div className='inner'>
        <ul className='category'>
          {/* 수정* active 했을때 색상 변경 다른 방법 알아보기 혹은 map으로 */}
          <li className={isActive === '회사소개' ? 'active' : ''} onClick={(e) => handleTabClick(e, '회사소개')}>회사소개</li>
          <li className={isActive === '멤버' ? 'active' : ''} onClick={(e) => handleTabClick(e, '멤버')}>멤버</li>
          <li className={isActive === '사업현황' ? 'active' : ''} onClick={(e) => handleTabClick(e, '사업현황')}>사업현황</li>
          <li className={isActive === '오시는길' ? 'active' : ''} onClick={(e) => handleTabClick(e, '오시는길')}>오시는길</li>
        </ul>
      </div>
      <Outlet />
    </AboutContainer>
    </>
  );
}

export default About;