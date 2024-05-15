import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Store } from "./store/Store";
import BlogDetail from "./pages/BlogDetail";
import ErrorUi from "./components/ErrorUi";

function App() {
  const GlobalContext = useContext(Store);
  const { isLoading, isError } = GlobalContext;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/posts/:id/",
      element: <BlogDetail></BlogDetail>,
    },
  ]);
  const retry = () => {};
  return (
    <div className="App">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-blue-500"></div>
        </div>
      ) : isError ? (
        <ErrorUi></ErrorUi>
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </div>
  );
}

export default App;
