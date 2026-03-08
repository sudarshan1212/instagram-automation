import { Bot, Instagram, Plane } from "lucide-react";
import { v4 } from "uuid";

export type AutomationListenerProps = {
  id: string;
  label: string;
  icon: JSX.Element;
  description: string;
  type: "SMARTAI" | "MESSAGE";
};
export type AutomationsTriggerProps = {
  id: string;
  label: string;
  icon: JSX.Element;
  description: string;
  type: "COMMENT" | "DM";
};

export const AUTOMATION_TRIGGERS: AutomationsTriggerProps[] = [
  {
    id: v4(),
    label: "User comments on my post",
    icon: <Instagram className="w-5 h-5 text-pink-500" />,
    description: "Select if you want to automate comments on your post",
    type: "COMMENT",
  },
  {
    id: v4(),
    label: "Send me a dm with a keyword",
    icon: <Instagram className="w-5 h-5 text-pink-500" />,
    description: "Select if you want to automate DMs on your profile",
    type: "DM",
  },
];

export const AUTOMATION_LISTENERS: AutomationListenerProps[] = [
  {
    id: v4(),
    label: "Send the user a message",
    icon: <Plane className="w-5 h-5 text-blue-500" />, // styled in Tailwind

    description: "Enter the message that you want to send the user.",
    type: "MESSAGE",
  },

  {
    id: v4(),
    label: "Let Smart AI take over",
    icon: <Bot className="w-5 h-5 text-purple-500" />,
    description: "Tell AI about your project. (Upgrade to use this feature)",
    type: "SMARTAI",
  },
];
