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

