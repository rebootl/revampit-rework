import type { Request, Response } from "express";

import { baseTemplate } from "../../templates/base.js";

export default (req: Request, res: Response) => {
  const content = `
<main class="pt-20 min-h-screen">
  <!-- Hero Section -->
  <section class="bg-gray-200 py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-3xl font-bold mb-4">Get Involved with RevampIT</h1>
      <p class="text-gray-600">Join our mission to extend the life of technology and support our community. There are many ways to participate — from volunteering to forming partnerships.</p>
    </div>
  </section>

  <!-- Options Sections -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <!-- Volunteering -->
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold mb-4">Volunteering</h3>
          <p class="text-gray-700 mb-4">Volunteer with us to help repair, refurbish, and prepare devices for reuse. Volunteering is a great way to learn technical skills, meet like-minded people, and support local community members who need access to technology.</p>
          <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Repair bench assistance (hardware/software)</li>
            <li>Workshop support and mentoring</li>
            <li>Refurbishment and testing</li>
            <li>Event support and outreach</li>
          </ul>
          <a href="/contact" class="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">Get Involved</a>
        </div>

        <!-- Internship -->
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold mb-4">Internship</h3>
          <p class="text-gray-700 mb-4">Our internship program offers hands-on experience in repair, IT support, and community projects. Interns work alongside experienced technicians and gain practical skills that help them enter the tech workforce.</p>
          <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Structured training and mentorship</li>
            <li>Real-world repair and refurbishment tasks</li>
            <li>Support with job placement and certification references</li>
            <li>Flexible durations and part-time options</li>
          </ul>
          <a href="/contact" class="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">Apply for an Internship</a>
        </div>

        <!-- Social Integration -->
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold mb-4">Social Integration</h3>
          <p class="text-gray-700 mb-4">We support social integration through meaningful work and training opportunities. Our programs are designed to help people gain skills, build confidence, and connect with the local community.</p>
          <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Skill-building through practical tasks</li>
            <li>Community mentoring and peer support</li>
            <li>Barter-based access to technology and services</li>
            <li>Support for reintegration into education or employment</li>
          </ul>
          <a href="/contact" class="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">Learn More</a>
        </div>

        <!-- Organizational Partnerships -->
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold mb-4">Organizational Partnerships</h3>
          <p class="text-gray-700 mb-4">We collaborate with schools, NGOs, businesses, and public institutions to scale our impact. Partnerships can include device donations, training programs, joint workshops, and tailored recycling or refurbishment projects.</p>
          <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Device donation and logistics</li>
            <li>Corporate volunteering and team workshops</li>
            <li>Custom training and deployment projects</li>
            <li>Research and community programs</li>
          </ul>
          <a href="/contact" class="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">Partner with Us</a>
        </div>

      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto text-green-100">Whether you want to volunteer, intern, partner, or join our social programs, we welcome your involvement. Get in touch and let's find the right way for you to contribute.</p>
      <a href="/contact" class="inline-block bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 text-lg">Contact Us</a>
    </div>
  </section>
</main>
`.trim();

  const html = baseTemplate({ content, req: req as any });
  res.send(html);
};
