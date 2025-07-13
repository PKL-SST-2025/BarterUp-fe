// src/pages/Dashboard.tsx
import type { Component } from "solid-js";
import Navbar from '../components/Navbar';

const Profile: Component = () => {
  // Retrieve user data from local storage
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const profilePicture = localStorage.getItem("profilePicture");

  return (
    <div class="overflow-x-hidden"><Navbar />
      <div class="font-poppins min-h-screen flex flex-col items-center justify-center bg-black px-4">
        
        <h1 class="text-4xl text-white sm:text-6xl font-extrabold text-center mb-4">Welcome to Your Dashboard</h1>
        <div class="relative z-10 max-w-md mx-auto bg-gradient-to-b from-[#00635F]/80 to-[#002929]/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
          <h2 class="text-2xl font-bold text-white mb-2">User  Profile</h2>
          {profilePicture && (
            <img src={profilePicture} alt="Profile" class="w-32 h-32 rounded-full mb-4" />
          )}
          <p class="text-gray-200">Username: {user.username}</p>
          <p class="text-gray-200">Email: {user.email}</p>
          <p class="text-gray-200">Phone: {user.phone}</p>
          <p class="text-gray-200">Date of Birth: {userDetails.dateOfBirth}</p>
          <p class="text-gray-200">Primary Skill: {userDetails.primarySkill}</p>
          <p class="text-gray-200">Skill to Learn: {userDetails.skillToLearn}</p>
          <p class="text-gray-200">Bio: {userDetails.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
