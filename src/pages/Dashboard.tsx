// src/pages/Dashboard.tsx
import type { Component } from "solid-js";
import Navbar from '../components/Navbar';
import { createSignal, For, Show } from "solid-js";

// import image assets
import W1 from '../assets/W1.jpg';
import W2 from '../assets/W2.jpg';
import W3 from '../assets/W3.jpg';

import Male1 from "../assets/male1.jpg";
import Male2 from "../assets/male2.jpg";


const Dashboard: Component = () => {
  // search query state
  const [query, setQuery] = createSignal("");

  // contoh data posts
  const posts = [
    {
      id: 1,
      author: "Rina Suryani",
      avatar: W1,
      role: "Community Manager",
      content:
        `Senang sekali memperkenalkan BarterUp ke komunitas lokal! 🎉
        Kami percaya setiap orang memiliki keahlian unik yang bisa dibagikan.
        Di BarterUp kamu dapat menukar skill memasak, berbahasa asing, hingga coding.
        Baik kamu ingin belajar memasak resep tradisional maupun menguasai teknik debugging,
        semuanya bisa bertukar secara langsung dengan tetangga atau teman baru.
        Yuk, mulai perjalanan belajarmu dengan cara yang lebih dekat, terjangkau, dan sosial!`,
      comments: [
        { id: 1, user: "Agus", text: "Keren, Rina! Bagaimana cara daftar dan mulai post skill ku?" },
        { id: 2, user: "Dewi", text: "Aku mau gabung juga nih 😊 Bisa jelaskan langkah-langkahnya?" },
      ],
    },
    {
      id: 2,
      author: "Agus Yuni",
      avatar: Male1,
      role: "Desain Grafis",
      content:
        `Halo teman BarterUp! Aku sedang mendalami bahasa Spanyol 🇪🇸 dan ingin bantu kalian desain konten visual.
        Ayo bergabung untuk sesi tukar skill: aku ajarkan dasar-dasar tipografi dan layout,
        kamu bisa ajari aku percakapan sehari-hari dalam bahasa Spanyol.
        Kita bisa atur jadwal mingguan secara offline atau virtual sesuai kenyamanan.
        Tingkatkan kreativitas dan kemampuan bahasa secara bersamaan! 📚✨`,
      comments: [
        { id: 1, user: "Rina", text: "Seru! Aku butuh latihan desain logo. Bisa share referensi desain juga?" },
        { id: 2, user: "Budi", text: "DM aku ya untuk jadwal besok sore." },
      ],
    },
    {
      id: 3,
      author: "Dewi Kusuma",
      avatar: W2,
      role: "Full‑Stack Dev",
      content:
        `Apakah kamu tertarik belajar dasar JavaScript untuk membangun website interaktif? 🚀
        Gabung sesi coding virtual gratis setiap Sabtu jam 10:00 WIB.
        Kita akan mulai dari dasar: variabel, fungsi, hingga manipulasi DOM sederhana.
        Sempurna untuk pemula yang baru kenal programming atau yang ingin refresh kembali konsep.
        Jangan lewatkan kesempatan ini untuk mengasah skill coding-mu dengan komunitas lokal BarterUp!`,
      comments: [
        { id: 1, user: "Agus", text: "Asik nih, kapan sesi pertama diadakan?" },
        { id: 2, user: "Siti", text: "Saya tertarik! Link registrasinya di mana?" },
      ],
    },
  ];

  // state untuk toggle komentar per post
  const [openComments, setOpenComments] = createSignal<Record<number, boolean>>({});
  const toggleComments = (postId: number) => {
    setOpenComments({
      ...openComments(),
      [postId]: !openComments()[postId],
    });
  };

  // data untuk sidebar kontak terakhir
  const contacts = [
    { id: 1, name: "Budi Santoso", avatar: Male2 },
    { id: 2, name: "Siti Aminah", avatar: W3 },
  ];

  // filtered posts berdasarkan query
  const filteredPosts = () =>
    posts.filter(
      (p) =>
        p.author.toLowerCase().includes(query().toLowerCase()) ||
        p.content.toLowerCase().includes(query().toLowerCase()) ||
        p.role.toLowerCase().includes(query().toLowerCase())
    );

  return (
    <div class="overflow-x-hidden">
      <Navbar />
      {/* Container with fixed header and scrollable content */}
      <div class="pt-20 h-screen flex flex-col">
        {/* Scrollable main area */}
        <div class="flex-1 overflow-y-auto px-4">
          <div class="lg:max-w-6xl mx-auto">
            {/* Sticky Search Bar */}
            <div class="sticky top-0 z-20 ">
              <input
                type="text"
                class="w-full backdrop-blur-md p-3 rounded-lg bg-gray-100 dark:bg-black/60 text-gray-900 dark:text-gray-200"
                placeholder="Search posts..."
                value={query()}
                onInput={(e) => setQuery(e.currentTarget.value)}
              />
            </div>

            {/* Content layout */}
            <div class="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 pt-6">
              {/* Feed Section */}
              <div class="flex-1 space-y-6">
                <Show when={filteredPosts().length > 0} fallback={<p class="text-gray-400">No posts found.</p>}>
                  <For each={filteredPosts()}>
                    {(post) => (
                      <div class="bg-[#004041] text-white rounded-lg shadow-sm overflow-hidden">
                        {/* Header */}
                        <div class="p-4 flex justify-between items-center">
                          <div class="flex items-center space-x-3">
                            <img
                              class="w-12 h-12 rounded-full object-cover"
                              src={post.avatar}
                              alt={post.author}
                            />
                            <div>
                              <p class="font-semibold">{post.author}</p>
                              <p class="text-xs text-gray-200">{post.role}</p>
                            </div>
                          </div>
                          <button
                            class="text-gray-200 hover:text-white"
                            onClick={() => toggleComments(post.id)}
                          >
                            💬 {post.comments.length} Comments
                          </button>
                        </div>

                        {/* Content */}
                        <div class="px-4 pb-4 whitespace-pre-line">{post.content}</div>

                        {/* Comments */}
                        {openComments()[post.id] && (
                          <div class="px-4 pb-4 border-t border-gray-600">
                            <For each={post.comments}>
                              {(c) => (
                                <div class="py-2">
                                  <p class="text-sm">
                                    <span class="font-semibold">{c.user}:</span> {c.text}
                                  </p>
                                </div>
                              )}
                            </For>
                          </div>
                        )}
                      </div>
                    )}
                  </For>
                </Show>
              </div>

              {/* Sidebar Section */}
              <aside class="hidden lg:block lg:w-80 space-y-4 z-15">
                <div class="sticky top-18 pt-4 bg-[#004041] text-white rounded-lg shadow p-4">
                  <h2 class="font-semibold mb-3">Recent Chats</h2>
                  <For each={contacts}>
                    {(c) => (
                      <a
                        href="#"
                        class="flex items-center space-x-3 mb-3 hover:bg-[#015f5f] p-2 rounded"
                      >
                        <img
                          class="w-10 h-10 rounded-full object-cover"
                          src={c.avatar}
                          alt={c.name}
                        />
                        <div class="text-sm">
                          <p class="font-medium">{c.name}</p>
                        </div>
                      </a>
                    )}
                  </For>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
