import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succedds", async () => {
    render(<Async />);

    // role 확인 https://www.w3.org/TR/html-aria/#docconformance
    // ~All~ 은 배열을 반환
    // getAllByRole은 즉시 엘리먼트를 찾으려 함. 비동기함수로 렌더링되는 li는 첫번째 렌더링사이클이 지난 후 생성됨. 그 전에는 초기값인 빈 배열임.
    // findAllByRole : find 쿼리들은 프라미스를 반환함. 테스팅 과정이 성공할 때까지 screen을 여러 차례 평가함. 성공할 때까지 기다림
    const listItemElements = await screen.findAllByRole("listitem");
    //배열의 길이가 0이 아닌지 확인
    expect(listItemElements).not.toHaveLength(0);
  });
});
