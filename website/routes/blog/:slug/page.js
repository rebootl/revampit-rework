function getBlogEntry(req) {
  const lang = req.lang || 'en'; // Default to English if no language is set

  const { slug } = req.params;

  try {
    const stmt = req.db.prepare('SELECT * FROM entries WHERE type = ? AND slug = ? AND draft = 0 AND language = ? LIMIT 1');
    const entry = stmt.get('blog', slug, lang);
    return entry;
  } catch (error) {
    console.error(`Error fetching blog entry with slug ${slug}:`, error);
    return null; // Return null if an error occurs
  }
}

export function pageContent(req) {
  const entry = getBlogEntry(req);
  if (!entry) {
    return `
  <main class="pt-20 min-h-screen">
    <div class="container mx-auto px-4 py-16">
      <article class="prose lg:prose-xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 pb-10">Blog Entry Not Found</h1>
        <p>Sorry, the blog entry you are looking for does not exist.</p>
      </article>
    </div>
  </main>`;
  }

  return `
  <main class="pt-20 min-h-screen">
    <div class="container mx-auto px-4 py-16">
      <article class="prose lg:prose-xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 pb-10">${entry.title}</h1>
        <div>${entry.content}</div>
      </article>
    </div>
  </main>`
;}
