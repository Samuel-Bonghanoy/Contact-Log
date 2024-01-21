import Navbar from "../Navbar";
import Form from "./components/Form";
import Menu from "./components/Menu";

function Edit() {
  return (
    <div className="w-full py-5 overflow-x-hidden h-fit bg-cyan-950">
      <Navbar />
      <div className="mx-10 divider divider-info before:bg-gray-300 after:bg-gray-300"></div>
      <Menu />
      <div className="flex flex-col items-center justify-center w-full h-full gap-3">
        <Form />
      </div>
    </div>
  );
}

export default Edit;
