import { useState } from "react";

export default function ContectForm() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("Submit");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("http://localhost:3000/contect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("Submit");
      if (res.ok) {
        alert("Form submitted successfully!");
        setForm({ firstname: "", lastname: "", email: "", message: "" });
      } else {
        alert("Submission failed.");
      }
    } catch (err) {
      setStatus("Submit");
      alert("Network error.");
    }
  };

  return (
    <div className="mt-50 ml-50 mr-50  mb-30 bg-blue-100 p-10  text-center  rounded-3xl">
      <form action="" method="POST" onSubmit={handleSubmit}>
        <div className="w-full h-full items-center">
          <label htmlFor="firstname" className="flex justify-center mb-4 ">
            First Name
          </label>
          <input
          name="firstname"
            type="text"
            id="firstname"
            placeholder="Firstname"
            value={form.firstname}
            onChange={handleChange}
            className="w-66 h-10 border rounded-2xl text-center"
          />
        </div>
        <div>
          <label htmlFor="lastname" className="flex mt-3 mb-4 justify-center">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="lastname"
            value={form.lastname}
            onChange={handleChange}
            className="w-66 h-10 border rounded-2xl text-center"
          />
        </div>
        <div>
          <label htmlFor="mail" className="flex mt-3  mb-4 justify-center">
            Email
          </label>
          <input
          name="email"
            type="mail"
            id="mail"
            placeholder="hello@gmail.com"
            value={form.email}
            onChange={handleChange}
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
            className="h-55 w-80 border "
            onChange={handleChange}
            value={form.message}></textarea>
        </div>
        <button
          type="submit"
          className="h-10 w-55 border rounded bg-blue-800 text-white  mb-6 mt-5 text-center ">{status}
          
        </button>
      </form>
    </div>
  );
}
