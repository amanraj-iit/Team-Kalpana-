export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const greetings: Record<string, string> = {
  en: "Hello!",
  es: "¡Hola!",
  fr: "Bonjour!",
  de: "Hallo!",
  it: "Ciao!",
  ja: "こんにちは！",
  ko: "안녕하세요!",
  pt: "Olá!",
  ru: "Привет!",
  zh: "你好！",
};

export const languages: Language[] = [
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
  },
  {
    code: "es",
    name: "Español",
    flag: "🇪🇸",
  },
  {
    code: "fr",
    name: "Français",
    flag: "🇫🇷",
  },
  {
    code: "de",

    name: "Deutsch",
    flag: "🇩🇪",
  },
  {
    code: "it",
    name: "Italiano",
    flag: "🇮🇹",
  },
  {
    code: "pt",
    name: "Português",
    flag: "🇵🇹",
  },
  {
    code: "ru",
    name: "Русский",
    flag: "🇷🇺",
  },
  {
    code: "zh",
    name: "中文",
    flag: "🇨🇳",
  },
  {
    code: "ja",
    name: "日本語",
    flag: "🇯🇵",
  },
  {
    code: "ko",
    name: "한국어",
    flag: "🇰🇷",
  },
];
