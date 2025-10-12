import type { Request, Response } from "express";

import { baseTemplate } from "../../templates/base.js";
import locale from "./locale.ts";
import template from "./template.ts";

export type ProjectDef = { icon: string; key: string; link: string; linkTitle: string; external?: boolean };

const projects: ProjectDef[] = [
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
  const language = req.lang || 'en';
  const content = template(locale[language] || locale.en, projects);

  const html = baseTemplate({ content, req });
  res.send(html);
};
