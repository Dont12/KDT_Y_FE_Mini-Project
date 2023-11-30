# 구현한 기능

## 1. 메인 페이지 (main page)

### main Carousel & main Icon

> - main Carousel : autoplay 적용
> - main Icon : 숙박 업소 카테고리 별 분류 아이콘, 분류 페이지와 연결되어 있다.

![main](https://github.com/Dont12/KDT_Y_FE_Mini-Project/assets/51106050/e52af7ae-0b40-4999-b7e9-838e1c3e88ec)

### main contents 01, 02, 03

> - main contents 01 → 지역 별 펜션 보여주기
> - main contents 02 → 지역 별 호텔 보여주기
> - main contents 03 → 지역 별 전체 숙소 보여주기 (분류 페이지와 연결)

![main2](https://github.com/Dont12/KDT_Y_FE_Mini-Project/assets/51106050/be64769c-33e1-4e6e-9c00-e8b5b27e6ed2)

## 2. 분류 페이지 (products page)

> - 카테고리 별 분류 드롭다운
> - 지역 별 분류 드롭다운
> - 숙소 카드 제작, infinite scroll 적용

![products](https://github.com/moonyah/emp_management_cafe/assets/51106050/f0feff63-360b-4bfe-b4ff-a87597866319)

### +) detail page와 연결

> - 숙소들은 각각의 detail page와 연결

![link](https://github.com/moonyah/emp_management_cafe/assets/51106050/69056390-4c9a-4d96-91de-a94e37a10c8e)

# 트러블 슈팅

> 호텔 카테고리와 지역을 동시에 분류해야 하는 상황에서, URL을 활용하여 페이지를 구성하는 과정에서 발생한 어려움이 있었다.

- 상황 : 처음에는 URL을 slug로 설정하여 호텔을 분류하려고 했으나, 이 방식이 너무 헷갈려서 로직을 변경하게 되었다.
- 문제 : slug를 사용한 URL은 category와 location의 명시성이 부족해 혼란을 초래해서 사용자가 원하는 정보를 정확히 식별하기 어렵다.
- 해결 : URL을 `product?category=&location=`로 명시적으로 변경하여 각각의 매개변수를 명확히 나타내게 되었다. 사용자가 쉽게 필터링하고 원하는 정보를 찾을 수 있도록 개선이 되었다.
- 느낀 점 : URL 구조의 중요성을 깨달았고, 명확한 매개변수를 통해 사용자 경험을 향상시키는 결정을 내렸다.

# 회고

이 프로젝트를 통해 백엔드와 소통하면서 api 연결과 데이터를 활용하는 협업 경험을 하였습니다. 프론트 개발에서 넥스트와 타입스크립트를 사용하면서 코드의 가독성과 유지보수성을 향상시키고자 하였습니다. 담당했던 부분에서는 메인 페이지와 분류 페이지 간의 연결 및 사용자 경험을 개선하기 위해 신경을 썼던 것 같습니다. 팀원들 간의 적극적이고 활발한 소통으로 인해 짧은 기간이지만 무사히 프로젝트를 마무리 지을 수 있었습니다!
