import React from 'react';

import { AppLayout } from '../layout';

const Datail = ({ children }: AppLayout) => (
  <main className='bg-white'>{children}</main>
);

<<<<<<< HEAD
export default Datail;
=======
const items = [
  {
    url: 'https://yaimg.yanolja.com/v5/2023/11/18/16/1280/6558e97aca99a3.91061580.jpg',
  },
  {
    url: 'https://yaimg.yanolja.com/v5/2023/11/18/16/1280/6558e97b6376e8.28259309.jpg',
  },
  {
    url: 'https://yaimg.yanolja.com/v5/2023/11/18/16/1280/6558e97be8ded1.18240177.jpg',
  },
];
function Detail() {
  return (
    <div className='bg-white'>
      <div>
        <Image
          src='https://yaimg.yanolja.com/v5/2023/11/18/16/1280/6558e97be8ded1.18240177.jpg'
          alt=''
          width={768}
          height={100}
          className='h-auto w-full'
          unoptimized={true}
        />
      </div>
      <div className='flex flex-col gap-4 p-5'>
        <div className='border-mediumGray border-b border-solid pb-3'>
          <h3 className='subtitle3'>강릉 애즈풀앤스파펜션</h3>
        </div>
        <div className='border-mediumGray border-b border-solid pb-3'>
          <div>강원 강릉시 사천면 해안로 1052-1</div>
          <div>체크인 15:00 - 체크아웃 11:00</div>
        </div>
        <div className='border-mediumGray flex justify-evenly border-b border-solid pb-3 '>
          <div>1월 19일 - 1월 20일 V</div>
          <div>1명 V</div>
        </div>
        <div className='flex flex-col gap-10'>
          {rooms.map((room, index) => (
            <div
              key={index}
              className='border-mediumGray flex flex-col gap-5 rounded border border-solid p-5'
            >
              <div className='flex justify-between'>
                <div className='mr-5'>
                  <Image
                    src={room.picture}
                    width={40}
                    height={40}
                    alt={`Room ${index + 1}`}
                    className='h-full w-48 object-cover'
                    unoptimized={true}
                  />
                </div>
                <div className='flex grow flex-col gap-5 pt-3'>
                  <div>
                    <div>{room.name}</div>
                    <div>최대 인원: {room.max}</div>
                    <div>최소 인원: {room.min}</div>
                    <div>침대: {room.bed}</div>
                    <div>옵션: {room.option}</div>
                  </div>
                  <div className='flex flex-row items-end justify-end gap-3'>
                    <button>
                      <Image
                        src='/svg/cartIcon.svg'
                        alt='cartIcon'
                        className='h-8 w-8'
                        width={32}
                        height={32}
                      />
                    </button>
                    <p className='subtitle4 text-baseline leading-4'>
                      {room.price}원
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <button className='bg-mainButton h-12 w-full rounded text-white '>
                  예약하기
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='border-mediumGray border-b border-solid py-8'>
          <h3 className='subtitle5'>이용규칙</h3>
          {rules.map((rule, index) => (
            <p className='body1' key={index}>
              {rule}
            </p>
          ))}
        </div>
        <div className='py-8'>
          <p className='subtitle5'>숙소소개</p>
          <p className='body1'>
            한경면 저지리에는 수동, 중동, 남동, 북동, 동동, 명리동의 6개
            부락으로 구성되어 있습니다. 그 중 조용하고 살기 좋은 동네로 선정된
            저지리 수동은 옛 제주의 역사를 지니는 돗통의 정취와 색이 남아 있는
            공간으로, 소중한 사람들을 몸과 마음이 편안해지는 느슨한 공간으로
            기억되길 바랍니다.
          </p>
          <p>
            [🏠숙소 전체 구성]
            <br />- 귤밭으로 둘러 쌓인 260평 대지에 3개의 돌집이 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
>>>>>>> 9ef7f3869aca28fbd3b9646f4a4c37383325bf03
