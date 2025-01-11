import React, { createContext, useState, useContext } from "react";

const initialDataset = [
  {
    name: "Alice Johnson",
    phoneNo: "1234567890",
    emailId: "alice.johnson@example.com",
    type: "Recruiter",
    location: "New York",
    function: "Business Development"
  },
  {
    name: "Bob Smith",
    phoneNo: "9876543210",
    emailId: "bob.smith@example.com",
    type: "Employee",
    location: "San Francisco",
    function: "Consulting"
  },
  {
    name: "Charlie Brown",
    phoneNo: "4567891230",
    emailId: "charlie.brown@example.com",
    type: "Recruiter",
    location: "Chicago",
    function: "Marketing"
  },
  {
    name: "Diana Prince",
    phoneNo: "7891234560",
    emailId: "diana.prince@example.com",
    type: "Employee",
    location: "Boston",
    function: "Human Resources"
  },
  {
    name: "Ethan Hunt",
    phoneNo: "3216549870",
    emailId: "ethan.hunt@example.com",
    type: "Recruiter",
    location: "Seattle",
    function: "Sales"
  },
  {
    name: "Fiona Gallagher",
    phoneNo: "6543217890",
    emailId: "fiona.gallagher@example.com",
    type: "Employee",
    location: "Austin",
    function: "Consulting"
  },
  {
    name: "George Mason",
    phoneNo: "8527419630",
    emailId: "george.mason@example.com",
    type: "Recruiter",
    location: "Denver",
    function: "Business Development"
  },
  {
    name: "Hannah Baker",
    phoneNo: "9632587410",
    emailId: "hannah.baker@example.com",
    type: "Employee",
    location: "Atlanta",
    function: "Finance"
  },
  {
    name: "Isaac Newton",
    phoneNo: "7418529630",
    emailId: "isaac.newton@example.com",
    type: "Recruiter",
    location: "Phoenix",
    function: "IT"
  },
  {
    name: "Julia Roberts",
    phoneNo: "2589631470",
    emailId: "julia.roberts@example.com",
    type: "Employee",
    location: "Los Angeles",
    function: "Operations"
  }
];

const DatasetContext = createContext();

export const DatasetProvider = ({ children }) => {
  const [dataset, setDataset] = useState(initialDataset); 

  const updateDataset = (newDataset) => {
    setDataset(newDataset);
  };

  return (
    <DatasetContext.Provider value={{ dataset, updateDataset }}>
      {children}
    </DatasetContext.Provider>
  );
};

export const useDataset = () => useContext(DatasetContext);

export default DatasetContext;
