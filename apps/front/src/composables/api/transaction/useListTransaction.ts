import type { Transaction } from "~/types/Transaction";
import { GET } from "~/constants/http";
import useAppFetch from "~/composables/useAppFetch";

export default async function useListTransaction() {
  return useAppFetch<Array<Transaction>>(() => "/transactions", {
    key: "listTransaction",
    method: GET,
    lazy: true,
  });
}
