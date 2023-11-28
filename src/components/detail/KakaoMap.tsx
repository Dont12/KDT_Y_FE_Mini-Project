'use client';
import Script from 'next/script';
import { Map } from 'react-kakao-maps-sdk';

const JSKey = '620ce962a647ab274dcb03f144ec7a40';
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${JSKey}&autoload=false`;

const KakaoMap = ({
  longitude,
  latitude,
}: {
  longitude: string;
  latitude: string;
}) => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy='beforeInteractive' />
      <Map
        center={{ lat: parseFloat(latitude), lng: parseFloat(longitude) }}
        style={{ width: '100%', height: '100%' }}
        maxLevel={3}
      />
    </>
  );
};

export default KakaoMap;
