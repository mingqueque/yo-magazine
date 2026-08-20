# 작업 가이드라인

이 문서는 요매거진/노하우집 계열 작업을 진행할 때 지켜야 하는 최소 작업 규칙입니다.
초반 작업 속도를 유지하되, QA 단계에서 수정 위치가 흔들리거나 엉뚱한 영역이 바뀌는 문제를 줄이는 것이 목적입니다.

## 기본 원칙

- 화면마다 임의의 값이 생기지 않게 한다.
- 이미 정한 기준과 다른 값이 필요할 때는 새 값을 즉흥적으로 넣지 말고, 토큰/규칙을 먼저 확장한다.
- 수정 요청이 들어오면 개별 요소만 고치지 말고, 같은 기준을 공유하는 요소가 있는지 확인한다.
- QA에서 특정 위치를 정확히 지칭할 수 있도록 모든 주요 UI에 고유한 이름을 둔다.

예시:

- 기본 본문 폰트는 `--font-body: 14px`이다. 특정 본문만 임의로 `15px`를 넣지 않는다.
- 카드 제목은 `--font-card-title: 15px`를 쓴다. 더 큰 제목이 필요하면 역할을 먼저 정의한다.
- 기본 화면 좌우 여백은 `--space-14: 14px`이다. 특정 섹션만 즉흥적으로 `13px`, `15px`를 넣지 않는다.

## 디자인 해상도 기준

- 모바일 프레임 최대 너비: `--viewport-mobile-max: 430px`
- 모바일 프레임 높이: `--viewport-mobile-height: 860px`
- 데스크톱 미리보기 프레임 높이: `--viewport-desktop-height: 820px`
- 프레임형 화면 전환 기준: `520px`
- 기본 화면 좌우 여백: `--space-14`
- 하단 탭을 고려한 화면 하단 여백: `82px`

## 색상 토큰

색상은 의미 기반 토큰을 우선한다.

- `--color-surface`: 기본 배경
- `--color-surface-soft`: 연한 구분 배경
- `--color-surface-ad`: 광고/보조 배너 배경
- `--color-surface-book`: 책 배너 배경
- `--color-text-primary`: 주요 텍스트
- `--color-text-body`: 본문 텍스트
- `--color-text-secondary`: 보조 텍스트
- `--color-text-subtle`: 더 약한 보조 텍스트/chevron
- `--color-text-book`: 책 배너 보조 텍스트
- `--color-border`: 기본 경계선
- `--color-border-strong`: 뱃지 등 강조 경계선
- `--color-brand-main`: 메인 액션/선택 색
- `--color-brand-pressed`: 메인 액션 누름 상태
- `--color-danger-muted`: 탈퇴/오류 등 위험 계열 보조 색
- `--color-overlay-strong`: 페이지네이션 오버레이

## 폰트 체계

폰트는 역할별 토큰을 사용한다.

- `--font-caption2: 10px`: AD 같은 아주 작은 뱃지
- `--font-tab: 11px`: 하단 탭, compact meta
- `--font-caption: 12px`: 시간, 카테고리, 상태바
- `--font-label: 13px`: 보조 버튼, CTA, 알림 본문
- `--font-body: 14px`: 기본 본문/버튼
- `--font-card-title: 15px`: 게시글 카드 제목, 알림 제목
- `--font-detail-body: 16px`: 상세 본문
- `--font-section-title: 17px`: 섹션 제목
- `--font-title: 18px`: 일반 제목/프로필 이름
- `--font-topbar-title: 20px`: 상단바 제목/히어로 제목
- `--font-detail-title: 22px`: 상세 글 제목/FAB 아이콘
- `--font-back-icon: 30px`: 뒤로가기 아이콘

줄 높이는 `--line-body`, `--line-detail-body`, `--line-title`, `--line-detail-title`를 사용한다.

## 간격 기준

간격은 `--space-*` 토큰을 사용한다.

- 작은 내부 간격: `--space-2`, `--space-3`, `--space-4`, `--space-5`, `--space-6`, `--space-7`, `--space-8`
- 기본 내부 간격: `--space-10`, `--space-11`, `--space-12`, `--space-14`, `--space-15`, `--space-16`
- 큰 섹션 간격: `--space-18`, `--space-20`, `--space-22`, `--space-24`, `--space-28`, `--space-32`

