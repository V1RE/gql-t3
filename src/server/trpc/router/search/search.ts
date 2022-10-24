import { z } from "zod";
import { PreprClient } from "../../../prepr/client";
import { publicProcedure } from "../../trpc";

export const search = publicProcedure
  .input(z.string())
  .query(({ input }) => PreprClient.search({ lol: input }));

export const top = publicProcedure
  .input(z.number())
  .query(({ input }) => input * 3);
