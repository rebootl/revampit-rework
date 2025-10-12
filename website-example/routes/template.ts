import type { NewsData } from "./get.ts";
import type { Locale } from "./locale.ts";

export default (locale: Locale, newsData: NewsData) => `
    <main class="pt-20 min-h-screen">
      <!-- Hero Banner -->
      <section
        class="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-24 overflow-hidden"
      >
        <div class="container mx-auto px-4 relative">
          <div class="max-w-3xl">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ${locale.heroBannerTitle}
            </h1>
            <p class="text-xl text-green-100">${locale.heroBannerDescription}</p>
          </div>
        </div>
      </section>
      <!-- News Section -->
      ${
  newsData
    ? `
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">${newsData.title}</h2>
        <p class="text-lg">
          ${newsData.content}
        </p>
      </div>
    </section>
  `
    : ""
}
      <!-- Mission Section -->
      <section class="py-20 px-4 max-w-6xl mx-auto">
        <div class="space-y-8">
          <h2 class="text-3xl font-bold">${locale.missionSectionTitle}</h2>
          <div class="space-y-6">
            <p class="text-lg">
              ${locale.missionSectionText}
            </p>
            <div
              class="relative w-full h-[400px] rounded-lg overflow-hidden my-8 mt-32"
            >
              <img
                src="/static/storefront.png"
                alt="${locale.missionSectionImageAlt}"
                class="object-cover w-full h-full"
              />
            </div>
            <p class="text-sm text-gray-600 mt-2 italic text-center">${locale.storefrontCaption}</p>
          </div>
        </div>
      </section>
      <!-- Impact Areas -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-center">${locale.impactSectionTitle}</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4">${locale.impactHardwareTitle}</h3>
              <div class="space-y-4 text-lg">
                ${
  Array.isArray(locale.impactHardwareBullets) &&
  locale.impactHardwareBullets.map((b: string) => `<p class="mb-4">${b}</p>`)
    .join("")
}
              </div>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4">${locale.impactOpenSourceTitle}</h3>
              <div class="space-y-4 text-lg">
                ${
  Array.isArray(locale.impactOpenSourceBullets) &&
  locale.impactOpenSourceBullets.map((b: string) => `<p class="mb-4">${b}</p>`)
    .join("")
}
              </div>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4">${locale.impactCommunityTitle}</h3>
              <div class="space-y-4 text-lg">
                ${
  Array.isArray(locale.impactCommunityBullets) &&
  locale.impactCommunityBullets.map((b: string) => `<p class="mb-4">${b}</p>`)
    .join("")
}
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- By the Numbers Section -->
      <section class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-center">${locale.byNumbersSectionTitle}</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-green-50 p-8 rounded-lg shadow-md">
              <h3 class="text-2xl font-bold text-green-800 mb-2">${locale.byNumbersEnvTitle}</h3>
              <div class="space-y-6">
                <div>
                  <p class="text-4xl font-bold text-green-700 mb-2">5+</p>
                  <p class="text-gray-600">${locale.byNumbersEnvLifespan}</p>
                </div>
                <div>
                  <p class="text-4xl font-bold text-green-700 mb-2">1000+</p>
                  <p class="text-gray-600">${locale.byNumbersEnvDevices}</p>
                </div>
                <div>
                  <p class="text-4xl font-bold text-green-700 mb-2">75%</p>
                  <p class="text-gray-600">${locale.byNumbersEnvRefurb}</p>
                </div>
              </div>
            </div>
            <div class="bg-green-50 p-8 rounded-lg shadow-md">
              <h3 class="text-2xl font-bold text-green-800 mb-2">${locale.byNumbersCommunityTitle}</h3>
              <div class="space-y-6">
                <div>
                  <p class="text-4xl font-bold text-green-700 mb-2">20+</p>
                  <p class="text-gray-600">${locale.byNumbersCommunityTrained}</p>
                </div>
                <div>
                  <p class="text-4xl font-bold text-green-700 mb-2">90%</p>
                  <p class="text-gray-600">${locale.byNumbersCommunityInterns}</p>
                </div>
                <div>
                  <p class="text-4xl font-bold text-green-700 mb-2">10+</p>
                  <p class="text-gray-600">${locale.byNumbersCommunityReintegration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Our Story -->
      <section class="py-20 px-4 max-w-6xl mx-auto">
        <div class="space-y-8">
          <h2 class="text-3xl font-bold">${locale.storySectionTitle}</h2>
          <div class="space-y-6 text-lg">
            <p>
              ${locale.storySectionP1}
            </p>
            <p>
              ${locale.storySectionP2}
            </p>
            <p>
              ${locale.storySectionP3}
            </p>
          </div>
        </div>
      </section>
      <!-- Call to Action -->
      <section class="py-20 bg-green-600 text-white">
        <div class="max-w-4xl mx-auto text-center px-4">
          <h2 class="text-3xl font-bold mb-6">${locale.ctaSectionTitle}</h2>
          <p class="text-xl mb-8">
            ${locale.ctaSectionText}
          </p>
          <a
            href="/get-involved"
            class="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            ${locale.ctaSectionButton}
          </a>
        </div>
      </section>
    </main>
  `;
