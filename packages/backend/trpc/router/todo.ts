import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
  }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string().trim().min(1).max(191),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.todo.create({ data: { title: input.title } });
    }),
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.todo.delete({ where: { id: input.id } });
    }),
  updateDone: publicProcedure
    .input(
      z.object({
        id: z.string(),
        done: z.boolean(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.todo.update({
        where: { id: input.id },
        data: {
          done: input.done,
        },
      });
    }),
});
