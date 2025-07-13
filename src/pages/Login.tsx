import type { Component } from "solid-js";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

const Login: Component = () => {
  const [identifier, setIdentifier] = createSignal("");
  const [password, setPassword] = createSignal("");
  const handleLogin = (e: Event) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    if ((userData.username === identifier() || userData.email === identifier() || userData.phone === identifier()) && userData.password === password()) {
      // Redirect to profile setup or dashboard
      window.location.href = "/dashboard";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div class="overflow-x-hidden">
    <div class="font-poppins h-screen  flex flex-col justify-center items-center bg-gradient-to-b from-[#004041] via-[#002929] to-black px-4 ">
    <h1 class="text-4xl text-white sm:text-6xl font-extrabold text-center mb-4">BarterUp</h1>
    <div class="relative z-10 max-w-sm mx-auto bg-gradient-to-b from-[#00635F]/80 to-[#002929]/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
      {/* Judul */}
      <h2 class="text-2xl font-bold text-white ">Welcome Back</h2>
      <p class="text-gray-200 mb-6 text-m">
        Sign in to reconnect and keep swapping skills.
      </p>

      {/* Form */}
      <form class="flex flex-col gap-4 " onSubmit={handleLogin}>
      {/* Identifier: username / email / phone */}
      <input
        type="text"
        name="identifier"
        placeholder="username, email & phone" onInput={e => setIdentifier(e.currentTarget.value)}
        class="w-full px-4 py-2 rounded-lg bg-[#000000]/30 text-gray-100 placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-[#4CE0D2]/50 transition"
      />

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="password" onInput={e => setPassword(e.currentTarget.value)}
        class="w-full px-4 py-2 rounded-lg bg-[#000000]/30 text-gray-100 placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-[#4CE0D2]/50 transition"
      />

      {/* Button */}
      <button type="submit" class="w-full mt-4 py-2 rounded-lg bg-[#4CE0D2] text-black font-semibold hover:bg-[#36C9B9] transition">Log In</button>
    </form>


      {/* Link ke login */}
      <p class="mt-4 text-center text-gray-200 text-sm">
        Dont have an account?{" "}
        <A href="/signup" class="text-[#4CE0D2] hover:underline">
          Sign Up
        </A>
      </p>
    </div>
  </div>
  </div> 

  );
};

export default Login;
