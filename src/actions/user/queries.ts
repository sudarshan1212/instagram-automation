"use server";

import { client } from "@/lib/prisma";

export const findUser = async (clerkId: string) => {
  try {
    return await client.user.findUnique({
      where: { clerkId },
      include: {
        subscription: true, // Changed from subscriptions to subscription
        Integrations: {
          select: {
            id: true,
            token: true,
            expiresAt: true,
            name: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
};

export const createUser = async (
  clerkId: string,
  firstname: string,
  lastname: string,
  email: string
) => {
  try {
    return await client.user.create({
      data: {
        clerkId,
        firstname: firstname, // Changed to match likely schema field name
        lastname: lastname, // Changed to match likely schema field name
        email,
        subscription: {
          create: {}, // Creates related subscription record
        },
      },
      select: {
        firstname: true, // Changed to match field name
        lastname: true, // Changed to match field name
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
