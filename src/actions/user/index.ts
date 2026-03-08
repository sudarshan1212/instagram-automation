"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { refreshToken } from "@/lib/fetch";
import { updateIntegration } from "../integrations/queries";

export const onCurrentUser = async () => {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");
  return user;
};

export const onBoardUser = async () => {
  const user = await onCurrentUser();

  try {
    const found = await findUser(user.id);

    if (found) {
      // Check if user has integrations and handle token refresh
      if (found.Integrations.length > 0) {
        const integration = found.Integrations[0];

        // Check if expiresAt exists and is not null
        if (!integration.expiresAt) {
          console.log(
            "Integration has no expiration date, skipping token refresh"
          );
          return {
            status: 200,
            data: {
              firstname: found.firstname,
              lastname: found.lastname,
            },
          };
        }

        const today = new Date();
        const timeLeft = integration.expiresAt.getTime() - today.getTime();
        const days = Math.round(timeLeft / (1000 * 3600 * 24));

        // Refresh token if expiring within 5 days
        if (days < 5) {
          console.log("Refreshing token - expires in", days, "days");

          try {
            const refresh = await refreshToken(integration.token);

            // Create new expiration date (60 days from now)
            const expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 60);

            const updateResult = await updateIntegration(
              refresh.access_token,
              expireDate,
              integration.id
            );

            if (!updateResult) {
              console.error("Failed to update token");
            } else {
              console.log("Token refreshed successfully");
            }
          } catch (refreshError) {
            console.error("Error refreshing token:", refreshError);
            // Don't fail the entire onboarding process if token refresh fails
          }
        }
      }

      return {
        status: 200,
        data: {
          firstname: found.firstname,
          lastname: found.lastname,
        },
      };
    }

    // Create new user if not found
    const created = await createUser(
      user.id,
      user.firstName || "Unknown", // Handle potential null values
      user.lastName || "User", // Handle potential null values
      user.emailAddresses[0].emailAddress
    );

    return {
      status: 201,
      data: created,
    };
  } catch (error) {
    console.error("Error in onBoardUser:", error);
    return {
      status: 500,
      error: "Internal Server Error",
    };
  }
};
// react-qeuery prefetching uses this
export const onUserInfo = async () => {
  const user = await onCurrentUser();
  try {
    const profile = await findUser(user.id);
    if (profile) {
      return { status: 200, data: profile };
    }
    return { status: 404 };
  } catch (error) {
    return { status: 500 };
  }
};
