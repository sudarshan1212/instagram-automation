"use client";
import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import { usePaths } from "@/hooks/use-nav";
import React from "react";
import Sheet from "../sheet";
import { Menu } from "lucide-react";
import { SubscriptionPlan } from "../subscription";
import { HelpDuoToneWhite } from "@/components/icons/homeIcon";
import ClerkAuthState from "../clerk-auth-state";
import { Separator } from "@radix-ui/react-separator";
import Items from "../sidebar/items";
import UpgradeCard from "../sidebar/upgrade";
import Logo from "@/svgs/Logo";
import CreateAutomation from "../create-automation";
import Search from "./search";
import { Notifications } from "./notifications";
import MainBreadCrumb from "../bread-crumbs/main-bread-crum";

type Props = {
  slug: string;
};

const InfoBar = ({ slug }: Props) => {
  const { page } = usePaths();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;

  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex gap-x-3 lg:gap-x-2 justify-end">
          <span className="lg:hidden flex items-center flex-1 gap-x-2">
            <Sheet side="left" trigger={<Menu />} className="lg:hidden">
              <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] bg-opacity-90 bg-clip-padding backdrop-filter backdrop-blur-3xl">
                <div className="flex gap-x-1 items-center py-5 justify-center">
                  <Logo size="sm" />
                </div>
                <div className="flex flex-col py-3">
                  <Items page={page} slug={slug} />
                </div>

                <div className="px-16">
                  <Separator
                    orientation="horizontal"
                    className="bg-[#353535]"
                  />
                </div>
                <div className="px-3 flex flex-col gap-y-5">
                  <div className="flex gap-x-2">
                    <ClerkAuthState />
                    <p className="text-[#9B9CA0]">Profile</p>
                  </div>
                  <div className="flex gap-x-3">
                    <HelpDuoToneWhite />
                    <p className="text-[#9B9CA0]">Help</p>
                  </div>
                </div>
                <SubscriptionPlan type="FREE">
                  <div className="flex-1 flex flex-col justify-end">
                    <UpgradeCard />
                  </div>
                </SubscriptionPlan>
              </div>
            </Sheet>
          </span>
          <Search />
          <CreateAutomation />
          <Notifications />
        </div>
        <MainBreadCrumb page={page === slug ? "Home" : page} slug={slug} />
      </div>
    )
  );
};
export default InfoBar;
