export default function AppsHub() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">MakoStars Apps</h1>
      <p className="mb-8">Explore our production apps and campaign pages.</p>
      <ul className="space-y-3">
        <li><a className="underline" href="/bookmark">QR Bookmark Landing Page</a></li>
        <li><a className="underline" href="/book-fair-2025">Book Fair 2025</a></li>
      </ul>
    </main>
  );
}
