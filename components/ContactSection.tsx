'use client'

import Link from 'next/link'
import { FaTelegramPlane, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section id="contact" className="py-10 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10">
        Feel free to reach out via any platform.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Link
          href="https://t.me/lol8242"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg text-neutral-700 dark:text-neutral-300 hover:underline transition"
        >
          <FaTelegramPlane className="text-2xl" />
          @lol8242
        </Link>
        <Link
          href="https://wa.me/37120235752"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg text-neutral-700 dark:text-neutral-300 hover:underline transition"
        >
          <FaWhatsapp className="text-2xl" />
          +371 20 235 752
        </Link>
        <Link
          href="mailto:riad8242@gmail.com"
          className="flex items-center gap-3 text-lg text-neutral-700 dark:text-neutral-300 hover:underline transition"
        >
          <FaEnvelope className="text-2xl" />
          riad8242@gmail.com
        </Link>
      </div>
    </section>
  )
}
