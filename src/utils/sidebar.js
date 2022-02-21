import Buyurtmalar from "../components/Buyurtmalar";
import Maxsulotlar from "../components/Maxsulotlar";
import Kategoriyalar from "../components/Kategoriyalar";
import Filiallar from "../components/Filiallar";
import Mijozlar from "../components/Mijozlar";
import Xisobot from "../components/Xisobot";
import Katalog from "../components/Katalog";

import { ReactComponent as buyurtma } from "../assets/icons/check-circle.svg";
import { ReactComponent as mahsulot } from "../assets/icons/archive.svg";
import { ReactComponent as kategoriya } from "../assets/icons/layers.svg";
import { ReactComponent as filial } from "../assets/icons/map-pin.svg";
import { ReactComponent as mijoz } from "../assets/icons/user.svg";
import { ReactComponent as xisobot } from "../assets/icons/bar-chart-2.svg";
import { ReactComponent as katalog } from "../assets/icons/settings copy 2.svg";

export const sidebar = [
  {
    id: 1,
    title: "Buyurtmalar",
    pathname: "/Buyurtmalar",
    component: Buyurtmalar,
    icon: buyurtma,
    child: [],
    hidden: false,
  },
  {
    id: 2,
    title: "Maxsulotlar",
    pathname: "/Maxsulotlar",
    component: Maxsulotlar,
    icon: mahsulot,
    child: [],
    hidden: false,
  },
  {
    id: 3,
    title: "Kategoriyalar",
    pathname: "/Kategoriyalar",
    component: Kategoriyalar,
    icon: kategoriya,
    child: [],
    hidden: false,
  },
  {
    id: 4,
    title: "Filiallar",
    pathname: "/Filiallar",
    component: Filiallar,
    icon: filial,
    child: [],
    hidden: false,
  },
  {
    id: 5,
    title: "Mijozlar",
    pathname: "/Mijozlar",
    component: Mijozlar,
    icon: mijoz,
    child: [],
    hidden: false,
  },
  {
    id: 6,
    title: "Xisobot",
    pathname: "/Xisobot",
    component: Xisobot,
    icon: xisobot,
    child: [],
    hidden: false,
  },
  {
    id: 7,
    title: "Katalog",
    pathname: "/Katalog",
    component: Katalog,
    icon: katalog,
    child: [],
    hidden: false,
  },
];
