import {
  HomeIcon,
  AutomationsIcon,
  IntegrationsIcon,
  SettingsIcon,
} from "@/components/icons/homeIcon";
import { v4 as uuid } from "uuid";
type FieldProps = {
  label: string;
  id: string;
};
type SideBarProps = {
  icon: React.ReactNode;
} & FieldProps;
export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <HomeIcon />,
  },
  {
    id: uuid(),
    label: "automations",
    icon: <AutomationsIcon />,
  },
  {
    id: uuid(),
    label: "integrations",
    icon: <IntegrationsIcon />,
  },
  {
    id: uuid(),
    label: "settings",
    icon: <SettingsIcon />,
  },
];
