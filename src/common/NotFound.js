import React from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  text-align: center;

  .inner {
    p {
      padding: 10px 0;
      font-size: 30px;
      font-weight: 300;

      span {
        font-size: 22px;
      }
    }
  }
`;

function NotFound(props) {
  return (
    <StyledNotFound>
      <div className='inner'>
        <img src='https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/common/notfoundimg.png' alt='error' />
        <p><span>Error code:</span> 404 Not Found</p>
        <p>요청하신 페이지는 없는 페이지입니다.</p>
      </div>
    </StyledNotFound>
  );
}

export default NotFound;