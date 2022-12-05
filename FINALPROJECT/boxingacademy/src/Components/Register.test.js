import React from "react";
import { render } from "@testing-library/react";
import Register from "./Register";

describe("Add User Component", () => {
  const mockFormSubmit = jest.fn();
  const stubbedUserData = {
    regId: "",
    regName: "",
    regAddress: "",
    regFathersName: "",
    regMobile: "",
    regEmailId: "",
    regPassword: "",
    regAge: "",
    regDateofBirth: "",
    regWeight: "",
    regHeight: ""
 };

  it("Show all input fields with empty value", () => {
    const { getByTestId } = render(
      <Register onFormSubmit={mockFormSubmit} user={stubbedUserData} />
    );

    expect(getByTestId("regName").value).toBe("");
    expect(getByTestId("regAddress").value).toBe("");
    expect(getByTestId("regFathersName").value).toBe("");
    expect(getByTestId("regMobile").value).toBe("");
    expect(getByTestId("regEmailId").value).toBe("");
    expect(getByTestId("regPassword").value).toBe("");
    expect(getByTestId("regAge").value).toBe("");
    expect(getByTestId("regDateofBirth").value).toBe("");
    expect(getByTestId("regWeight").value).toBe("");
    expect(getByTestId("regHeight").value).toBe("");
  });
});
