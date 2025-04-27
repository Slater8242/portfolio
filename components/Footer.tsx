// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full py-5 text-center text-sm text-neutral-500 dark:text-neutral-400 mt-5">
      © {new Date().getFullYear()} Riad Ashrafov. All rights reserved.
    </footer>
  )
}
