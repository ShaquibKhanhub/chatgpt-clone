import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./layouts/rootLayout/RootLayout";
import Homepage from "./routes/homepage/Homepage";
import SignInPage from "./routes/signInPage/SignInPage";
import SignUpPage from "./routes/signUpPage/SignUpPage";
import ChatPage from "./routes/chatPage/ChatPage";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout";
import DashboardPage from "./routes/dashboardPage/DashboardPage";



const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
