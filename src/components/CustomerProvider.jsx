import React, { createContext, useState, useEffect } from "react";
import { Readfile, handleWriteFile } from './Databases';
export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);
  const [customers, setCustomers] = useState([]);

  const loadDocuments = async () => {
    try {
      const response = await Readfile("C:/Users/Public/documents.json");
      const parsedDocuments = JSON.parse(response);
      setDocuments(parsedDocuments);
    } catch (error) {
      console.error("Error loading documents:", error);
    }
  };

 /* const updateCustomers = (newCustomers) => {
    setCustomers(newCustomers);
  };
*/
const updateCustomers = (newCustomers) => {
  setCustomers(newCustomers);
  saveCustomersToFile(newCustomers); 
};

const saveCustomersToFile = async (data) => {
  try {
    await handleWriteFile("C:/Users/Public/customers.json", JSON.stringify(data));
  } catch (error) {
    console.error("Error saving customers:", error);
  }
};
  useEffect(() => {
    loadDocuments();
  }, []);

  const refreshDocuments = () => {
    loadDocuments();
  };

  return (
    <CustomerContext.Provider
      value={{
        documents,
        customers,
        refreshDocuments,
        updateCustomers, 
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};