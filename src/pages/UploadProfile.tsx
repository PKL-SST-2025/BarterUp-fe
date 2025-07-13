// src/pages/PersonalDetail.tsx
import type { Component } from "solid-js";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

const UploadProfile: Component = () => {
  const [file, setFile] = createSignal<File | null>(null);
  const [error, setError] = createSignal("");
  const handleFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      setFile(target.files[0]);
      setError(""); // Clear error message if a file is selected
    }
  };
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (!file()) {
      setError("Please upload a profile picture.");
      return;
    }
    setError(""); // Clear error message if validation passes
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target?.result;
      localStorage.setItem("profilePicture", imageUrl as string);
      // Redirect to a welcome or dashboard page after successful upload
      window.location.href = "/dashboard"; // Change this to your desired route
    };
    reader.readAsDataURL(file()!);
  };

  return (
    <div class="overflow-x-hidden">
      <div class="font-poppins min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-[#004041] via-[#002929] to-black">
        <div class="w-full max-w-md bg-gradient-to-b from-[#00635F]/80 to-[#002929]/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h2 class="text-2xl font-bold text-white mb-1">Upload your Profile Picture</h2>
          <p class="text-gray-200 text-sm mb-6">
          Personalize your account with a profile picture upload          
          </p>

          {error() && <p class="text-red-500">{error()}</p>} {/* Display error message */}
          <form class="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Upload Box */}            
            <div class="flex items-center text-center tjustify-center">
              <label for="dropzone-file"
                    class="flex flex-col items-center justify-center
                          w-full min-w-[200px] max-w-xs aspect-square
                          p-6 m-4
                          cursor-pointer bg-gray-50 hover:bg-gray-100 transition rounded-2xl">
                <div class="flex flex-col items-center justify-center space-y-2">
                  <svg class="w-8 h-8 text-gray-800" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 
                            5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0
                            0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p class="text-sm text-gray-800"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                  <p class="text-xs text-gray-600">SVG, PNG, JPG or GIF</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" accept="image/*" onChange={handleFileChange} />
              </label>
            </div>
            {/* Navigation Buttons */}
            <div class="flex justify-between mt-4">
              <A href="/signup/personal" class="px-6 py-2 text-[#4CE0D2] border-2 border-[#4CE0D2] rounded-lg font-semibold hover:bg-[#4CE0D2]/10">Back</A>
              <button type="submit" class="px-6 py-2 rounded-lg bg-[#4CE0D2] text-black font-semibold hover:bg-[#36C9B9] transition">Done</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadProfile;
