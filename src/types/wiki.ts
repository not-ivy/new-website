interface InterfaceWikiEntry {
  created: string;
  edited: string;
  description: string;
}

interface InterfaceWiki {
  [key: string]: InterfaceWikiEntry;
}

export type { InterfaceWiki, InterfaceWikiEntry };
