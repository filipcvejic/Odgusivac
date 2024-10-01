import { Montserrat, Bebas_Neue } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "600", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
