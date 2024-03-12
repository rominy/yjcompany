import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBusiness } from '../../features/memberSlice';

const BusinessContainer = styled.article`

  .inner {
    max-width: 1200px;
    margin: 0 auto;

    .item {
      max-width: 880px;
      height: 380px;
      margin: 0 auto;
      padding-bottom: 40px;
      display: flex;

      .img-box {
        flex: 3;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;

          &:hover {
            transform: scale(1.05);
          }
        }
      }

      .text-box {
        flex: 1;
        background-color: #f7f3f2;
        padding: 40px;

        h1 {
          padding: 0 0 18px 0;
          font-size: 22px;
          font-weight: bold;
        }

        p {
          padding: 10px 0;
          font-weight: 500;

          span {
            color: #aaa;
            font-size: 15px;
          }
        }

        button {
          margin-top: 20px;
          padding: 8px;
          border: none;
          box-shadow: 2px 2px #ccc;
          color: #fff;

          &:hover {
            opacity: 0.7;
          }
        }

        #nomu-btn {
          background-color: #FF8C00;
        }

        #boiler-btn {
          background-color: #BC8F8F;
        }

        #juni-btn {
          background-color: #4682B4	;
        }

        #seok-btn {
          background-color: #6B8E23;
        }

        #bin-btn {
          background-color: #006400;
        }
        
        #hyun-btn {
          background-color: #708090;
        }

        #game-btn {
          background-color: #DAA520;
        }
      }

      .text-right {
        text-align: right;
      }
    }
  }
`;

function Business(props) {
  const navigate = useNavigate();
  const business = useSelector(selectBusiness);

  return (
    <BusinessContainer>
      <div className='inner'>
        {business.map((item, index) => {
          if (index % 2 === 1) {
            return (
              <div className='item' key={index}>
                <div className='img-box'>
                  <img src={item.companyImg} alt='companyImg' />
                </div>
                <div className='text-box'>
                  <h1>{item.company}</h1>
                  <p><span>대표</span> &nbsp;{item.name}</p>
                  <p><span>업종</span> &nbsp;{item.type}</p>
                  <button id={item.btnId} onClick={() => navigate('/contact')}>견적 신청</button>
                </div>
              </div>
            );
          } else {
            return (
              <div className='item' key={index}>
                <div className='text-box text-right'>
                  <h1>{item.company}</h1>
                  <p><span>대표</span> &nbsp;{item.name}</p>
                  <p><span>업종</span> &nbsp;{item.type}</p>
                  <button id={item.btnId} onClick={() => navigate('/contact')}>견적 신청</button>
                </div>
                <div className='img-box'>
                  <img src={item.companyImg} alt='companyImg' />
                </div>
              </div>
            );
          }
        })}
      </div>
    </BusinessContainer>
  );
}

export default Business;