import React, { createContext, useContext } from "react";
import { adminListData, AdminList } from "../data/AdminList";

const AdminContext = createContext<AdminList[]>(adminListData);

interface AdminProviderProps {
    children: React.ReactNode
}

const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
    return <AdminContext.Provider value={adminListData}>{children}</AdminContext.Provider>
};

const useAdminContext = () => {
    return useContext(AdminContext);
};

export { AdminProvider, AdminContext, useAdminContext };


// import React, { createContext, useContext } from "react";
// import { adminListData, AdminList } from "../data/AdminList";

// interface AdminContextProps {
//   // Define the type for the context value
//   adminData: AdminList;
// }

// const AdminContext = createContext<AdminContextProps | null>(null);

// interface AdminProviderProps {
//   children: React.ReactNode;
// }

// const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
//   // Use the correct shape for the context value
//   const contextValue: AdminContextProps = {
//     adminData: adminListData,
//   };

//   return (
//     <AdminContext.Provider value={contextValue}>{children}</AdminContext.Provider>
//   );
// };

// const useAdminContext = () => {
//   // Use the correct type for the return value
//   const context = useContext(AdminContext);

//   if (!context) {
//     throw new Error("useAdminContext must be used within an AdminProvider");
//   }

//   return context.adminData;
// };

// export { AdminProvider, AdminContext, useAdminContext };
