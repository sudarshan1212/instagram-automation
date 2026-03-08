import { InstaIcon, SalesForceIcon } from "@/components/icons/homeIcon";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
};
export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris scelerisque tincidunt ultrices",
    icon: <InstaIcon />,
    strategy: "INSTAGRAM",
  },
  {
    title: "Connect Salesforce",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris scelerisque tincidunt ultrices",
    icon: <SalesForceIcon />,
    strategy: "CRM",
  },
];
