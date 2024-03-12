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
        const lol = await axios.get('https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/aiN9z8OKig0InIvK22o3_VTvmkP9gVN1hrbQnoWhl5O8PG6ECQNZBsUAzk6TU-QsohGpqFG1Tzq0cw?api_key=RGAPI-d87f3cc2-2feb-49b7-a66a-1b03f44bb88f');

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