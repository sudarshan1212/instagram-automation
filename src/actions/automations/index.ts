"use server";

import { onCurrentUser } from "../user";
import {
  addListener,
  addTrigger,
  createAutomation,
  findAutomation,
  getAutomations,
  updateAutomation,
} from "./queries";

export const createAutomations = async (id?: string) => {
  const user = await onCurrentUser();
  try {
    const create = await createAutomation(user.id, id);
    if (create) {
      return { status: 200, data: "Automation created" };
    }
    return { status: 404, error: "Failed to create automation" };
  } catch (e) {
    return { status: 500, error: "Internal Server Error" };
  }
};
export const getAllAutomations = async () => {
  const user = await onCurrentUser();
  try {
    const res = await getAutomations(user.id);
    if (res) {
      return { status: 200, data: res.automations };
    }
    return { status: 404, data: [] };
  } catch (e) {
    return { status: 500, data: [] };
  }
};

export const getAutomationsInfo = async (id: string) => {
  await onCurrentUser();
  try {
    const automation = await findAutomation(id);
    if (automation) {
      return { status: 200, data: automation };
    }
    return { status: 404, error: "Automation not found" };
  } catch (error) {
    return { status: 500, error: "Internal getAutomationsInfo Error" };
  }
};
export const updateAutomationName = async (
  automationId: string,
  data: {
    name?: string;
    active?: boolean;
    automation?: string;
  }
) => {
  await onCurrentUser();
  try {
    const update = await updateAutomation(automationId, data);

    if (update) {
      return { status: 200, data: "Automation updated" };
    }
    return { status: 404, error: "Failed to update automation" };
  } catch (error) {
    return { status: 500, error: "Internal updateAutomationName Error" };
  }
};

export const saveListener = async (
  autmationId: string,
  listener: "SMARTAI" | "MESSAGE",
  prompt: string,
  reply?: string
) => {
  await onCurrentUser();
  try {
    const create = await addListener(autmationId, listener, prompt, reply);
    if (create) return { status: 200, data: "Listener created" };
    return { status: 404, data: "Cant save listener" };
  } catch (error) {}
};
export const saveTrigger = async (automationId: string, trigger: string[]) => {
  await onCurrentUser();
  try {
    const create = await addTrigger(automationId, trigger);
    if (create) return { status: 200, data: "Trigger saved" };
  } catch (error) {}
};
