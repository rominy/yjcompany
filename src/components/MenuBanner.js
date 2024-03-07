import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCurrentPageTitle, selectPageURL } from '../features/pageSlice';
import { useLocation } from 'react-router-dom';

const MenuBannerContainer = styled.div`
  position: relative;
  height: 320px;
  background-image: url(${props => props.$img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .title-box {
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    text-align: center;

    p {
      /* 설명* width값을 텍스트 길이만큼 지정하기 위해 inline-block */
      display: inline-block;
      color: #fff;
      font-size: 30px;
      font-weight: bold;
      padding-bottom: 10px;
      border-bottom: 2px solid #fff;
    }
  }
`;

function MenuBanner({ imgURL }) {
  const pageURL = useSelector(selectPageURL);
  const title = useSelector(selectCurrentPageTitle)
  const location = useLocation();
  const { pathname } = location;

  // 수정* Redux 새로고침 초기화로 pathname값으로 키값을 추출, Redux persist로 수정 가능
  const extractedKey = Object.keys(pageURL).find(key => pageURL[key] === pathname);

  return (
    <MenuBannerContainer $img={imgURL}>
      <div className='title-box'>
        <p>{title || extractedKey}</p>
      </div>
    </MenuBannerContainer>
  );
}

export default MenuBanner;