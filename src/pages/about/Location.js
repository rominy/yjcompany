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
        const lol = await axios.get(`https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/3oLJ2Ul-AvdR3dpIPcSKjwx0lPqRkx-Ox6WuO0SgEpIlRPue?api_key=${process.env.REACT_APP_RIOTGAMES_KEY}`);

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