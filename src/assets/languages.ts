import cs from "@/assets/locales/cs.json";
import en from "@/assets/locales/en.json";
import kitty from "@/assets/locales/kitty.json";
import ru from "@/assets/locales/ru.json";

export const locales = {
  en,
  cs,
  kitty,
  ru,
};

export type Locales = keyof typeof locales;
