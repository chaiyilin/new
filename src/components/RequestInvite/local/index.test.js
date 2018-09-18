import React from "react";
import { render, waitForElement, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import RequestInvite from "..";

afterEach(cleanup);

test("RequestInvite", async () => {
  const { getByText, getByTestId, container } = render(
    <RequestInvite data-testid="entry" />
  );
  const greetingTextNode = await waitForElement(() => getByTestId("entry"));
  expect(getByTestId("entry")).toHaveTextContent("Broccoli & Co.");
});
