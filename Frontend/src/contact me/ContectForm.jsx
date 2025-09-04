export default function ContectForm() {
  return (
    <div className="mt-50 ml-50 mr-50  mb-30 bg-blue-100 p-10  text-center  rounded-3xl">
      <form action="">
        <div className="w-full h-full items-center">
        <label htmlFor="Firstname" className="flex justify-center mb-4 ">
          First Name
        </label>
        <input
          type="text"
          id="firstname"
          placeholder="Firstname"
          className="w-66 h-10 border rounded-2xl text-center"
        />
        </div>
        <div>
        <label htmlFor="lastname" className="flex mt-3 mb-4 justify-center">
          Last Name
        </label>
        <input
          type="text"
          id="lastname"
          placeholder="lastname"
          className="w-66 h-10 border rounded-2xl text-center"
        />
        </div>
        <div>
        <label htmlFor="mail" className="flex mt-3  mb-4 justify-center">
          Email
        </label>
        <input
          type="mail"
          id="mail"
          placeholder="hello@gmail.com"
          className="w-66 h-10 border rounded-2xl text-center "
        />
        </div>
        <div>
        <label htmlFor="message" className="flex mt-3 mb-4 justify-center">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="write message here"
          className="h-55 w-80 border "></textarea>
          </div>
      </form>
      <button className="h-10 w-55 border rounded bg-blue-800 text-white  mb-6 mt-5 text-center ">Submit</button>
    </div>
  );
}
