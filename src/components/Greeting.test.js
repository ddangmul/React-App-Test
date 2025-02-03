import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

// 하나의 컴포넌트에 실행하는 여러 테스트를 하나 또는 여럿의 suit에 그룹화
describe("Greetin component", () => {
  // 테스트함수 추가

  test("renders Hello World as a text", () => {
    /* 세 가지 A를 준비해 테스트 작성
    1. Arrange 준비 : 테스트하고자 하는 컴포넌트를 렌더링
    2. Act 실행 : 실제로 테스트하고자 하는 걸 테스트 실행
    3. Assert 단언 : 결과를 단언. 브라우저상에서 보이는 아웃풋을 검토한 후 예상과 같은지 확인
    */

    // Arrange - Greeting 컴포넌트 엘리먼트 생성
    render(<Greeting />);

    // Act
    // ... noting

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
});
