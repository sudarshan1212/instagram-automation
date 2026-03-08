"use client";
import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "../../activate-automation-button";
import { useQueryAutomation } from "@/hooks/use-queries";
import { useEditAutomation } from "@/hooks/use-automations";
import { useMutationDataState } from "@/hooks/use-mutation-data";
import { Input } from "@/components/ui/input";

type Props = {
  id: string;
};

const AutomationsBreadCrumb = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);
  const { edit, enableEdit, inputRef, isPending } = useEditAutomation(id);
  const { latestVaraible } = useMutationDataState(["update-automation"]);
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <p className="text-[#9B9CA0]">Automations</p>
        <ChevronRight color="#9B9CA0" />
        <span className="flex gap-x-3 items-center">
          {/* WIP: Show the editing data */}
          {edit ? (
            <Input
              ref={inputRef}
              placeholder={
                isPending ? latestVaraible.variables : "Add a new name"
              }
              className="bg-transparent h-auto outline-none text-base border-none p-0"
            />
          ) : (
            <p className="text-[#9B9CA0] truncate">{data?.data?.name}</p>
          )}

          {edit ? (
            <></>
          ) : (
            <span className="cursor-pointer hover:opacity-75 duration-100 transition">
              <PencilIcon size={14} />
            </span>
          )}
        </span>
      </div>
      <div className="flex gap-x-5">
        <p className="text-neutral-400 text-sm">All are automatically saved</p>
        <div className="flex gap-x-5">
          <p className="text-neutral-400 text-sm truncate min-w-0">
            Changes Saved
          </p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
};

export default AutomationsBreadCrumb;
