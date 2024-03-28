import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Map, MapMarker, ZoomControl, MapTypeControl, CustomOverlayMap } from "react-kakao-maps-sdk";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const LocationContainer = styled.article`

  .inner {
    max-width: 1200px;
    margin: 0 auto;

    .company-text {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 15px;
      background-color: #fff;
      font-size: 18px;
      font-weight: bold;
    }

    .info-box {
      width: 100%;
      display: flex;
      justify-content: center;

      div {
        padding: 34px 52px;

        span {
          margin-bottom: 12px;
          display: flex;
          justify-content: center;
          font-size: 28px;
        }

        p {
          text-align: center;
          padding: 10px 0;
        }

        .title {
          font-size: 17px;
          font-weight: bold;
          color: #444;
        }

        .content {
          color: #888;
        }
      }
    }
  }
`;


function Location(props) {
  const lat = 37.493045832;
  const lng = 126.51674650;

  return (
    <LocationContainer>
      <div className='inner'>
        <Map
          style={{ width: '100%', height: '540px' }}
          center={{ lat: lat, lng: lng }}
          level={5}
          zoomable={false}
          >
            <MapMarker
              position={{ lat: lat, lng: lng }}
            />
              <CustomOverlayMap
                position={{ lat: lat, lng: lng }}
                yAnchor={2.2}
              >
                <p className='company-text'>영종컴퍼니</p>
              </CustomOverlayMap>
            <MapTypeControl />
            <ZoomControl />
        </Map>
        <div className='info-box'>  
          <div className='address'>
            <span><ImLocation2 /></span>
            <p className='title'>Address</p>
            <p className='content'>인천광역시 중구 운서동 산 1-1</p>
          </div>
          <div className='number'>
            <span><BsFillTelephoneFill /></span>
            <p className='title'>Tel</p>
            <p className='content'>(+82) 032-000-0000</p>
          </div>
          <div className='mail'>
            <span><IoMdMail /></span>
            <p className='title'>Mail</p>
            <p className='content'>msg3265@gmail.com</p>
          </div>
        </div>
      </div>
    </LocationContainer>
  );
}

export default Location;