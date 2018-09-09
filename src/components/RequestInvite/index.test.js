import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import RequestInvite from "./index";

afterEach(cleanup);

test("RequestInvite", async () => {
  const { getByText, getByTestId, container } = render(
    <RequestInvite data-testid="entry" />
  );
  expect(getByTestId("entry")).toHaveTextContent("Broccoli & Co.");
});
