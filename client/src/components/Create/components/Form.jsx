function Form() {
  return (
    <>
      <h1 className="justify-center mx-auto mb-4 text-4xl font-semibold text-white justify-self-center">
        Create Contact
      </h1>
      <div className="flex flex-col items-center gap-5">
        <div className="avatar">
          <div className="w-40 rounded-full">
            <img src="https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg" />
          </div>
        </div>
        <div className="flex flex-col"></div>
      </div>

      <p className="self-start my-0 ml-10 text-lg text-white">Details</p>
      <div className="py-0 mx-10 my-0 divider divider-info before:bg-gray-300 after:bg-gray-300"></div>
      <form className="bg-cyan-900  justify-between h-fit py-5 w-[93%] px-6 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-white">First Name</p>
          <input
            type="text"
            placeholder=""
            className="w-[70%] input input-bordered bg-cyan-950"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white">Last Name</p>
          <input
            type="text"
            placeholder=""
            className="w-[70%] input input-bordered bg-cyan-950"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white">Contact Number</p>
          <input
            type="text"
            placeholder=""
            className="w-[70%] input input-bordered bg-cyan-950"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white">Email Address</p>
          <input
            type="text"
            placeholder=""
            className="w-[70%] input input-bordered bg-cyan-950"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white">Description</p>
          <input
            type="text"
            placeholder=""
            className="w-[70%] input input-bordered bg-cyan-950"
          />
        </div>

        <button className="btn btn-success  w-[10%] mt-4">Save Contact</button>
      </form>
    </>
  );
}

export default Form;
