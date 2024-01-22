import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[10%] flex  items-center  overflow-hidden">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn ml-10 btn-error w-[10%]"
      >
        Back
      </button>
    </div>
  );
}

export default Menu;
