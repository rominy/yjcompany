import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMembers } from '../features/memberSlice';
import axios from 'axios';
import { FaMedal } from "react-icons/fa";
import styled from 'styled-components';

const LoLTierContainer = styled.div`
  margin-top: 20px;

  .toptier-box {
    width: 100%;
    max-height: 340px;
    display: flex;
    justify-content: center;

    #gold { color: #D5A11E; }

    #silver { color: #A3A3A3; }

    #bronze { color: #CD7F32; }

    .toptier-contents {
      max-width: 90%;
      display: flex;
      justify-content: center;
      align-items: end;
      text-align: center;

      .gold-box {
        flex: 2;
      }
      
      .silver-box {
        flex: 1.5;
      }
      
      .bronze-box {
        flex: 1.2;
      }

      .member-box {

        li {
          padding-bottom: 10px;
        }

        img {
          width: 60%;
        }

        .medal {
          font-size: 24px;
        }

        .tier-text {
          font-weight: bold;
        }
      }
      
      .profile-box {        
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #ccc;
        }

        p {
          color: #888;
        }
      }
    }
  }
`;

const AnothertierContainer = styled.div`
  margin: 40px 0;

  ul {
    display: flex;
    align-items: center;
    border-top: 1px solid #ccc;
    
    
    li {
      padding: 12px 0;
      flex: 1;
      text-align: center;

      &:first-child {
        flex: 0.5;
        font-weight: bold;
      }
    }
    
    .tier-box {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;

      img {
        width: 30px;
      } 
    }

    .profile-box {        
      display: flex;
      align-items: center;
      justify-content: center;
  
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #ccc;
      }
  
      p {
        color: #888;
      }
    }
  }
`;

const tierOrder = {
  'CHALLENGER': 1,
  'GRANDMASTER': 2,
  'MASTER': 3,
  'DIAMOND': 4,
  'EMERALD': 5,
  'PLATINUM': 6,
  'GOLD': 7,
  'SILVER': 8,
  'BRONZE': 9,
  'IRON': 10,
  'Unranked': 11
}

const tierImg = {
  'CHALLENGER': 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/lol/challenger.jpg',
  'GRANDMASTER': 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/lol/grandmaster.jpg',
  'MASTER': 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/lol/master.jpg',
  'DIAMOND': 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/lol/diamond.jpg',
  'EMERALD': 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/lol/emerald.jpg',
  'PLATINUM': 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/lol/platinum.jpg',
  'GOLD': 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/lol/gold.jpg',
  'SILVER': 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/lol/silver.jpg',
  'BRONZE': 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/lol/bronze.jpg',
  'IRON': 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/lol/bronze.jpg',
  'Unranked': 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/lol/unrnaked.jpg'
}

const tierRank = {
  'I': 1,
  'II': 2,
  'III': 3,
  'IV': 4,
  'Unranked': 5
}

function LoLTier(props) {
  const members = useSelector(selectMembers);
  
  const [lolMembers, setLolMembers] = useState([]);

  useEffect(() => {
    const getLoLApi = async () => {
      const riot_proxy = window.location.hostname === 'localhost' ? '' : '/riot_proxy';
      try {
        // 설명* Promise.all() 메서드를 사용하여 비동기 작업을 기다림
        // const response = await Promise.all(members.map(member => axios.get(`${riot_proxy}/lol/league/v4/entries/by-summoner/${member.summonerId}?api_key=${process.env.REACT_APP_RIOTGAMES_KEY}`)));
        const response = await Promise.all(members.map(member => axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${member.summonerId}?api_key=${process.env.REACT_APP_RIOTGAMES_KEY}`)));
        const res = await Promise.all(members.map(member => axios.get(`${riot_proxy}/lol/platform/v3/champion-rotations?api_key=${process.env.REACT_APP_RIOTGAMES_KEY}`)));
        console.log(response);
        console.log(res);

        const newData = response.map((res, index) => { 
          const filterTire = res.data.filter(data => data.queueType === 'RANKED_SOLO_5x5');
          return {
            tier: filterTire[0] ? filterTire[0].tier : 'Unranked', 
            rank: filterTire[0] ? filterTire[0].rank : 'Unranked',
            lolId: members[index].lolId,
            name: members[index].name,
            img: members[index].profileImg,
          };
        });
        
        const compareMembers = (a, b) => {
          const tierComparison = tierOrder[a.tier] - tierOrder[b.tier];
          if (tierComparison !== 0) {
            return tierComparison;
          } else {
            return tierRank[a.rank] - tierRank[b.rank];
          }
        };

        newData.sort(compareMembers)

        setLolMembers(newData);
      } catch (err) {
        console.error(err);
      }
    }
    getLoLApi();
  }, []);
  
  console.log(lolMembers);

  return (
    <LoLTierContainer>
      {lolMembers[0] && 
        <div className='toptier-box'>
          <ul className='toptier-contents'>
            <li className='silver-box'>
              <ul className='member-box'>
                <p><FaMedal id='silver' className='medal' /></p>
                <img src={tierImg[lolMembers[1].tier]} alt='tier'/>
                <li className='tier-text'>{lolMembers[1].tier} {tierRank[lolMembers[1].rank]}</li>
                <li>{lolMembers[1].lolId}</li>
                <li className='profile-box'>
                  <img src={lolMembers[1].img} alt='profile'/>
                  <p>&nbsp;{lolMembers[1].name}</p>
                </li>
              </ul>
            </li>
            <li className='gold-box'>
              <ul className='member-box'>
                <p><FaMedal id='gold' className='medal' /></p>
                <img src={tierImg[lolMembers[0].tier]} alt='tier'/>
                <li className='tier-text'>{lolMembers[0].tier} {tierRank[lolMembers[0].rank]}</li>
                <li>{lolMembers[0].lolId}</li>
                <li className='profile-box'>
                  <img src={lolMembers[0].img} alt='profile'/>
                  <p>&nbsp;{lolMembers[0].name}</p>
                </li>
              </ul>
            </li>
            <li className='bronze-box'>
              <ul className='member-box'>
                <p><FaMedal id='bronze' className='medal' /></p>
                <img src={tierImg[lolMembers[2].tier]} alt='tier'/>
                <li className='tier-text'>{lolMembers[2].tier} {tierRank[lolMembers[2].rank]}</li>
                <li>{lolMembers[2].lolId}</li>
                <li className='profile-box'>
                  <img src={lolMembers[2].img} alt='profile'/>
                  <p>&nbsp;{lolMembers[2].name}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      }
      <AnothertierContainer>
        {lolMembers.slice(3).map((member, index) => {
          return (
            <ul key={index}>
              <li>{index + 4}</li>
              <li className='tier-box'>
                <img src={tierImg[member.tier]} alt='tier' />
                <p>&nbsp;{member.tier} {tierRank[member.rank] === 5 ? undefined : tierRank[member.rank]}</p>
              </li>
              <li>{member.lolId}</li>
              <li className='profile-box'>
                <img src={member.img} alt='profile' />
                <p>&nbsp;{member.name}</p>
              </li>
            </ul>
          )
        })}
      </AnothertierContainer>
    </LoLTierContainer>
  );
}

export default LoLTier;