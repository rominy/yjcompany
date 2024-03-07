import React, { useState } from 'react';
import styled from 'styled-components';
import infoImg from '../../assets/images/aboutinfoimg.png';
import whiteTiger from '../../assets/images/whitetiger.png';
import { motion } from "framer-motion";

const InfoContainer = styled.section`
  height: 80vh;
  background-image: url(${infoImg});
  background-repeat: no-repeat;
  background-size: cover;

  .inner {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;

    .text-box {
      flex: 2;
    }
    
    .img-box {
      flex: 1;
      display: flex;
      align-items: end;
      justify-content: center;
      
      div {
      }

      img {
        height: 520px;
        transform: scaleX(-1);
      }
    }
  }
`;

function Info(props) {
  const [isActive, setIsActive] = useState('tab1');

  // 플렉스 없애고 이미지는 포지션으로 배치
  return (
    <InfoContainer>
      <div className='inner'>
        <div className='text-box'>
          <span>(주)영종컴퍼니</span>
          <p>몰아치는 폭풍우 속에서도 넘어지지 않는 나무가 되겠다. 몰아치는 폭풍우 속에서도 넘어지지 않는 나무가 되겠다.</p>
        </div>
        <div className='img-box'>
            <img src={whiteTiger} />
            <motion.img  
              className='img'
              src={whiteTiger}
              alt='나무'
              initial={{ y: 300, opacity: 0}} 
              animate={{ y: 0, opacity: 1}}
              transition={{ duration: 2 }}
            />
        </div>
      </div>
    </InfoContainer>
  );
}

export default Info;