import type { Request, Response } from "express";

import { baseTemplate } from "../../templates/base.js";

const locale = {
  en: {
    title: 'Our Projects',
    description: 'Discover our diverse range of projects, from open-source contributions to community initiatives and hardware development.',
    projects: {
      kivitendo: {
        title: 'Kivitendo ERP',
        description: 'Since July 2015 revamp-it is premium partner of the kivitendo project. Starting in 2005 - initially for our own purposes but soon afterwards to satisfy the needs of our customers- we searched for a software solution for accounting, resource and customer management.'
      },
      linuxola: {
        title: 'Verein Linuxola',
        description: 'Verein Linuxola was founded on December 2, 2005 by eight people from different regions of Switzerland. The purpose of the organization is to provide access to information technology and a connection to the global digital commons for our partners in Africa.'
      },
      hardwareDevelopment: {
        title: 'Hardware Development',
        description: 'Hardware development work at revamp-it is concentrated around discovering new possibilities of decommissioned computer hardware, optimizing energy and resource usage, and creating guides for open source hardware assembly.'
      },
      moreToCome: {
        title: 'More Projects Coming Soon',
        description: 'We\'re constantly working on new initiatives to promote sustainable IT practices.'
      }
    }
  },
  de: {
    title: 'Unsere Projekte',
    description: 'Entdecken Sie unsere vielfältigen Projekte, von Open-Source-Beiträgen bis hin zu Gemeinschaftsinitiativen und Hardware-Entwicklung.',
    projects: {
      kivitendo: {
        title: 'Kivitendo ERP',
        description: 'Seit Juli 2015 ist revamp-it Premium-Partner des kivitendo-Projekts. Beginnend im Jahr 2005 - zunächst für unsere eigenen Zwecke, aber bald auch, um die Bedürfnisse unserer Kunden zu erfüllen - suchten wir nach einer Software-Lösung für Buchhaltung, Ressourcen- und Kundenmanagement.'
      },
      linuxola: {
        title: 'Verein Linuxola',
        description: 'Der Verein Linuxola wurde am 2. Dezember 2005 von acht Personen aus verschiedenen Regionen der Schweiz gegründet. Der Zweck der Organisation besteht darin, unseren Partnern in Afrika Zugang zu Informationstechnologie und eine Verbindung zum globalen digitalen Commons zu verschaffen.'
      },
      hardwareDevelopment: {
        title: 'Hardware-Entwicklung',
        description: 'Die Hardware-Entwicklung bei revamp-it konzentriert sich auf die Entdeckung neuer Möglichkeiten für ausgemusterte Computerhardware, die Optimierung von Energie- und Ressourcennutzung sowie die Erstellung von Anleitungen für die Montage von Open-Source-Hardware.'
      },
      moreToCome: {
        title: 'Weitere Projekte in Vorbereitung',
        description: 'Wir arbeiten ständig an neuen Initiativen, um nachhaltige IT-Praktiken zu fördern.'
      }
    }
  }
};

const projects = [
  {
    icon: "📊",
    key: 'kivitendo',
    link: 'https://kivitendo.ch',
    linkTitle: 'kivitendo.ch',
    external: true
  },
  {
    icon: "🌍",
    key: 'linuxola',
    link: 'https://linuxola.org',
    linkTitle: 'linuxola.org',
    external: true
  },
  {
    icon: "🔧",
    key: 'hardwareDevelopment',
    linkTitle: 'Read more >',
    link: '/projects/hardware',
  },
  {
    icon: "👥",
    key: 'moreToCome',
    link: '/projects/',
    linkTitle: 'Read more >',
  }
];

export default (req: Request, res: Response) => {
  const language = (req as any).lang || 'en';
  const content = `
  <main class="pt-20 min-h-screen">
    <section class="bg-gray-200 py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-3xl font-bold mb-4">${locale[language].title}</h1>
        <p class="text-gray-600">${locale[language].description}</p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          ${ projects.map((project => `
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="text-4xl mb-4">${project.icon}</div>
              <h3 class="text-xl font-semibold mb-3">${(locale as any)[language].projects[project.key].title}</h3>
              <p class="text-gray-600 mb-4">${(locale as any)[language].projects[project.key].description}</p>
              <a href="${project.link}" class="text-green-600 hover:text-green-800 font-semibold inline-flex items-center" 
                ${project.external ? 'target="_blank"' : ''}>${project.linkTitle}</a>
            </div>
          `)).join('') }

        </div>
      </div>
    </section>
  </main>`;

  const html = baseTemplate({ content, req: req as any });
  res.send(html);
};
