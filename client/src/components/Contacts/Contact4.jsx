import { Link } from "react-router-dom";

export default function Contact4() {
  return (
    <Link
      to="/contact/1"
      className="bg-cyan-900 flex justify-between h-16 w-[93%] px-6 hover:bg-cyan-800 hover:scale-[1.01] hover:shadow-slate-400 transition-all"
    >
      <div className="flex items-center gap-5">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://st4.depositphotos.com/32856862/38334/i/1600/depositphotos_383346635-stock-photo-handsome-man-serious-face.jpg" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-white text-md">Moe Morrison</p>
          <p className="text-sm">Client</p>
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-sm font-bold text-white hover:text-cyan-400">
          Details
        </button>
      </div>
    </Link>
  );
}
