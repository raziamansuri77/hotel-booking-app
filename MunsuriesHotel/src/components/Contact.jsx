import React from "react";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="text-[45px] font-bold text-center ">CONTACT US</div>
      <div className="flex py-8 gap-8 ">
        <form action="" className="space-y-8">
          <input
            type="text"
            placeholder="Name"
            className="w-[100%] p-4 shadow-sm shadow-red-200 outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-[100%] p-4 shadow-sm shadow-red-200 outline-none"
          />{" "}
          <input
            type="text"
            placeholder="Phone Number"
            className="w-[100%] p-4 shadow-sm shadow-red-200 outline-none"
          />
          <textarea
            name=""
            id=""
            className="w-[100%] p-4 shadow-sm shadow-red-200 h-[130px] outline-none"
          >
            Message
          </textarea>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6877.207675464418!2d77.54069764728342!3d30.47565723409744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f18202567aa3d%3A0x7c2bf42681b61e02!2sMadrasa%20Quadria%20Missarwala!5e0!3m2!1sen!2sin!4v1717575511554!5m2!1sen!2sin"
          width="950"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <button className="bg-[#0F1521] Py-8 text-white text-[20px] w-[180px] h-[60px] rounded-[50px] font-semibold">
        SEND
      </button>
    </div>
  );
}
