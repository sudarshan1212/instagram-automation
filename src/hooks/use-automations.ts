"use client";
import { z } from "zod";
import {
  createAutomations,
  saveListener,
  saveTrigger,
  updateAutomationName,
} from "@/actions/automations";
import { useMutationData } from "./use-mutation-data";
import { useEffect, useRef, useState } from "react";
import useZodForm from "./use-zod-form";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { TRIGGER } from "@/redux/slices/automation";

export const useCreateAutomation = (id?: string) => {
  const { isPending, mutate } = useMutationData(
    ["create-automation"], // Mutation Key
    () => createAutomations(id), // Function that calls the API: `POST /automations`
    "user-automations" // Query Key to refetch after success
  );
  return { isPending, mutate };
};

export const useEditAutomation = (automationId: string) => {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const enableEdit = () => setEdit(true);
  const disableEdit = () => setEdit(false);

  const { isPending, mutate } = useMutationData(
    ["update-automation"],
    (data: { name: string }) =>
      updateAutomationName(automationId, { name: data.name }),
    "automation-info",
    disableEdit
  );
  //   If the user clicks outside the input field:
  // If there’s a value → save it by calling mutate.
  // If empty → just exit edit mode without saving.

  useEffect(() => {
    function handleClickOutside(this: Document, event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains((event.target as Node) || null)
      ) {
        if (inputRef.current.value !== "") {
          mutate({ name: inputRef.current.value });
        } else {
          disableEdit();
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return { isPending, disableEdit, edit, enableEdit, inputRef };
};

export const useListener = (id: string) => {
  const [listener, setListener] = useState<"MESSAGE" | "SMARTAI" | null>(null);

  const promptSchema = z.object({
    prompt: z.string().min(1),
    reply: z.string(),
  });

  const { isPending, mutate } = useMutationData(
    ["create-lister"],
    (data: { prompt: string; reply: string }) =>
      saveListener(id, listener || "MESSAGE", data.prompt, data.reply),
    "automation-info"
  );

  const { errors, onFormSubmit, register, reset, watch } = useZodForm(
    promptSchema,
    mutate
  );

  const onSetListener = (type: "SMARTAI" | "MESSAGE") => setListener(type);
  return { onSetListener, register, onFormSubmit, listener, isPending };
};

export const useTriggers = (id: string) => {
  const types = useAppSelector(
    (state) => state.AutmationReducer.trigger?.types
  );

  const dispatch: AppDispatch = useDispatch();

  const onSetTrigger = (type: "COMMENT" | "DM") =>
    dispatch(TRIGGER({ trigger: { type } }));

  const { isPending, mutate } = useMutationData(
    ["add-trigger"],
    (data: { types: string[] }) => saveTrigger(id, data.types),
    "automation-info"
  );

  const onSaveTrigger = () => mutate({ types });

  return { types, onSetTrigger, onSaveTrigger, isPending };
};
