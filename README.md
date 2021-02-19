# TypeScript Motion Project

Learning TypeScript and Doing a Motion Project with Ellie Teacher

## Directory Structure

```
assets
|-- cool-background.png
|-- layout.png
dist
|-- ...
src
|-- components
|   |-- dialog
|   |   |-- input
|   |   |   |-- media-input.ts
|   |   |   |-- text-input.ts
|   |   |-- dialog.ts
|   |-- page
|   |   |-- item
|   |   |   |-- image.ts
|   |   |   |-- note.ts
|   |   |   |-- todo.ts
|   |   |   |-- video.ts
|   |   |-- page.ts
|   |-- base.ts
|-- app.ts
style
|-- style.ts
index.html
tsconfig.json

```

## Motion Layout

![Motion Layout](./assets/layout.png)<br>
프로젝트의 레이아웃은 위와 같으며 심플한 기능 몇가지를 구현하고 있다.<br>

1. 헤더의 4종류 버튼을 클릭 시 각각 그에 맞는 모달창을 띄워주며 리스트 아이템을 추가할 수 있도록 한다.
2. 추가된 아이템들은 Drag & Drop을 통해 위치를 수정할 수 있다.<br>

+` 이번 프로젝트에서 가장 초점을 두고 있는 것은 객체지향 프로그래밍과 타입스크립트를 사용한 클래스와 인터페이스의 구현이다.`
