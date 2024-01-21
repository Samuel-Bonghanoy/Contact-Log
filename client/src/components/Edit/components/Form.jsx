function Form() {
  return (
    <>
      <h1 className="justify-center mx-auto mb-4 text-4xl font-semibold text-white justify-self-center">
        Edit Contact
      </h1>
      <div className="flex flex-col items-center gap-5">
        <div className="avatar">
          <div className="w-40 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-3xl font-bold text-white">Alice Adams</p>
        </div>
      </div>

      <p className="self-start my-0 ml-10 text-lg text-white">Details</p>
      <div className="py-0 mx-10 my-0 divider divider-info before:bg-gray-300 after:bg-gray-300"></div>
      <form className="bg-cyan-900  justify-between h-fit py-5 w-[93%] px-6 flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <p className="text-white">First Name</p>
          <input
            type="text"
            placeholder=""
            className="w-[70%] input input-bordered bg-cyan-950"
          />
        </div>

        <div className="flex items-center gap-4">
          <p className="text-white">Last Name</p>
          <input
            type="text"
            placeholder=""
            className="w-[70%] input input-bordered bg-cyan-950"
          />
        </div>

        <div className="flex items-center gap-4">
          <p className="text-white">Contact Number</p>
          <input
            type="text"
            placeholder=""
            className="w-[70%] input input-bordered bg-cyan-950"
          />
        </div>

        <div className="flex items-center gap-4">
          <p className="text-white">Email Address</p>
          <input
            type="text"
            placeholder=""
            className="w-[70%] input input-bordered bg-cyan-950"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="text-white">Description</p>
          <input
            type="text"
            placeholder=""
            className="w-[70%] input input-bordered bg-cyan-950"
          />
        </div>

        <button className="btn btn-success  w-[10%] mt-4">Save Changes</button>
      </form>
    </>
  );
}

export default Form;
