export type Locale = Record<string, string | string[]>;

const locale = {
  en: {
    "heroBannerTitle": "Extending the Life of Technology",
    "heroBannerDescription":
      "For 20+ years, we've been fighting against the premature retirement of computers and promoting sustainable IT practices.",
    "missionSectionTitle": "Who we are",
    "missionSectionText":
      'At RevampIT, we believe in "Retirement Age 10 for Laptops!" We\'re a non-profit organization that has been transforming the way people think about technology since 2003. Our mission is simple but powerful: extend the life of IT devices and reduce electronic waste through repair, refurbishment, and sustainable practices.',
    "missionSectionImageAlt":
      "RevampIT storefront with large windows displaying computers and equipment",
    "storefrontCaption":
      "Our storefront at the Birmensdorferstrasse 379 in Zurich",
    "impactSectionTitle": "Our Impact",
    "impactHardwareTitle": "Hardware Recycling",
    "impactHardwareBullets": [
      "We repair and refurbish IT devices of all ages, giving them a second life and reducing electronic waste.",
      "From 11-year-old MacBooks to vintage computers, we believe every device deserves a chance to continue serving its purpose.",
      "Our repair services help keep technology out of landfills and in the hands of those who need it.",
    ],
    "impactOpenSourceTitle": "Open Source Software",
    "impactOpenSourceBullets": [
      "We're strong advocates for Linux and other open-source solutions.",
      "These technologies keep older devices running efficiently and provide security advantages by giving users control over their systems.",
      "Our regular workshops help people learn how to use these powerful tools effectively.",
    ],
    "impactCommunityTitle": "Community Impact",
    "impactCommunityBullets": [
      "We create meaningful employment opportunities for those who might struggle in traditional job markets.",
      "We encourage the exchange of knowledge between diverse groups of people.",
      "We also provide hosting and cloud services for Swiss SMEs who want to keep their data in Switzerland.",
    ],
    "byNumbersSectionTitle": "By the Numbers",
    "byNumbersEnvTitle": "Environmental Impact",
    "byNumbersEnvLifespan":
      "Years average device lifespan extension through our refurbishment program",
    "byNumbersEnvDevices":
      "Devices saved from landfills annually through repair and refurbishment",
    "byNumbersEnvRefurb":
      "Of donated equipment successfully refurbished and given a second life",
    "byNumbersCommunityTitle": "Community Impact",
    "byNumbersCommunityTrained":
      "People trained in open source and sustainable technology annually",
    "byNumbersCommunityInterns":
      "Of interns successfully transition to tech careers or further education",
    "byNumbersCommunityReintegration":
      "Successful work reintegration cases through our program",
    "storySectionTitle": "Our Story",
    "storySectionP1":
      "Founded in 2003, RevampIT started as a small repair shop with a big vision. What began as a simple idea - extending the life of technology - has grown into a movement that's changing how people think about their devices.",
    "storySectionP2":
      "Today, our team of 20 dedicated individuals works together to promote sustainable IT practices. We've become a trusted resource for both individuals and businesses looking to reduce their environmental impact while maintaining access to reliable technology.",
    "storySectionP3":
      "Our commitment to sustainability goes beyond just repairing devices. We're actively involved in climate demonstrations, sharing knowledge about sustainable digital alternatives, and working to change the conversation around technology consumption.",
    "ctaSectionTitle": "Join Our Mission",
    "ctaSectionText":
      "Whether you need a device repaired, want to learn about sustainable computing, or wish to support our cause, we welcome you to be part of our community. Together, we can make technology more sustainable and accessible for everyone.",
    "ctaSectionButton": "Get Involved",
  },
  de: {
    "heroBannerTitle": "Die Lebensdauer von Technologie verlängern",
    "heroBannerDescription":
      "Seit 20+ Jahren kämpfen wir gegen die vorzeitige Ausmusterung von Computern und fördern nachhaltige IT-Praktiken.",
    "missionSectionTitle": "Wer wir sind",
    "missionSectionText":
      'Bei RevampIT glauben wir an "Rentenalter 10 für Laptops!" Wir sind eine gemeinnützige Organisation, die seit 2003 die Art und Weise verändert, wie Menschen über Technologie denken. Unsere Mission ist einfach, aber wirkungsvoll: die Lebensdauer von IT-Geräten verlängern und Elektroschrott durch Reparatur, Wiederaufbereitung und nachhaltige Praktiken reduzieren.',
    "missionSectionImageAlt":
      "RevampIT Schaufenster mit großen Fenstern, die Computer und Ausrüstung zeigen",
    "storefrontCaption":
      "Unser Laden an der Birmensdorferstrasse 379 in Zürich",
    "impactSectionTitle": "Unsere Wirkung",
    "impactHardwareTitle": "Hardware-Recycling",
    "impactHardwareBullets": [
      "Wir reparieren und überholen IT-Geräte jeden Alters, geben ihnen ein zweites Leben und reduzieren Elektroschrott.",
      "Von 11 Jahre alten MacBooks bis zu Vintage-Computern – wir glauben, dass jedes Gerät eine weitere Chance verdient.",
      "Unsere Reparaturdienste helfen, Technik aus der Mülldeponie zu halten und in die Hände derer zu geben, die sie brauchen.",
    ],
    "impactOpenSourceTitle": "Open-Source-Software",
    "impactOpenSourceBullets": [
      "Wir sind starke Befürworter von Linux und anderen Open-Source-Lösungen.",
      "Diese Technologien halten ältere Geräte effizient am Laufen und bieten Sicherheitsvorteile, indem sie den Nutzern die Kontrolle über ihre Systeme geben.",
      "Unsere regelmäßigen Workshops helfen Menschen, diese leistungsstarken Werkzeuge effektiv zu nutzen.",
    ],
    "impactCommunityTitle": "Gemeinschaftliche Wirkung",
    "impactCommunityBullets": [
      "Wir schaffen sinnvolle Beschäftigungsmöglichkeiten für Menschen, die auf dem traditionellen Arbeitsmarkt Schwierigkeiten haben.",
      "Wir fördern den Wissensaustausch zwischen verschiedenen Gruppen von Menschen.",
      "Außerdem bieten wir Hosting- und Cloud-Services für Schweizer KMU, die ihre Daten in der Schweiz behalten möchten.",
    ],
    "byNumbersSectionTitle": "In Zahlen",
    "byNumbersEnvTitle": "Umweltauswirkung",
    "byNumbersEnvLifespan":
      "Durchschnittliche Lebensdauerverlängerung von Geräten durch unser Refurbishment-Programm (Jahre)",
    "byNumbersEnvDevices":
      "Jährlich durch Reparatur und Wiederaufbereitung vor der Deponie gerettete Geräte",
    "byNumbersEnvRefurb":
      "Anteil der gespendeten Geräte, die erfolgreich wiederaufbereitet und weitergegeben werden (%)",
    "byNumbersCommunityTitle": "Gemeinschaftliche Wirkung",
    "byNumbersCommunityTrained":
      "Jährlich in Open Source und nachhaltiger Technologie geschulte Personen",
    "byNumbersCommunityInterns":
      "Praktikanten, die erfolgreich in Tech-Karrieren oder weiterführende Bildung übergehen (%)",
    "byNumbersCommunityReintegration":
      "Erfolgreiche Wiedereingliederungsfälle durch unser Programm",
    "storySectionTitle": "Unsere Geschichte",
    "storySectionP1":
      "2003 gegründet, begann RevampIT als kleine Reparaturwerkstatt mit einer großen Vision. Was als einfache Idee begann – die Lebensdauer von Technologie zu verlängern – ist zu einer Bewegung geworden, die die Sichtweise auf Geräte verändert.",
    "storySectionP2":
      "Heute arbeitet unser Team von 20 engagierten Personen gemeinsam daran, nachhaltige IT-Praktiken zu fördern. Wir sind eine vertrauenswürdige Anlaufstelle für Einzelpersonen und Unternehmen, die ihren ökologischen Fußabdruck verringern und dennoch Zugang zu zuverlässiger Technik behalten möchten.",
    "storySectionP3":
      "Unser Engagement für Nachhaltigkeit geht über die Reparatur von Geräten hinaus. Wir engagieren uns aktiv bei Klimademonstrationen, teilen Wissen über nachhaltige digitale Alternativen und arbeiten daran, das Gespräch über Technikkonsum zu verändern.",
    "ctaSectionTitle": "Mach mit bei unserer Mission",
    "ctaSectionText":
      "Ob du ein Gerät reparieren lassen möchtest, mehr über nachhaltiges Computing erfahren willst oder unsere Sache unterstützen möchtest – wir laden dich ein, Teil unserer Community zu werden. Gemeinsam können wir Technologie nachhaltiger und zugänglicher für alle machen.",
    "ctaSectionButton": "Mitmachen",
  },
};

export default locale;
