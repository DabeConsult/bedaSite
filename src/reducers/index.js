import React, { createContext, useEffect, useState } from "react";
import runFun from "../pages/GetData";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const content = await runFun();
          setData(content);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      };

    fetchData();
    
  }, []);

  return(
    <DataContext.Provider value={{data, loading}}>
        {children}
    </DataContext.Provider>
  )
};


export default DataContext;
