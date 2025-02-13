"use client";

import Image from "next/image";
import { Youtube } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      className="min-h-screen bg-cover bg-[#ff7ae3] bg-center bg-fixed"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 p-4 z-10">
        <ul className="flex justify-center space-x-6">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-pink-300 transition"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-white hover:text-pink-300 transition"
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("social")}
              className="text-white hover:text-pink-300 transition"
            >
              Social Media
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-pink-300 transition"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </nav>

      <div className="container mx-auto px-4 py-20">
        <header className="text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-4">Fantasy</h1>
          <p className="text-xl text-pink-200">K-pop Dance Group</p>
        </header>

        <section
          id="about"
          className="mb-20 p-6 bg-[#1b155a] bg-opacity-40 rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            Fantasy is a dynamic K-pop dance group known for our electrifying
            performances and precise choreography. Our passion for dance and
            Korean pop culture brings together talented individuals to create
            unforgettable experiences for our audience.
          </p>
        </section>

        <section
          id="portfolio"
          className="mb-20 p-6 bg-[#1b155a] bg-opacity-40 rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <YouTubeVideo videoId="VIDEO_ID_1" />
            <YouTubeVideo videoId="VIDEO_ID_2" />
            <YouTubeVideo videoId="VIDEO_ID_3" />
            <YouTubeVideo videoId="VIDEO_ID_4" />
          </div>
        </section>

        <section
          id="social"
          className="mb-20 p-6 bg-[#1b155a] bg-opacity-40 rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Social Media</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/fantasy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <Image
                src="/instagram-icon.png"
                alt="Instagram"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://tiktok.com/@fantasy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <Image
                src="/tiktok-icon.png"
                alt="TikTok"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://youtube.com/fantasy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <Youtube size={40} />
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="mb-20 p-6 bg-[#1b155a] bg-opacity-40 rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 border rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

function YouTubeVideo({ videoId }: { videoId: string }) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded"
      ></iframe>
    </div>
  );
}
