import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectMembers } from '../../features/memberSlice';

const LocationContainer = styled.article`

`;

function Location(props) {
  const members = useSelector(selectMembers);

  useEffect(() => {
    const riotgames = async () => {
      try {
        // const lol = [];
        // lol.push(axios.get(''))
        const lol = await axios.get(`https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/%EC%98%81%EC%A2%85%20%EB%B0%B1%ED%98%B8/KR2?api_key=${process.env.REACT_APP_RIOTGAMES_KEY}`);

        console.log(lol);
      } catch (err) {
        console.error(err);
      }
    }
    riotgames();
  }, []);

  return (
    <div>
    </div>
  );
}

export default Location;