import type { Component } from "solid-js";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

const Signup: Component = () => {
  const [username, setUsername] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [phone, setPhone] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [error, setError] = createSignal("");

  const handleSignup = (e: Event) => {
  e.preventDefault();
  // Validate fields
  if (!username() || !email() || !password()) {
    setError("Username, email, and password are required.");
    return;
  }
  setError(""); // Clear error message if validation passes
  // Store user data in local storage
  const userData = {
    username: username(),
    email: email(),
    phone: phone(),
    password: password(),
  };
  localStorage.setItem("user", JSON.stringify(userData));
  // Redirect to personal detail page
  window.location.href = "/signup/personal";
};

  return (
    <div class="overflow-x-hidden">
    <div class="font-poppins h-screen  flex flex-col justify-center items-center bg-gradient-to-b from-[#004041] via-[#002929] to-black px-4 ">
    <h1 class="text-4xl text-white sm:text-6xl font-extrabold text-center mb-4 ">BarterUp</h1>
    <div class="relative z-10 max-w-sm mx-auto bg-gradient-to-b from-[#00635F]/80 to-[#002929]/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
      {/* Judul */}
      <h2 class="text-2xl font-bold text-white ">Create Account</h2>
      <p class="text-gray-200 mb-6 text-m">
        Create an account and start swapping skills.
      </p>
      {error() && <p class="text-red-500">{error()}</p>} {/* Display error message */}

      {/* Form */}
      <form class="flex flex-col gap-4" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username" onInput={e => setUsername(e.currentTarget.value)}
          class="w-full px-4 py-2 rounded-lg bg-[#000000]/30 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CE0D2]/50"
        />
        <input
          type="email"
          placeholder="Email" onInput={e => setEmail(e.currentTarget.value)}
          class="w-full px-4 py-2 rounded-lg bg-[#000000]/30 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CE0D2]/50"
        />
        <input
          type="tel"
          placeholder="Phone" onInput={e => setPhone(e.currentTarget.value)}
          class="w-full px-4 py-2 rounded-lg bg-[#000000]/30 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CE0D2]/50"
        />
        <input
          type="password"
          placeholder="Password" onInput={e => setPassword(e.currentTarget.value)}
          class="w-full px-4 py-2 rounded-lg bg-[#000000]/30 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CE0D2]/50"
        />

        <button type="submit" class="w-full mt-4 py-2 rounded-lg bg-[#4CE0D2] text-black font-semibold hover:bg-[#36C9B9] transition">Create Account</button>
      </form>

      {/* Link ke login */}
      <p class="mt-4 text-center text-gray-200 text-sm">
        Already have an account?{" "}
        <A href="/login" class="text-[#4CE0D2] hover:underline">
          Log In
        </A>
      </p>
    </div>
  </div>
  </div>

  );
};

export default Signup;
