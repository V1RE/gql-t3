import { router } from "../trpc";
import { search, top } from "./search/search";

export const preprRouter = router({
  search,
  top,
});
