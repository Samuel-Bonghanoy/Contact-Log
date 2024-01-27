import { Link } from "react-router-dom";

export default function Contact1() {
  return (
    <Link
      to="/contact/1"
      className="bg-cyan-900 flex justify-between h-16 w-[93%] px-6 hover:bg-cyan-800 hover:scale-[1.01] hover:shadow-slate-400 transition-all"
    >
      <div className="flex items-center gap-5">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-white text-md">Robert Romeo</p>
          <p className="text-sm">Friend</p>
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
