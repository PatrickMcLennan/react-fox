import React from "react";

import { act, cleanup, render } from "@testing-library/react";
import { App } from "./App";
import "@testing-library/jest-dom";

const { queryByTestId } = render(<App />);
const [h1, button] = [queryByTestId(`h1`), queryByTestId(`button`)];

afterEach(cleanup);

test(`h1`, () => expect(h1.textContent).toBe(`Hello World!`));
test(`button`, () => {
  expect(button.textContent).toBe(`0`);
  act(() => {
    button.dispatchEvent(new MouseEvent("click"));
  });
  console.log(button.textContent);
  expect(button.textContent).toBe(`1`);
});
