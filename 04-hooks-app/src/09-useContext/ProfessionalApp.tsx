import { RouterProvider } from "react-router/dom";
import { appRouter } from "./pages/router/app.router";
import { UserContextProvider } from "./context/UserContext";

export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className="bg-gradient flex flex-col">
        {/* <h1>Professional App</h1> */}
        <RouterProvider router={appRouter} />
      </div>
    </UserContextProvider>
  );
};
