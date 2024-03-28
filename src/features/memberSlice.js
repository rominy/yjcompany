import { createSlice } from "@reduxjs/toolkit";
import excavator from '../assets/images/business/excavator.jpg'
import boiler from '../assets/images/business/boiler.jpg'
import herbs from '../assets/images/business/herbs.jpg'
import bodyguard from '../assets/images/business/bodyguard.jpg'
import garbageTruck from '../assets/images/business/garbageTruck.jpg'
import customsBroker from '../assets/images/business/customsBroker.jpg'
import lol from '../assets/images/business/lol.jpg'
import dabin from '../assets/images/members/dabin.png'
import chanwook from '../assets/images/members/chanwook.png'
import cheolun from '../assets/images/members/cheolun.png'
import gyuseog from '../assets/images/members/gyuseog.png'
import sunik from '../assets/images/members/sunik.png'
import hyeongjun from '../assets/images/members/hyeongjun.png'
import seungil from '../assets/images/members/seungil.png'
import sangmyeong from '../assets/images/members/sangmyeong.png'
import minsu from '../assets/images/members/minsu.png'
import jaeseong from '../assets/images/members/jaeseong.png'
import sanghyeon from '../assets/images/members/sanghyeon.png'

const initialState = {
  members: [
    {
      name: '고승일',
      enName: 'Ko Seung-il',
      // profileImg: seungil,
      profileImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/member/seungil.png',
      puuid: 'yC1UOs2ySEhEe1xRzYO5Ms8dfmvg62covtf_2gVF4FLcV_1vYg-u8Z7XQBzJH6yDk5Ol77ta9wuhZA',
      summonerId: 'k_zNOSCxLeK6NoR4SfamFfmo2yUUV10m5NXWWvmQlWF1-A',
      // 수정* 롤아이디는 하드코딩 했으나 ACCOUNT-V1에서 puuid로 값을 받을 수 있음
      lolId: '오프라인입니다#KR1',
    },
    {
      name: '박찬욱',
      enName: 'Park Chan-wook',
      // profileImg: chanwook,
      profileImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/member/chanwook.png',
      puuid: 'LktlNpqKanJAR7nqYSogsGMSfl4R7QNonhsVDC0sikUZ3-Tebnv4_xHVuDZvYJQBYsiZ1h-WxrJtsQ',
      summonerId: 'sreJ809QujkWWkyTi-Qs26aDxc1aZY-xwHgG3GNv1WNyEco',
      lolId: '적막속에서#KR1',
    },
    {
      name: '안다빈',
      enName: 'An Da-been',
      // profileImg: dabin,
      profileImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/member/dabin.png',
      puuid: 'bhjERXRVyV4daBWmRFQNGdXXJwOXwZv2CKltS7KHEkp_bgwi_9C74WxomoyKxSTUEPb1VsIyvLdJ9A',
      summonerId: 'Wxw4UUgfDHr_Yo6JCiqPhXQKAoq7WA1CMcs61HP0timsBw',
      lolId: '영종고라니#KR1'
    },
    {
      name: '오철운',
      enName: 'Oh Cheol-un',
      // profileImg: cheolun,
      profileImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/member/cheolun.png',
      puuid: 'waQLKb7eYxOreczoVCUfxGdBauVMAZ8d5sZnT7D-SlvQuTX0cbISr2Eca2SZiK7Xx8CS8mDpRyOPUQ',
      summonerId: 'wfN554lcA4BBdKihr5DEJaJ23DOp_cQzOcn_swKwIHQdHg',
      lolId: '현녀와노무꾼#KR2',
    },
    {
      name: '윤민수',
      enName: 'Yun Min-su',
      // profileImg: minsu,
      profileImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/member/minsu.png',
      puuid: 'Eu0GEJ9zCahsi3y3DJJGZO32Z73_I8Z2RyZ7dKMtptDxyaFiH3F4453zGMKi_NP5fAY5IrWXA2NbPA',
      summonerId: '0MY8GK33hQa_9txx9siVHSEQZC_nMsbgZjXX-dQ37RehNQ',
      lolId: '영종 백호#KR2',
    },
    {
      name: '이상명',
      enName: 'Lee Sang-myeong',
      // profileImg: sangmyeong,
      profileImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/member/sangmyeong.png',
      puuid: 'COg4D8LLU7zCfD3PIyRbXzW9ByhmBo054L8p5bWqyeZOGx3QDqIJXDcAZKVa5yoLQ65zy2cBNLf9sw',
      summonerId : 'vwSTWBQho7Umx4WbYvPI7X9naguMr4rKWGJRPnT5ljW6sQ',
      lolId: '미드 럭스#럭스q',
    },
    {
      name: '이재성',
      enName: 'Lee Jae-seong',
      // profileImg: jaeseong,
      profileImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/member/jaeseong.png',
      puuid: 'aiN9z8OKig0InIvK22o3_VTvmkP9gVN1hrbQnoWhl5O8PG6ECQNZBsUAzk6TU-QsohGpqFG1Tzq0cw',
      summonerId: '977EtB2j0eWI_d2QU5HvEjR-umlW9raf78idGrM9aIA7PlMy01985xcT9A',
      lolId: '핑보면달려갈게#봇이구멍',
    },
    {
      name: '주상현',
      enName: 'Ju Sang-hyeon',
      // profileImg: sanghyeon,
      profileImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/member/sanghyeon.png',
      puuid: 'hangP2pKmuAR3xiTShPsKugHRQYw_tBEisdlHJ_Opus3MyfwVFO44zPVW3hZHtiT-6MuU-nk4oQNJg',
      summonerId: '0pWaghB8LFiFqq8WtTc4GN_mg9rCbXicnkupwcrmh4lXnw',
      lolId: '고대생물키위새#KR1',
    },
    {
      name: '장규석',
      enName: 'Jang Gyu-seok',
      // profileImg: gyuseog,
      profileImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/member/gyuseog.png',
      puuid: '7KtS_vJ5DEE92K5Ws_4WlZr6m8xTldNI4pcTxwAP6oQbQjP_UalsrAIS9GqgdcYNXHCOIffFv-n9_Q',
      summonerId: 'QC7IW0YTlTdVzODavzqvFnve_aDkB2LlzpVzss4vozuALw',
      lolId: '문재인#북한이먼저',
    },
    {
      name: '정형준',
      enName: 'Jung Hyeong-jun',
      // profileImg: hyeongjun,
      profileImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/member/hyeongjun.png',
      puuid: '8nCFlzMEIf0BKD5opJd6Qy7L-PQhhJduKiulqgPWGrD8Nrglw0A3WOcggUpRRH11EcgMuG_VY_xndw',
      summonerId: 'vwBKISCi8HsGDeB3apwwp7izE-_BnoGWaFXPf7RVCnATWQ',
      lolId: '문재인#qudtl',
    },
    {
      name: '차순익',
      enName: 'Cha Sun-ik',
      // profileImg: sunik,
      profileImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/member/sunik.png',
      puuid: 'gvcappmB6ADH8fGwcUah1D5RiSF6Xl0mEbz30VEPii-O08HzMnT9a7OOuB0Ke6rWCPQ-s9Kf7lUoBw',
      summonerId: 'Xo40rUlOSJV9GD-t3iKByayF7B2up91NEuUUylQG9Qhux0M',
      lolId: '케 인#kor11',
    },
  ],
  business: [
    {
      name: '이상명 오철운', 
      company: '노무중기',
      // companyImg: excavator,
      companyImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/excavator.jpg?token=GHSAT0AAAAAACPOMGB7DI3PKMOZXSGDSBCIZPZNLRA',
      type: '건설업',
      btnId: 'nomu-btn'
    },
    {
      name: '박찬욱 차순익', 
      company: '린나이보일러',
      // companyImg: boiler,
      companyImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/9c215249982a68e3da083094d7f5e0a658f01545/boiler.jpg?token=GHSAT0AAAAAACPOMGB6WRFFUML77FVYX2IEZPZNL2Q',
      type: '서비스업',
      btnId: 'boiler-btn'
    },
    {
      name: '정형준', 
      company: '주니캅',
      // companyImg: bodyguard,
      companyImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/9c215249982a68e3da083094d7f5e0a658f01545/bodyguard.jpg?token=GHSAT0AAAAAACPOMGB7VWMAOOAQ2GTYSGFEZPZNQBQ',
      type: '경비 및 경호',
      btnId: 'juni-btn'
    },
    {
      name: '주상현', 
      company: '현이관세사무소',
      // companyImg: customsBroker,
      companyImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/9c215249982a68e3da083094d7f5e0a658f01545/customsBroker.jpg?token=GHSAT0AAAAAACPOMGB65KMM6CGXL7YMQJLKZPZNM7Q',
      type: '수출입 통관',
      btnId: 'hyun-btn'
    },
    {
      name: '안다빈', 
      company: '빈이네건강한식탁',
      // companyImg: herbs,
      companyImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/9c215249982a68e3da083094d7f5e0a658f01545/herbs.jpg?token=GHSAT0AAAAAACPOMGB7GCMIXY2NAF2V64WKZPZNNKA',
      type: '식음료 외식',
      btnId: 'bin-btn'
    },
    {
      name: '장규석 이재성', 
      company: '석이환경',
      // companyImg: garbageTruck,
      companyImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/9c215249982a68e3da083094d7f5e0a658f01545/garbageTruck.jpg?token=GHSAT0AAAAAACPOMGB7NIP64KACB5ZOHSYEZPZNMRQ',
      type: '원료 재생업',
      btnId: 'seok-btn'
    },
    {
      name: '고승일', 
      company: '승일게임아카데미',
      // companyImg: lol,
      companyImg: 'https://raw.githubusercontent.com/rominy/yjcompany-data_center/main/lol.jpg?token=GHSAT0AAAAAACPOMGB7NEAWGAMKMFRHZFM2ZPZNMFQ',
      type: '게임 학원',
      btnId: 'game-btn'
    },
  ],
};

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    getMember: (state, action) => {
      state.members = action.payload;
    },
    getBusiness: (state, action) => {
      state.business = action.payload;
    },
  }
});

export const { getMember, getBusiness, } = memberSlice.actions;

export const selectMembers = state => state.member.members;
export const selectBusiness = state => state.member.business;

export default memberSlice.reducer;