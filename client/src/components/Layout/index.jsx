import Contact from "../Contact";
import Contact1 from "../Contacts/Contact1";
import Contact2 from "../Contacts/Contact2";
import Contact3 from "../Contacts/Contact3";
import Contact4 from "../Contacts/Contact4";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

function AppLayout() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="fixed z-50 btn btn-circle bottom-5 right-5"
        onClick={() => {
          navigate("contact/create");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#f9fafa"
          viewBox="0 0 256 256"
        >
          <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
        </svg>
      </button>
      <div className="h-screen py-5 overflow-x-hidden bg-cyan-950">
        <Navbar />
        <div className="mx-10 divider divider-info before:bg-gray-300 after:bg-gray-300"></div>
        <div className="flex flex-col items-center justify-center w-screen gap-3">
          <Contact />
          <Contact1 />
          <Contact2 />
          <Contact3 />
          <Contact4 />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
