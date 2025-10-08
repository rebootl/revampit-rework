
export function pageContent(entry) {
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