새 간격이 필요하면 기존 토큰 중 가장 가까운 값을 먼저 검토한다.

## Radius

- `--radius-xs`: 작은 뱃지
- `--radius-card`: 매거진 카드/메뉴 내부 항목
- `--radius-control`: 일반 버튼/입력창
- `--radius-panel`: 메뉴 팝오버/안내 박스
- `--radius-frame`: 데스크톱 미리보기 프레임
- `--radius-pill`: 칩, pill 버튼, 댓글 입력 영역
- `--radius-circle`: 원형 버튼/아바타

## Elevation / Shadow

- `--shadow-menu`: 댓글 더보기 메뉴
- `--shadow-floating-input`: 상세 화면 하단 댓글 입력창

그림자는 새로 직접 넣지 않고, 단계가 필요할 때 이 항목에 먼저 추가한다.

## 아이콘과 터치 영역

- 상단 아이콘 버튼: `--size-icon-button: 36px`
- 작은 원형 메뉴 버튼: `--size-icon-button-sm: 34px`
- 최소 터치 영역: `--size-touch: 44px`
- 입력/등록 버튼 높이: `--size-input: 48px`
- FAB: `--size-fab: 52px`
- 기본 아이콘: `--size-icon-md: 20px`
- 상단바 아이콘: `--size-icon-topbar: 21px`
- 큰 아이콘: `--size-icon-lg: 22px`

## 상태 화면 원칙

아래 상태는 화면/컴포넌트별로 누락하지 않는다.

- 로딩 상태
- 빈 화면: `.empty-state`
- 오류 상태: `.error-state`
- 비활성 상태
- 선택 상태: `.active`
- 호버/포커스 상태가 필요한 경우

현재 리스트 빈 화면 예시는 다음 이름을 사용한다.

- `CommunityPostCard_emptyState`
- `LikedPostCard_emptyState`
- `NotificationList_emptyState`

## 네이밍 원칙

- 랜덤 이름은 절대 사용하지 않는다.
- QA에서 부를 수 있도록 주요 UI에는 `data-ui` 값을 넣는다.
- 이름은 `화면/영역 + 컴포넌트 + 역할` 순서로 짓는다.
- 반복 항목은 `_1`, `_2`처럼 화면 순서 기준 번호를 붙인다.

현재 프로젝트 예시:

- `AppTopbar_title`
- `HomeHeroCard_book_subTitle`
- `HomePopularSection_moreButton`
- `HomeMagazineCard_1`
- `CommunityCategoryChip_1`
- `CommunityPostCard_1_title`
- `PostDetailCard_body`
- `PostCommentCard_1_likeButton`
- `MyPageProfileCard_name`
- `NotificationCard_1_body`

수정 요청은 아래처럼 가능해야 한다.

> `CommunityPostCard_1_title`의 폰트 사이즈를 `--font-card-title`에서 `--font-title`로 바꾸고, color token은 `--color-brand-main`으로 적용해주세요.

## QA 수정 원칙

- 이미지 기반 QA를 받을 때, 먼저 수정 대상의 `data-ui` 이름을 확인한다.
- 한 수정이 다른 영역에 영향을 주지 않도록 컴포넌트/토큰 단위로 반영한다.
- 동일한 문제가 여러 곳에 있으면 개별 수정이 아니라 공통 토큰을 수정한다.
- 수정 전후로 기본 상태, 선택 상태, 빈 상태를 함께 확인한다.

## 앞으로의 작업 방식

- 새 화면이나 컴포넌트를 만들기 전에 필요한 토큰과 `data-ui` 이름을 먼저 정한다.
- CSS 작성 시 색상, 폰트, 간격, radius, shadow, 크기는 토큰을 우선 사용한다.
- 새 리스트를 만들면 빈 화면을 함께 만든다.
- QA 수정 요청이 들어오면 `data-ui` 이름 기준으로 위치를 먼저 고정하고 작업한다.
