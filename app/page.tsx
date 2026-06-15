import { redirect } from "next/navigation";

// The `/` redirect is handled by `redirects()` in next.config.ts before this
// renders. This server-side redirect is a defense-in-depth fallback.
export default function Home() {
  redirect("https://toddagriscience.com");
}
