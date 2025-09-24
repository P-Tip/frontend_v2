# P-Tip
피팁은 학생들이 교내에서 필요한 다양한 정보를 하나의 플랫폼에서 빠르고 쉽게 접근할 수 있도록 지원하는 시스템입니다.<br>
현재 학생들이 학사 행정, 장학금, 학식 메뉴 등 여러 경로에 흩어진 정보를 찾는 데 많은 어려움을 겪고 있습니다. 피팁은 이를 해결하기 위해 **사용자 친화적인 통합 정보 제공 플랫폼**을 목표로 개발되며, 장기적으로 학교의 공식 정보 제공 채널로 확장될 가능성을 가지고 있습니다.


## [🔗사이트 방문하기](https://www.ptutip.p-e.kr/)

## 📌 주요 기능
### 💸 **솔선수범 장학금**
- 프로그램명으로 검색
- 금액, 날짜로 필터링 조회
- 프로그램 선택 시 학교 사이트 내 상세 페이지 연결
- 본인의 솔선수범 포인트 조회


## 👥 팀원 소개
| `프론트` 이지원 | `프론트` 이채린 | `프론트` 이주원 | `프론트` 김희진 |
|------|------|------|------|
| <img style="width:250px; height:250px" src = "https://github.com/gbwlxhd97.png"> | <img style="width:250px; height:250px" src = "https://github.com/Lee-chaerin.png"> | <img style="width:250px; height:250px" src = "https://github.com/joowon22.png"> | <img style="width:250px; height:250px" src = "https://github.com/gc1530823.png"> |
| [gbwlxhd97](https://github.com/gbwlxhd97) | [Lee-chaerin](https://github.com/Lee-chaerin) | [joowon22](https://github.com/joowon22) | [gc1530823](https://github.com/gc1530823) 

## 📆 개발 기간
- 2025.02.18 ~ 진행중

## 🛠️ 기술 스택 (frontend)
```sh
- TypeScript
- React + Vite
- React Query (TanStack Query)
- Zustand
- Tailwind CSS + Shadcn
- ESLint + prettier
```

## 🗂️ 폴더 구조
```sh
FRONTEND_V2/
├── public/
│   └── ...
├── src/
│   ├── components/   : 재사용 가능한 UI 컴포넌트
│   ├── constants/    : 상수 관리
│   ├── hooks/        : 커스텀 React Hooks
│   ├── icons/        : 아이콘 관리
│   ├── lib/          : 
│   ├── pages/        : 페이지 컴포넌트(라우팅 단위)
│   ├── services/     : API 호출 및 관련 로직
│   ├── stores/       : 상태 관리
│   ├── types/        : TypeScript 타입 정의
│   ├── utils/        : 유틸리티 함수
|   ├── App.tsx      
│   └── main.tsx     
├── .gitignore
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## 💻 실행 및 빌드 방법
### 1. 설치
```sh
pnpm i
```
### 2. 개발 서버 실행
```sh
pnpm dev
```
### 3. 빌드
```sh
pnpm run build
```
