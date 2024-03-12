import { createSlice } from "@reduxjs/toolkit";
import excavator from '../assets/images/excavator.jpg'
import boiler from '../assets/images/boiler.jpg'
import herbs from '../assets/images/herbs.jpg'
import bodyguard from '../assets/images/bodyguard.jpg'
import garbageTruck from '../assets/images/garbageTruck.jpg'
import customsBroker from '../assets/images/customsBroker.jpg'
import lol from '../assets/images/lol.jpg'
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
      enName: 'Go Seung-il',
      profileImg: seungil,
      puuid: 'yC1UOs2ySEhEe1xRzYO5Ms8dfmvg62covtf_2gVF4FLcV_1vYg-u8Z7XQBzJH6yDk5Ol77ta9wuhZA',
    },
    {
      name: '박찬욱',
      enName: 'Park Chan-wook',
      profileImg: chanwook,
      puuid: 'LktlNpqKanJAR7nqYSogsGMSfl4R7QNonhsVDC0sikUZ3-Tebnv4_xHVuDZvYJQBYsiZ1h-WxrJtsQ',
    },
    {
      name: '안다빈',
      enName: 'An Da-been',
      profileImg: dabin,
      puuid: 'bhjERXRVyV4daBWmRFQNGdXXJwOXwZv2CKltS7KHEkp_bgwi_9C74WxomoyKxSTUEPb1VsIyvLdJ9A',
    },
    {
      name: '오철운',
      enName: 'Oh Cheol-un',
      profileImg: cheolun,
      puuid: 'waQLKb7eYxOreczoVCUfxGdBauVMAZ8d5sZnT7D-SlvQuTX0cbISr2Eca2SZiK7Xx8CS8mDpRyOPUQ',
    },
    {
      name: '윤민수',
      enName: 'Yun Min-su',
      profileImg: minsu,
      puuid: 'Eu0GEJ9zCahsi3y3DJJGZO32Z73_I8Z2RyZ7dKMtptDxyaFiH3F4453zGMKi_NP5fAY5IrWXA2NbPA',
    },
    {
      name: '이상명',
      enName: 'Lee Sang-myeong',
      profileImg: sangmyeong,
      puuid: 'COg4D8LLU7zCfD3PIyRbXzW9ByhmBo054L8p5bWqyeZOGx3QDqIJXDcAZKVa5yoLQ65zy2cBNLf9sw'
    },
    {
      name: '이재성',
      enName: 'Lee Jae-seong',
      profileImg: jaeseong,
      puuid: 'aiN9z8OKig0InIvK22o3_VTvmkP9gVN1hrbQnoWhl5O8PG6ECQNZBsUAzk6TU-QsohGpqFG1Tzq0cw',
    },
    {
      name: '주상현',
      enName: 'Ju Sang-hyeon',
      profileImg: sanghyeon,
      puuid: 'hangP2pKmuAR3xiTShPsKugHRQYw_tBEisdlHJ_Opus3MyfwVFO44zPVW3hZHtiT-6MuU-nk4oQNJg',
    },
    {
      name: '장규석',
      enName: 'Jang Gyu-seok',
      profileImg: gyuseog,
      puuid: '7KtS_vJ5DEE92K5Ws_4WlZr6m8xTldNI4pcTxwAP6oQbQjP_UalsrAIS9GqgdcYNXHCOIffFv-n9_Q',
    },
    {
      name: '정형준',
      enName: 'Jung Hyeong-jun',
      profileImg: hyeongjun,
      puuid: '8nCflzMEIf0BKD5opJd6Qy7L-PQhhJduKiulqgPWGrD8Nrglw0A3WOcggUpRRH11EcgMuG_VY_xndw',
    },
    {
      name: '차순익',
      enName: 'Cha Sun-ik',
      profileImg: sunik,
      puuid: 'gvcappmB6ADH8fGwcUah1D5RiSF6Xl0mEbz30VEPii-O08HzMnT9a7OOuB0Ke6rWCPQ-s9Kf7lUoBw',
    },
  ],
  business: [
    {
      name: '이상명 오철운', 
      company: '노무중기',
      companyImg: excavator,
      type: '건설업',
      btnId: 'nomu-btn'
    },
    {
      name: '박찬욱 차순익', 
      company: '린나이보일러',
      companyImg: boiler,
      type: '서비스업',
      btnId: 'boiler-btn'
    },
    {
      name: '정형준', 
      company: '주니캅',
      companyImg: bodyguard,
      type: '경비 및 경호',
      btnId: 'juni-btn'
    },
    {
      name: '주상현', 
      company: '현이관세사무소',
      companyImg: customsBroker,
      type: '수출입 통관',
      btnId: 'hyun-btn'
    },
    {
      name: '안다빈', 
      company: '빈이네건강한식탁',
      companyImg: herbs,
      type: '식음료 외식',
      btnId: 'bin-btn'
    },
    {
      name: '장규석 이재성', 
      company: '석이환경',
      companyImg: garbageTruck,
      type: '원료 재생업',
      btnId: 'seok-btn'
    },
    {
      name: '고승일', 
      company: '승일게임아카데미',
      companyImg: lol,
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

export const { getMember, getBusiness } = memberSlice.actions;

export const selectMembers = state => state.member.members;
export const selectBusiness = state => state.member.business;

export default memberSlice.reducer;