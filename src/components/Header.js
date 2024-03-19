import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoWhite from '../assets/images/logo_white.png';
import logoBlack from '../assets/images/logo_black.png';
import { RiGlobalLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPageTitle, selectPageURL } from '../features/pageSlice';

const HeaderContainer = styled.header`
  /* 설명* Member 컴포넌트에서 모달창 클릭 시 스크롤이 사라지는데 너비 지정을 
  안 하니 스크롤 만큼 요소가 움직여 너비를 지정함 */
  width: 100vw;
  height: ${props => props.$hover ? '220px' : '82px'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  border-bottom: ${props => props.$reverse ? 'none' : '1px solid #ccc'};
  overflow: hidden;
  background-color: ${props => props.$hover && props.$reverse ? 'rgba(0, 0, 0, 0.5)' : !props.$reverse && '#fff'};
  transition: ${props => props.$transition ? 'all 0.2s ease-out' : ''};

  nav {
    max-width: 1200px;
    height: 82px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .menu-box {

      ul {
        height: 100%;
        display: flex;
      }

      li:not(.logo) {
        padding-left: 40px;
      }

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 40px;
        font-weight: bold;
        font-size: 17px;
        color: ${props => props.$reverse ? '#fff' : '#000'};
        
        span {
          cursor: pointer;
          padding: 6px;

          &:hover {
            color: #bbb;
          }
        }

        #logo {
          cursor: pointer;
          width: 120px;
          height: 36px;
        }

        .menu {
          position: relative;
          margin: auto;

          .sub-menu {
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            
            li {
              padding: 4px 0;
              font-size: 15px;
            }
          }
        }
      }
    }

    .user-box {
      display: flex;
      align-items: center;
      
      span {
        cursor: pointer;
        color: ${props => props.$reverse ? '#ccc' : '#666'};
        padding: 0 8px;
      }
      
      #user-icon {
        font-size: 24px;
      }
      
      #search-icon {
        margin-left: 8px;
        font-size: 22px;
      }
    }
  }
`;

function Header(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;

  const [renderPage, setRenderPage] = useState(true);
  const [indexPage, setIndexPage] = useState(true);
  const [isHoverd, setIsHoverd] = useState(false);
  const [transition, setTransition] = useState(true);

  const pageURL = useSelector(selectPageURL);

  // 수정* '/' 일때만 true값을 유지하면 되는데 불필요하게 코드가 계속 실행됨
  useEffect(() => {
    // 설명* sub-menu 클릭 시 transition 없이 동작하기 위해 상태 초기화
    setTransition(true);

    if (pathname !== '/') {
      setRenderPage(false);
      setIndexPage(false);
    } else {
      setRenderPage(true);
      setIndexPage(true);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (pathname === '/') {
        if (currentScrollY >= 300) {
          setRenderPage(false);
        } else {
          setRenderPage(true);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [pathname]);

  const handleHover = () => {
    setIsHoverd(true);
  }

  const handleLeave = () => {
    setIsHoverd(false);
  }

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({top: 0, behavior:'instant'});
  }

  const handlePageMove = (e, page) => {

    if (pathname === pageURL[page]) {
      return window.scrollTo({top: 0, behavior:'instant'});
    }
    
    dispatch(getCurrentPageTitle(page));
    setIsHoverd(false);
    setTransition(false);
    navigate(`${pageURL[page]}`);
  }

  return (
    <HeaderContainer $page={indexPage} $reverse={renderPage} $hover={isHoverd} $transition={transition} onMouseLeave={handleLeave}>
      <nav>
        <div className='menu-box'>
          <ul>
            <li className='logo'><img id='logo' src={renderPage ? logoWhite : logoBlack} alt='로고' onClick={handleLogoClick} title='홈으로 이동' /></li>
            <li> 
              <ul>
                <li className='menu'>
                  <span onMouseOver={handleHover} onClick={(e) => handlePageMove(e, '회사소개')}>회사소개</span>
                  <ul className='sub-menu'>
                    <li><span onClick={(e) => handlePageMove(e, '멤버')}>멤버</span></li>  
                    <li><span onClick={(e) => handlePageMove(e, '사업현황')}>사업현황</span></li>  
                    <li><span onClick={(e) => handlePageMove(e, '오시는길')}>오시는길</span></li>  
                  </ul>
                </li>
                <li className='menu'>
                  <span onMouseOver={handleHover} onClick={(e) => handlePageMove(e, '일정')}>일정</span>
                  <ul className='sub-menu'>
                    <li><span onClick={(e) => handlePageMove(e, '생일')}>생일</span></li>  
                    <li><span onClick={(e) => handlePageMove(e, '행사')}>행사</span></li>  
                  </ul>
                </li>
                <li className='menu'>
                  <span onMouseOver={handleHover} onClick={(e) => handlePageMove(e, '앨범')}>앨범</span>
                  <ul className='sub-menu'>
                    <li><span onClick={(e) => handlePageMove(e, '모임')}>모임</span></li>  
                    <li><span onClick={(e) => handlePageMove(e, '여행')}>여행</span></li>  
                  </ul>
                </li>
                <li className='menu'>
                  <span onMouseOver={handleHover} onClick={(e) => handlePageMove(e, '고객지원')}>고객지원</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='user-box'>
          <span id='user-icon'><RiGlobalLine /></span>
          <span id='search-icon'><IoSearchSharp /></span>
        </div>
      </nav>
    </HeaderContainer>
  );
}

export default Header;