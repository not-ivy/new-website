import { InterfaceWiki } from "../types/wiki";

export const fetchWikiMetadata = async (entry: string) => {
  const res = await fetch(`/wiki.json`);
  const data = await res.json() as InterfaceWiki;
  return data[entry];
}

export const formatDateFromString = (locales: string[], date: string) => {
  return Intl.DateTimeFormat(locales, { dateStyle: 'medium' }).format(new Date(date));
}
