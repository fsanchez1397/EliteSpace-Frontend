import AppProvider from "./Provider";
import AppRouter from "./Router";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { userApi } from "../features/Services/userSlice";
function App() {
  return (
    <AppProvider>
      <ApiProvider api={userApi}>
        <AppRouter />
      </ApiProvider>
    </AppProvider>
  );
}

export default App;
