# 금바다 — 포트폴리오

흩어진 시스템을 잇는 백엔드·풀스택 엔지니어의 개인 포트폴리오.
프레임워크·빌드 도구 없이 순수 HTML/CSS/JS로 만든 단일 페이지 정적 사이트입니다.

## 구성

```
.
├── index.html          # 전체 페이지 (단일 롱스크롤)
├── assets/
│   ├── style.css       # 스타일 (다크 테크 / 잉크 + 황동)
│   └── app.js          # 내비게이션 상호작용 (스크롤 스파이, 모바일 메뉴)
└── README.md
```

> `PORTFOLIO_DATA.md`, 이력서 PDF 등 개인정보가 담긴 파일은 `.gitignore`로 제외되어
> 공개 저장소에 올라가지 않습니다.

## 로컬에서 보기

빌드 과정이 없습니다. 파일을 브라우저로 바로 열면 됩니다.

```bash
# Windows
start index.html
```

또는 간단한 로컬 서버로:

```bash
python -m http.server 8000
# http://localhost:8000
```

Pretendard 웹폰트는 CDN(jsdelivr)에서 로드하므로 인터넷 연결이 필요합니다.

## 수정하는 곳

- **연락처**: `index.html`의 `#contact` 섹션. 이메일은 `mailto:` 링크, GitHub 주소는
  `github.com/<아이디>` 부분을 실제 주소로 교체하세요.
- **색상 / 폰트**: `assets/style.css` 상단 `:root`의 CSS 변수(`--brass`, `--bg` 등).
- **프로젝트 / 경력 / 스택**: `index.html`의 각 `<section>` 안 내용.

## GitHub Pages 배포

**사용자 페이지** (`<아이디>.github.io`)
1. `<아이디>.github.io` 이름으로 저장소 생성
2. 이 파일들을 push
3. Settings → Pages → Source를 배포 브랜치(`main` 또는 `master`) / `root`로 지정
4. `https://<아이디>.github.io` 에서 확인

**프로젝트 페이지** (`<아이디>.github.io/<저장소명>`)
1. 원하는 이름의 저장소에 push
2. Settings → Pages에서 브랜치 / `root` 지정
3. `https://<아이디>.github.io/<저장소명>` 에서 확인

정적 파일만 있으므로 별도 빌드 액션은 필요 없습니다.
