# SPA Card Board with React

- 여행 정보 카드를 보여주는 SPA 웹 애플리케이션 구현.

## 1. 개발환경

#### Front-End

- React
- Redux, React-Redux, Redux-Saga

## 2. 실행방법

#### 2-1 프로젝트 실행 방법

```bash
//실행에 필요한 모듈 설치
$> npm install

//http://localhost:3000 접속 후 결과 확인
$> npm start
```

## 요약

1. React 로 SPA 기반 여행목록 사이트 구현
2. 기술 스택 : React, Redux, Redux-Saga

## 요구사항

- SPA(Single Page Application)로 개발.
- 페이지는 Header, List 2개의 영역으로 구분 됩니다.(상하로 배치 되어 있습니다.)
- List 페이지는 아래 조건에 따라 1줄에 표시되는 카드 수를 반응형으로 작업 합니다.

### Header

- 상품 리스트, 위시 리스트 전환이 가능한 네비게이션 메뉴가 있습니다.
  - 메뉴 전환시 다시 해당 리스트로 돌아왔을 때 기존의 스크롤 위치가 유지 됩니다.
- 가격 높은순, 가격 낮은순 정렬을 하는 기능이 있습니다.
  - defalut는 정렬이 되어 있지 않은 상태 입니다.
  - 정렬 기능은 한가지만 선택 가능 합니다.
  - 정렬 기능 클릭시 리스트의 상품카드가 정렬 됩니다.
  - 메뉴 전환시 선택 되어 있는 정렬 방식이 유지 됩니다.
- 항상 최상단에 고정되어 있습니다.

### 리스트 공통

- 리스트 포함 된 상품 카드는 다음과 같은 내용을 포함 합니다.<br/>
  ■ 썸네일<br/>
  https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-1.jpg ~
  https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-55.jpg
  까지 사용 가능합니다.
  - 상품명
  - 가격
  - 위시 리스트에 포함/제거 할 수 있는 기능이 있습니다.
  - 상품명은 2줄까지 표시할 수 있으며 2줄 이상이 되면 “…” 으로 표시합니다.
  - 상품의 썸네일은 화면에 보여질 때 로딩 되고 그 이전에는 blank 이미지가 표시됩니다.<br/>
    ■ 썸네일<br/>
    - https://d2ur7st6jjikze.cloudfront.net/share/image_loader.gif
    - 리스트 영역의 스크롤이 최하단까지 내려가면 다음 리스트를 불러옵니다.
    - 한번에 가져올 수 있는 상품 개수는 최대 10개 입니다.

### 상품 리스트

- 위시 리스트에 포함 된 상품 카드를 구분 할 수 있어야 합니다.
  - e.g. 상품 카드 내에 위시 리스트에 포함 되었다는 아이콘이 생깁니다.

### 위시 리스트

- 위시 리스트에 포함 된 카드만 표시 됩니다.
- 상품 카드에서 위시 리스트를 제거 하면 위시 리스트에서 해당 상품 카드는 제거
  됩니다.
- 위시 리스트에 담긴 상품 카드가 없는 경우 위시 리스트에 담긴 상품이 없습니다 라는
  문구를 표시 합니다.
