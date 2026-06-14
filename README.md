# todo-list
javascript
# 프로젝트 제목 : 나만의 ToDo-List

## 프로젝트 간단 소개
사용자가 할 일을 입력하고, 완료/수정/삭제를 할 수 있으며 데이터가 브라우저에 영구적으로 보존되는 반응형 웹 애플리케이션입니다.

## 구현한 주요 기능 목록
- **할 일 추가**: 텍스트 입력 후 버튼 클릭 또는 Enter 키로 할 일 추가 기능
- **할 일 완료**: 완료 버튼 클릭 시 취소선 및 글자색 변경으로 시각적 피드백 제공
- **할 일 수정**: `prompt` 창을 활용한 기존 할 일 내용 수정 기능
- **할 일 삭제**: 배열의 `splice` 메서드를 활용한 항목 삭제 기능
- **데이터 보존**: 브라우저를 새로고침하거나 껐다 켜도 데이터가 유지됨

## 적용된 자바스크립트 핵심 기술
- **DOM Manipulation**: `document.querySelector`, `innerHTML`, `onclick`, `onkeydown` 등
- **LocalStorage**: 브라우저 로컬 저장소를 활용한 데이터 영구 보존 (`getItem`, `setItem`)
- **JSON Object**: 데이터를 저장하고 불러오기 위한 `JSON.stringify()`, `JSON.parse()` 활용
- **Template Literal**: 백틱(`)을 활용한 동적 HTML 문자열 생성
