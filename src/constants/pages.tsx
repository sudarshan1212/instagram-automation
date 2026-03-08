import {
  AutomationsIcon,
  ContactIcon,
  HomeIcon,
  IntegrationsIcon,
  SettingsIcon,
} from "@/components/icons/homeIcon";

export const PAGE_BREAD_CRUMBS: string[] = [
  "contacts",
  "automations",
  "integrations",
  "settings",
];

type Props = {
  [page: string]: React.ReactNode;
};

export const PAGE_ICON: Props = {
  AUTOMATIONS: <AutomationsIcon />,
  CONTACTS: <ContactIcon />,
  INTEGRATIONS: <IntegrationsIcon />,
  SETTINGS: <SettingsIcon />,
  HOME: <HomeIcon />,
};

export const PLANS = [
  {
    name: "Free Plan",
    description: "Perfect for getting started",
    price: "$0",
    features: [
      "Boost engagement with target responses",
      "Automate comment replies to enhance audience interaction",
      "Turn followers into customers with targeted messaging",
    ],
    cta: "Get Started",
  },
  {
    name: "Smart AI Plan",
    description: "Advanced features for power users",
    price: "$99",
    features: [
      "All features from Free Plan",
      "AI-powered response generation",
      "Advanced analytics and insights",
      "Priority customer support",
      "Custom branding options",
    ],
    cta: "Upgrade Now",
  },
];
