import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mainImg from '../assets/images/mainimg.jpg';
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const MainContainer = styled.section`
  height: 100vh;
  /* background-image: url(${mainImg}); */
  background-image: url('https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/mainimg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  display: flex;

  .container {
    max-width: 1200px;
    margin: auto;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    p {
      padding: 14px 0;
      color: #fff;
      font-size: 30px;
      font-weight: bold;
      text-shadow: 0 1px 1px black;
    }
    
    button {
      margin-top: 14px;
      padding: 8px 12px;
      border: none;
      border-radius: 15px;
      background-color: #fff;
      color: #666;
      font-size: 16px;
    }
  }
`;

function Main(props) {
  return (
    <>
      <MainContainer>
        <div className='container'>
          <motion.div 
            className='text-box'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p>영종컴퍼니</p>
            <p>Exactly What You Need</p>
            <button>Contact us<span><IoIosArrowRoundForward /></span></button>
          </motion.div>
        </div>
      </MainContainer>
      <div className='iss' style={{ height: '100vh' }}>123</div>
    </>

  );
}

export default Main;