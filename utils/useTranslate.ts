import { useRouter } from "next/router";
import { landingTranslate } from "./translate/landing";
import { projectsTranslate } from "./translate/projects";

const pages: { [key: string]: any } = {
  home: landingTranslate,
  projects: projectsTranslate,
};

export const useTranslate = (page: string) => {
  const currentPage = pages[page];

  const { locale, defaultLocale } = useRouter();
  const i18n =
    locale && currentPage[locale]
      ? currentPage[locale]
      : currentPage[defaultLocale || "pt-BR"];

  return i18n;
};
