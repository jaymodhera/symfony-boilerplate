<template>
  <Card class="card">
    <template #title>
      <h1 class="font-medium text-3xl text-900">
        {{ $t("components.user.list.title") }}
      </h1>
      <div v-show="usersPending" v-t="{ path: 'components.user.list.pending' }"></div>
      <div v-show="error">{{ error }}}</div>
      {{ errorDelete }}
    </template>
    <template #content>
      <DataTable
        v-if="users"
        :value="users"
        scrollable
        selectionMode="single"
        :metaKeySelection="false"
        paginator
        :rows="10"
        :rowsPerPageOptions="[10, 20, 50, 100]"
        scrollHeight="flex"
        tableStyle="min-width: 10rem"
      >
        <Column field="email" :header="$t('components.user.form.email')"></Column>
        <Column field="username" :header="$t('components.user.list.username')"></Column>
        <Column field="eidt" :header="$t('components.user.list.edit')">
          <template #body="slotProps">
            <NuxtLink v-if="!authStore.isAuthUser(slotProps.data)" :to="`/users/${slotProps.data.id}`">
              <Button severity="secondary">{{ $t("components.user.list.edit") }}</Button>
            </NuxtLink>
          </template>
        </Column>
        <Column field="delete" :header="$t('components.user.list.delete')">
          <template #body="slotProps">
            <Button
              v-if="!authStore.isAuthUser(slotProps.data)"
              severity="danger"
              @click="deleteUserClick(slotProps.data)"
            >
              {{ $t("components.user.list.delete") }}
            </Button>
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</template>

<script setup lang="ts">
import type { User } from "~/types/User";
import useAuthUser from "~/store/auth";
import useListUsers from "~/composables/api/user/useListUsers";
import useDeleteUser from "~/composables/api/user/useDeleteUser";

const authStore = useAuthUser();
const { deleteUser, errorMessage: errorDelete } = useDeleteUser();

const {
  data: users,
  error,
  pending: usersPending,
  refresh: usersRefresh,
} = await useListUsers();

const deleteUserClick = async (user: User) => {
  try {
    await deleteUser(user);
    usersRefresh();
  } catch (e) {
    logger.error(e);
    throw e;
  }
};
</script>
<style scoped lang="scss"></style>
