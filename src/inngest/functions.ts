import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // ex: fetching video
    await step.sleep("fetching", "5s");

    // ex: transcribing video
    await step.sleep("transcribing", "5s");

    // ex: sending transcription to AI
    await step.sleep("sending to AI", "5s");

    await step.run("create-workflow", () => {
      return prisma.workflow.create({
        data: {
          name: "worflow-from-inngest",
        },
      });
    });

    // return { message: `Hello ${event.data.email}!` };
  }
);
