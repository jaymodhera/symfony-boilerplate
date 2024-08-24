import { POST } from "~/constants/http";
import type { Transaction, TransactionId } from "~/types/Transaction";
import useBasicError from "~/composables/useBasicError";

type TransactionInput = Omit<Transaction, "id"> & {
  location: string;
};
export default function useUpdateLocation() {
  const { $appFetch } = useNuxtApp();
  const { setError, resetError, errorMessage, violations } = useBasicError();
  return {
    errorMessage,
    violations,
    async updateLocation(transactionId: TransactionId, location: TransactionInput) {
      try {
        resetError();
        const formData = new FormData();
        formData.append("location", location);
        const response = await $appFetch<Transaction>(`/transaction/${transactionId}/update`, {
          method: POST,
          body: formData
        });
        if (!response) {
          throw createError("Error while updating user");
        }
        return response;
      } catch (e: any) {
        setError(e);
        throw e;
      }
    },
  };
}
