import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import infoImg from '../../assets/images/aboutinfoimg.png';
import whiteTiger from '../../assets/images/whitetiger.png';
import trampoline from '../../assets/images/trampoline.png';
import { motion, spring } from "framer-motion";

const InfoContainer = styled.article`
  /* 수정* 반응형 고려 해야함  */
  /* 설명* 부모가 About.js의 AboutContanier인데 90%로 하면 상속받기 때문에
  독립적으로 사용하기 위해 90vh로 사용 */
  height: 90vh;
  background-image: url(${infoImg});
  background-repeat: no-repeat;
  background-size: cover;
  
  .inner {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;

    .text-box {
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        padding: 26px 0;

        span {
          font-size: 22px;
          font-weight: bold;
        }
      }

      h2 {
        padding: 26px 0;

        span {
          font-size: 18px;
          font-weight: bold;
        }
      }

      p {
        padding: 14px 0;
        line-height: 24px;
      }
    }
    
    .img-box {
      
      #whiteTiger {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 320px;
      }
      
      #trampoline {
        position: absolute;
        bottom: -10px;
        right: 0;
        width: 150px;
        border-radius: 50%;
      }
    }
  }
`;

function Info(props) {

  return (
    <InfoContainer>
      <div className='inner'>
        <div className='text-box'>
          <h1><span>(주)영종컴퍼니</span></h1>
          <p>당사는 혁신적이고 역동적인 기업으로, 글로벌 시장에서 경쟁력을 확보하고 성장하고 있습니다.</p>
          <p>우리는 고객 중심의 비전과 열정을 가지고 있으며, 끊임없는 혁신을 통해 산업의 선도적 위치를 유지하고자 합니다.</p>
          <p>우리의 핵심 가치는 고객 만족과 혁신입니다. 우리는 고객들의 요구를 충족시키기 위해 항상 최선을 다하며,</p> 
          <p>그 결과로 고객들의 신뢰를 얻고 있습니다. 또한 우리는 기술과 비즈니스 모델에 대한 지속적인 혁신을 통해 산업의 변화에 능동적으로 대응하고 있습니다.</p>
          <p>우리의 팀은 전문성과 열정을 갖춘 인재들로 구성되어 있습니다. 우리는 다양한 배경과 경험을 가진 사람들이 모여 협력하고, 창의적인 아이디어를 공유하며,<br />함께 성장하는 문화를 추구하고 있습니다.</p>
          <p>우리는 지속 가능한 발전에도 큰 관심을 가지고 있습니다. 우리의 비즈니스 활동은 사회적 책임과 환경 보호를 고려한 뒤진 솔루션을 추구합니다.</p> 
          <p>우리는 사회적으로 책임 있는 기업이며, 지속 가능한 미래를 위해 노력하고 있습니다.</p>
          <p>우리는 끊임없는 혁신과 고객 중심의 가치를 바탕으로 성장하고 있으며, 산업의 선두 주자로서 글로벌 시장에서 더 큰 성공을 이루기 위해 노력할 것입니다.</p> 
          <p>함께하는 모든 분들에게 우리의 열정과 가치를 전달하고자 합니다. 함께 협력하여 더 나은 미래를 만들어 갑시다.</p>
          <h2><span>대표이사 &nbsp;윤 민 수</span></h2>
        </div>
        <div className='img-box'>
          <motion.img
            id='whiteTiger'  
            src={whiteTiger}
            alt='whiteTiger'
            initial={{ y: 30 }} 
            animate={{ y: -100, rotate: '1turn' }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.img 
            id='trampoline' 
            src={trampoline} 
            alt='trampoline' 
            initial={{ height: 42 }} 
            animate={{ height: 50 }}
            transition={{ duration: 10, repeat: Infinity, type: 'spring' }}
          />
        </div>
      </div>
    </InfoContainer>
  );
}

export default Info;