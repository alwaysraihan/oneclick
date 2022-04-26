import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/Authentication/Login";
import RequireAuth from "./Pages/Authentication/requireAuth";
import SignUp from "./Pages/Authentication/SignUp";
import Checkout from "./Pages/Checkout/Checkout";
import Footer from "./Pages/HomePage/Footer/Footer";
import Header from "./Pages/HomePage/Header/Header";
import Home from "./Pages/HomePage/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFoun";

function App() {
  return (
    <>
      <div className="min-h-[94vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route
            path="/checkout/:id"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
