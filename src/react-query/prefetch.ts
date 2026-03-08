import { getAllAutomations, getAutomationsInfo } from "@/actions/automations";
import { onUserInfo } from "@/actions/user";
import { QueryClient, QueryFunction } from "@tanstack/react-query";
const prefetch = async (
  client: QueryClient,
  action: QueryFunction,
  key: string
) => {
  return await client.prefetchQuery({
    queryKey: [key],
    queryFn: action,
    staleTime: 6000,
  });
};
export const PrefetchUserProfile = async (client: QueryClient) => {
  return await prefetch(client, onUserInfo, "user-profile");
};
export const prefetchUserAutomations = async (client: QueryClient) => {
  return await prefetch(client, getAllAutomations, "user-automations");
};

export const prefetchUserAutomation = async (
  client: QueryClient,
  automationId: string
) => {
  return await prefetch(
    client,
    () => getAutomationsInfo(automationId),
    "automation-info"
  );
};

// When you call prefetchUserAutomation(client, "123"):

// It tells React Query: "Hey, I might need info about automation 123 soon."

// It calls getAutomationsInfo("123") in the background.

// It stores the result in the cache under the key "automation-info".

// Later, if a component uses useQuery("automation-info", ...), React Query can instantly return the cached data instead of fetching it again.