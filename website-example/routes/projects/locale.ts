export type Locale = Record<string, any>;

const locale: Locale = {
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

export default locale;
