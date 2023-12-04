'use client';

import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

const JSKey = process.env.NEXT_PUBLIC_KAKAOMAP_JSKEY || '';

const KakaoMap = ({
  longitude,
  latitude,
}: {
  longitude: string;
  latitude: string;
}) => {
  const [loading, error] = useKakaoLoader({
    appkey: JSKey,
  });

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <Map
          center={{ lat: parseFloat(latitude), lng: parseFloat(longitude) }}
          style={{ width: '100%', height: '100%' }}
          maxLevel={3}
        >
          <MapMarker
            position={{
              lat: parseFloat(latitude),
              lng: parseFloat(longitude),
            }}
          ></MapMarker>
        </Map>
      )}
    </>
  );
};

export default KakaoMap;
