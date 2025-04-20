import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { feedback } from "~/server/db/schema";

export const feedbackRouter = createTRPCRouter({
  submit: protectedProcedure
    .input(
      z.object({
        message: z.string().min(1, "Feedback message is required"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(feedback).values({
        message: input.message,
        userId: ctx.session.user.id,
      });
    }),
});
