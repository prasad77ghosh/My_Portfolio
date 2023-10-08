import {
  FiHome,
  FiUser,
  FiPhone,
  FiBriefcase,
  FiUserPlus,
  FiFileText,
} from "react-icons/fi";
import { IconType } from "react-icons";

type NAV_LINK = {
  id: string;
  link: string;
  title: string;
  icon: IconType;
};

const Links: NAV_LINK[] = [
  {
    id: "01",
    link: "/",
    title: "Home",
    icon: FiHome,
  },
  {
    id: "02",
    link: "/about",
    title: "About",
    icon: FiUser,
  },
  {
    id: "03",
    link: "/contact",
    title: "Contact",
    icon: FiPhone,
  },
  {
    id: "04",
    link: "/portfolio",
    title: "Portfolio",
    icon: FiBriefcase,
  },
  {
    id: "05",
    link: "/resume",
    title: "Resume",
    icon: FiUserPlus,
  },
  {
    id: "06",
    link: "/article",
    title: "Articles",
    icon: FiFileText,
  },
];

export default Links;
