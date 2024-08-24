import { defineStore } from "pinia";
import { HTTP_UNAUTHORIZED, POST } from "~/constants/http";
import type { Transaction } from "~/types/Transaction";
import type { AppFetch } from "~/types/AppFetch";
import useBasicError from "~/composables/useBasicError";

export const useTrasactionStore = defineStore("transaction-store", () => {
  const me: Ref<null | Transaction> = ref(null);
  const { error, resetError, setError } = useBasicError();
  const isMePending = ref(false);
  const authUrl = ref("/auth/login");
  const refresh = async ($appFetch: AppFetch<Transaction | undefined>) => {
    resetError();
    isMePending.value = true;
    try {
      const res = await $appFetch("transactions", {
        onResponse: () => {},
      });
      if (!res) {
        throw createError("res expect a value");
      }
      me.value = res;
    } catch (exception: any) {
      isMePending.value = false;
      const is401 = exception?.response?.status === HTTP_UNAUTHORIZED;
      if (!is401) {
        return setError(exception);
      }
      const ret = await exception.response._data;
      authUrl.value = ret?.url || "/auth/login";
    }
    isMePending.value = false;
  };

  return {
    me,
    meError: computed(() => error),
    isMePending,
    authUrl,
    isAuthenticated: computed(() => !!me.value),
    refresh,
  };
});
export default useTrasactionStore;
