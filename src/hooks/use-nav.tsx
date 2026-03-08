import { usePathname } from "next/navigation";

export const usePaths = () => {
  // This can give home, contacts, automations, settings, integrations and also username and userid
  const pathname = usePathname();
  const path = pathname.split("/");
  const page = path[path.length - 1];
  return { page, pathname };
};
