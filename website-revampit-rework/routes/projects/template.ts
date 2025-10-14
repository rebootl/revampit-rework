import type { ProjectDef } from "./get.ts";
import type { Locale } from "./locale.ts";

export default (locale: Locale, projects: ProjectDef[]) => `
  <main class="pt-20 min-h-screen">
    <section class="bg-gray-200 py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-3xl font-bold mb-4">${locale.title}</h1>
        <p class="text-gray-600">${locale.description}</p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          ${
  projects
    .map(
      (project) => `
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="text-4xl mb-4">${project.icon}</div>
              <h3 class="text-xl font-semibold mb-3">${
        locale.projects[project.key].title
      }</h3>
              <p class="text-gray-600 mb-4">${
        locale.projects[project.key].description
      }</p>
              <a href="${project.link}" class="text-green-600 hover:text-green-800 font-semibold inline-flex items-center" 
                ${
        project.external ? 'target="_blank"' : ""
      }>${project.linkTitle}</a>
            </div>
          `,
    )
    .join("")
}

        </div>
      </div>
    </section>
  </main>`;
