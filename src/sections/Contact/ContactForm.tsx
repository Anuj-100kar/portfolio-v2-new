import { useState } from "react";
import API from "../../api/contact";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post("/contact", formData);

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
      />

      <input
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
      />

      <textarea
        rows={6}
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 outline-none focus:border-blue-500 resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="
          bg-blue-600
          hover:bg-blue-500
          px-8
          py-4
          rounded-xl
          font-semibold
          transition
          disabled:opacity-50
        "
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

    </form>
  );
}