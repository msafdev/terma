import Banner from "@/components/cmd/banner";
import CommandPrompt from "@/components/cmd/input";

export default function Page() {
  const date = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(date);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 lg:p-24">
      <code className="text-sm dark:text-neon-green text-neon-red text-left w-full max-w-xl py-2">
        {formattedDate}
      </code>

      {/* MSAF Banner */}
      <Banner />

      {/* Warning */}
      <code className="mb-6 mt-2 p-1 md:hidden [font-size:_clamp(10px,3vw,14px)] bg-red-600 text-yellow-200 max-w-xl">
        For the best experience, please view this site on a desktop browser.
      </code>

      {/* Welcome */}
      <code className="dark:text-[#32cd32] text-foreground w-full max-w-xl [font-size:_clamp(10px,3vw,14px)]">
        Welcome to{" "}
        <span className="text-neon-red dark:text-neon-yellow">Terma</span>
        , <br />A terminal-styled portfolio built with Next.js and Tailwind CSS.
        Type{" "}
        <span className="text-neon-red dark:text-neon-yellow">"help"</span> to
        see available commands.
      </code>

      <CommandPrompt />
    </main>
  );
}
