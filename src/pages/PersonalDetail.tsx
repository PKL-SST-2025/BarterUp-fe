// src/pages/PersonalDetail.tsx
import type { Component } from "solid-js";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

const PersonalDetail: Component = () => {
  const [day, setDay] = createSignal("");
  const [month, setMonth] = createSignal("");
  const [year, setYear] = createSignal("");
  const [primarySkill, setPrimarySkill] = createSignal("");
  const [skillToLearn, setSkillToLearn] = createSignal("");
  const [bio, setBio] = createSignal("");
  const [error, setError] = createSignal("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // Validate fields
    if (!day() || !month() || !year() || !primarySkill() || !skillToLearn() || !bio()) {
      setError("All fields are required.");
      return;
    }
    setError(""); // Clear error message if validation passes
    const userDetails = {
      dateOfBirth: `${day()}/${month()}/${year()}`,
      primarySkill: primarySkill(),
      skillToLearn: skillToLearn(),
      bio: bio(),
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    // Redirect to upload profile page
    window.location.href = "/signup/upload";
  };

  return (
    <div class="overflow-x-hidden">
      <div class="font-poppins min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-[#004041] via-[#002929] to-black">
        <div class="w-full max-w-md bg-gradient-to-b from-[#00635F]/80 to-[#002929]/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h2 class="text-2xl font-bold text-white mb-1">Personal Detail</h2>
          <p class="text-gray-200 text-sm mb-6">
            A few details help us pair you with the best skill matches.
          </p>

          {error() && <p class="text-red-500">{error()}</p>} {/* Display error message */}
          <form class="flex flex-col gap-4" onSubmit={handleSubmit} >
            {/* Date of Birth */}
            <label class="text-gray-200 text-sm">Date of birth</label>
            <div class="flex gap-2">
              <input
                type="text"
                placeholder="day"
                value={day()}
                onInput={e => setDay(e.currentTarget.value)}
                class="flex-1 min-w-0 px-4 py-2 rounded-lg bg-[#000]/30 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CE0D2]/50"
              />
              <input
                type="text"
                placeholder="month"
                value={month()}
                onInput={e => setMonth(e.currentTarget.value)}
                class="flex-1 min-w-0 px-4 py-2 rounded-lg bg-[#000]/30 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CE0D2]/50"
              />
              <input
                type="text"
                placeholder="year"
                value={year()}
                onInput={e => setYear(e.currentTarget.value)}
                class="flex-1 min-w-0 px-4 py-2 rounded-lg bg-[#000]/30 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CE0D2]/50"
              />
            </div>

            {/* Primary Skill */}
            <label class="text-gray-200 text-sm">Primary Skill</label>
            <select
              value={primarySkill()}
              onChange={e => setPrimarySkill(e.currentTarget.value)}
              class="w-full px-4 py-2 rounded-lg bg-[#000]/30 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#4CE0D2]/50"
            >
              <option value="" disabled>
                Choose your top skill
              </option>
              <option>Music</option>
              <option>Art</option>
              <option>Cooking</option>
              <option>Photography</option>
              <option>Design</option>
              <option>Programming</option>
              <option>Photography</option>   
              <option>Design</option>
              <option>Writing</option>
              <option>Fitness</option>
              <option>Gardening</option>
            </select>

            {/* Skill to Learn */}
            <label class="text-gray-200 text-sm">Skill to Learn</label>
            <select
              value={skillToLearn()}
              onChange={e => setSkillToLearn(e.currentTarget.value)}
              class="w-full px-4 py-2 rounded-lg bg-[#000]/30 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#4CE0D2]/50"
            >
              <option value="" disabled>
                Choose a skill you'd like to learn
              </option>
              <option>Music</option>
              <option>Art</option>
              <option>Cooking</option>
              <option>Photography</option>
              <option>Design</option>
              <option>Programming</option>
              <option>Photography</option>   
              <option>Design</option>
              <option>Writing</option>
              <option>Fitness</option>
              <option>Gardening</option>
            </select>

            {/* Bio */}
            <label class="text-gray-200 text-sm">Bio</label>
            <textarea
              placeholder="Write a brief intro (eg., your background, interests, and goals)"
              value={bio()}
              onInput={e => setBio(e.currentTarget.value)}
              class="w-full px-4 py-2 rounded-lg bg-[#000]/30 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CE0D2]/50 h-24 resize-none"
            />

            {/* Navigation Buttons */}
            <div class="flex justify-between mt-4">
              <A href="/signup" class="px-6 py-2 text-[#4CE0D2] border-2 border-[#4CE0D2] rounded-lg font-semibold hover:bg-[#4CE0D2]/10">Back</A>
              <button type="submit" class="px-6 py-2 rounded-lg bg-[#4CE0D2] text-black font-semibold hover:bg-[#36C9B9] transition">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
