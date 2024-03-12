import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { selectMembers } from '../../features/memberSlice';

const MemberContainer = styled.article`

  .inner {
    max-width: 1200px;
    margin: 0 auto;

    .member-category {
      height: 30px;
      display: flex;

      li {
        padding: 0 4px;
        color: blue;
        
        p {
          cursor: pointer;
          height: 100%;
          display: flex;
          align-items: center;
          font-size: 20px;
        }
      }
    }
  }
`;

const StyledCol = styled(Col)`
  margin-bottom: 18px;
  height: 380px;

  .col-inner {
    height: 100%;

    img {
      width: 100%;
      height: 80%;
      display: block;
      /* 설명* 이미지 흑백처리 */
      filter : grayscale(1);
      
      &:hover {
        filter : grayscale(0);
      }
    }

    .text-box {
      height: 20%;
      background-color: #222;

      p {
        padding: 10px 14px;
        color: #fff;
      }
    }
  }
`;

function Member(props) {
  const members = useSelector(selectMembers);
  
  // const [uniqueInitials, setUniqueInitials] = useState([]);

  // useEffect(() => {
  //   const initialsMap = {};
  //   members.forEach(member => {
  //       const initialUnicode = member.name.charCodeAt(0) - 0xAC00;
  //       const initial = String.fromCharCode(Math.floor(initialUnicode / (21 * 28)) + 0x1100);
  //       initialsMap[initial] = true;
  //   });
  
  //   const uniqueInitials = Object.keys(initialsMap);
  //   setUniqueInitials(uniqueInitials);
  // }, [])

  return (
    <MemberContainer>
      <div className='inner'>
        {/* 수정* 이니셜로 카테고리화 시키기 */}
        {/* <ul className='member-category'>
          <li>전체</li>
          {uniqueInitials.map((initial, index) => (
            <li key={index}><p>{initial}</p></li>
          ))}
        </ul> */}
        <Container>
          <Row xs={2} md={3} xl={4}>
            {members.map((member, index) => {
              return (
                <StyledCol key={index}>
                  <div className='col-inner'>
                    <img src={member.profileImg} alt='profile' />
                    <div className='text-box'>
                      <p>{member.name}</p>
                      <p>{member.enName}</p>
                    </div>
                  </div>
                </StyledCol>
              )
            })}
          </Row>
        </Container>
      </div>
    </MemberContainer>
  );
}

export default Member;