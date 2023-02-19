# CSS

1.

- background-image 에 바로 opacity를 주면 그 해당 하위 요소들까지 전부 투명도가 바뀌게 된다.
  html/css 에서는 :before 를 통해 가상클래스로 새로운 div를 덧대어 투명도를 조절했는데 react에서는 styled-component를 통해 어떻게 해결할지 난감했다.
  - 해결 :
  ```js
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.3) 10%,
      rgba(255, 255, 255, 0.7) 70%,
      rgba(255, 255, 255, 0.5)
    ),
    url(${pattern});
  ```
  왼쪽부터 시작해서 width 10%까지는 rgba 1번째로, 70%까지는 rgba 2번째로, 마지막은 rgba 3번째로 색을 점진적으로 채워나가는 것인데, 하위 컴포넌트와 상관없이 독립적으로 투명도 조절이 가능하다.

2.

- <hr/> 태그의 색상을 변경하고 싶은데 hr은 자체 태그만으로 기본 색상이 지정되어서 어려움을 겪었다.
    - 해결 :

  ```javascript
  hr {
    background:pink;
    height:1px;
    border:0;
  }
  ```

  background 속성으로 색을, height 로 두께를 정해주고, border:0 로 원래 속성 기본 값을 지워준다.

3. DarkMode

- 다크 모드를 하려고하니 만들어놓은 틀에서 배경색을 바꾸는데 id를 하나하나 찾아야 되는 지경에 이르렀다. 제일 최상위 page에서 모드 선택시 probs로 하위 container들에게 전달하여 전달한 내용(light, dark) 에 따라 색상을 설정하도록 해야겠다. -> probs에 probs 타고 보기 복잡해질 게 분명하니 redux를 사용하도록 하자.
