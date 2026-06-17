import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // এটি যোগ করুন
import { router } from "./app/routes";             // রাউটারটি ইমপোর্ট করুন
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} /> // App কম্পোনেন্টের পরিবর্তে RouterProvider দিন
);