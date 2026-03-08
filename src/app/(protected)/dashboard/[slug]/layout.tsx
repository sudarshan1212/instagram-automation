import InfoBar from "@/components/global/infobar";
import SideBar from "@/components/global/sidebar";
import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import {
  prefetchUserAutomations,
  PrefetchUserProfile,
} from "@/react-query/prefetch";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

const Layout = async ({ children, params }: Props) => {
  const { slug } = await params;
  const query = new QueryClient();
  await PrefetchUserProfile(query);
  await prefetchUserAutomations(query);
  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3">
        {/* SideBar */}
        <SideBar slug={slug} />
        {/* InfoBar */}
        <div className="lg:ml-[210px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
          <InfoBar slug={slug} />

          {children}
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Layout;
