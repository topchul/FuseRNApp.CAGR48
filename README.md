# 📱 FuseRNApp.CAGR48

> 사용자 상태 인식 및 알림 UX 시뮬레이션 앱 (React Native + Expo)

**FuseRNApp.CAGR48**은 사용자의 **활동 상태(앉기, 걷기, 이동)**와 **위치 정보**를 기반으로, 특정 조건에서 알림을 주거나 시각적 피드백을 제공하는 UX를 실험하기 위한 앱입니다.

본 프로젝트는 실제 센서 연동 이전에 **Dummy 상태와 시나리오 기반 시뮬레이션**으로 UX 구조를 설계하며, 향후 네이티브 기능 확장을 고려한 구조로 개발됩니다.

---

## ✨ 프로젝트 목표

- React Native(Expo) 환경에서 UX 중심 구조 실험
- Context API로 상태 관리 구성
- TypeScript 기반 구조 설계
- 활동 상태 변화에 따른 알림 인터페이스 시뮬레이션
- 향후 센서/위치 연동 확장 대비한 유연한 아키텍처 설계

---

## 🧱 기술 스택

- **React Native (Expo Managed Workflow)**
- **TypeScript**
- **Context API (React 기본 상태관리)**
- **Expo Go 앱**
- **Visual Studio Code**

---

## 🗂 디렉토리 구조

```plain/text
FuseRNApp.CAGR48/
├── assets/              # 이미지, 아이콘 등 정적 자원
├── components/          # 재사용 가능한 컴포넌트
├── contexts/            # Context API 상태 관리
├── screens/             # 화면 단위 컴포넌트
├── App.tsx              # 앱 루트
├── package.json
└── README.md
```

---

## 🚀 실행 방법

1. 의존성 설치
```bash
npm install
```

2. 개발 서버 실행
```bash
npx expo start
```

3. QR 코드 스캔  
   → Expo Go 앱에서 실행

---

## 📌 현재 구현 단계 (v1.5)

- [x] Expo + TypeScript 환경 구성
- [x] Context API 기반 활동 상태 시뮬레이션
- [x] 활동 시간 Dummy 증가 처리
- [ ] 버튼을 통한 상태 수동 변경 UX 구현
- [ ] 캘린더 시각화 UI 구성

---

## 🛤️ 향후 확장 계획 (v2.0~)

- 실제 센서 데이터(CoreMotion, ActivityRecognition) 연동
- 포그라운드 서비스(Android) / Live Activities(iOS) 연동
- 세션 기록 저장(SQLite 등) + 캘린더 연계
- Web 대시보드(fuse.cagr48.com)와의 연계

---

## 🧪 학습 및 실험 목적

이 앱은 사용자의 **일상적 상태 변화**(예: 앉아 있음, 걷는 중, 특정 장소 진입 등)를 기반으로  
**적절한 타이밍에 알림을 제공하고, 사용자 반응을 유도하는 UX 구조**를 시뮬레이션하는 데 목적이 있습니다.

향후 실사용 데이터 연동 및 자동화된 행동 피드백 시스템으로 발전할 수 있는 기반 구조를 갖추고 있습니다.

---

## 📄 라이선스

MIT License

---

> **Designed for Fuse UX by CAGR48**
