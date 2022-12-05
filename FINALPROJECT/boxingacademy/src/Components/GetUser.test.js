import React from "react";
import { render, screen } from "@testing-library/react";
import UserList from "./GetUser";
import axios from "axios";

const BASE_URL = "https://localhost:7105/api/BoxingAdmission";

jest.mock("axios");

describe("Add User Component", () => {
  const mockEditUser = jest.fn();

  it("Should have all columns in the header", () => {
    render(<UserList editUser={mockEditUser} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("FathersName")).toBeInTheDocument();
    expect(screen.getByText("Mobile")).toBeInTheDocument();
    expect(screen.getByText("EmailId")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("DateofBirth")).toBeInTheDocument();
    expect(screen.getByText("Weight")).toBeInTheDocument();
    expect(screen.getByText("Height")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });
  it("should return users list while loading", async () => {
    const users = [
      {
        regId: 1,
        regName: "testfname",
        regAddress: "testAddress",
        regFathersName: "testfathersname",
        regMobile: "testmob",
        regEmailId: "testEmailid",
        regPassword: "111111",
        regAge: "11",
        regDateofBirth: "11/7/2000",
        regWeight: "54",
        regHeight: "122",
      },
      {
        regId: 2,
        regName: "testfname",
        regAddress: "testAddress",
        regFathersName: "testfathersname",
        regMobile: "testmob",
        regEmailId: "testEmailid",
        regPassword: "111111",
        regAge: "11",
        regDateofBirth: "11/7/2000",
        regWeight: "54",
        regHeight: "122",
      },
      {
        regId: 3,
        regName: "testfname",
        regAddress: "testAddress",
        regFathersName: "testfathersname",
        regMobile: "testmob",
        regEmailId: "testEmailid",
        regPassword: "111111",
        regAge: "11",
        regDateofBirth: "11/7/2000",
        regWeight: "54",
        regHeight: "122",
      },
    ];
    // Mocking the Axios.get to return the Users value
    axios.get = jest.fn();
    axios.get.mockResolvedValueOnce(users);

    // when
    render(<UserList editUser={mockEditUser} />);

    // then - verify that the get endpoint has been called
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/GetAllEmployees`);
  });
});
