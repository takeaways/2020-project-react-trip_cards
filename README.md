# SPA Card Board with React
### 요약
- React를 사용하여 여행 정보 카드를 보여주는 SPA 웹(Infinite Scroll) 애플리케이션 구현. 

![project_picture](./public/images/shot.png)

## 1. 개발환경

#### Front-End 기술 스택
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


## 3. 요구사항 구현

- SPA(Single Page Application)로 개발.
- 페이지 구분 : Header, List
- List 페이지 : 반응형으로 카드 수 노출

### Header
- 네비게이션 메뉴 : 상품리스트, 위시리스트
- 스크롤 : 기존 스크롤 위치 유지
- 정렬 기능 : 가격 높은순, 가격 낮은순 (메뉴 전환 시 선택되어 있는 정렬 방식 유지)
- 위치 : 상단 고정

### 리스트 공통
- 상품 카드 내용 : 상품명, 가격, 위시리스트(하트 클릭) 담기
  - 상품명 : 2줄까지 표시, 2줄 이상 "..."으로 표시
- 썸네일 : 화면에 보여질 때 로딩 되고 그 이전에는 blank 이미지가 표시
  - 스크롤이 최하단에 올 경우 다음 리스트 업데이트
  - 한 번에 업데이트 하는 상품은 최대 10개
  

### 상품 리스트

- 위시리스트 포함 상품 : 하트마크 ON

### 위시 리스트
- 위시 리스트만 표시
- 위시 리스트 제거 : 상품 카드 내 하트마크 OFF 시
- 위시 리스트 빈 경우 : "위시 리스트에 담긴 상품이 없습니다" 문구 표시 
