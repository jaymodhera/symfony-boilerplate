<template>
  <Card class="card">
    <template #title>
      <h1 class="font-medium text-3xl text-900">
        {{ $t("components.transaction.index.title") }}
      </h1>
      <div v-show="transactionsPending" v-t="{ path: 'components.transaction.index.pending' }"></div>
      <div v-show="error">{{ error }}}</div>
      <Divider />
    </template>
    <template #content>
      <TransactionLocalizationModal
        v-if="isOpen"
        :visible="isOpen"
        :row="selectedRow"
        :data="locationData"
        @update="isOpen = false"
        @selectLocation="update"
      />
      <DataTable
        v-if="transactions"
        :value="transactions"
        paginator
        :rows="10"
        :rowsPerPageOptions="[10, 20, 50, 100]"
        sortMode="multiple"
        dataKey="code"
        tableStyle="min-width: 50rem"
      >
        <Column field="datetime.date" sortable :header="$t('components.transaction.index.dateTime')">
          <template #body="slotProps">
            {{ formatDate(slotProps.data.datetime.date) }}
          </template>
        </Column>
        <Column field="amount" sortable :header="$t('components.transaction.index.amount')">
          <template #body="slotProps">
            {{ formatCurrency(slotProps.data.amount) }}
          </template>
        </Column>
        <Column field="code" sortable :header="$t('components.transaction.index.payment')" />
        <Column field="location" :header="$t('components.transaction.index.locatiozation')">
          <template #body="slotProps">
            <div v-if="slotProps.data.location === null">
              <Button type="button" severity="success" class="mr-2 mb-2" @click="addLocation(slotProps.data)">
                {{ $t("components.transaction.index.identifyPlace") }}
              </Button>
            </div>
            <div v-else>
              {{ slotProps.data.location }}
            </div>
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Transaction, LocationUpdate } from "~/types/Transaction";
import useListTransaction from "~/composables/api/transaction/useListTransaction";
import mockData from '../../data/mockData.json';
import useUpdateLocation from "~/composables/api/transaction/useUpdateLocation";

const { updateLocation } = useUpdateLocation();

const {
  data: transactions,
  error,
  pending: transactionsPending,
  refresh: transactionsRefresh,
} = await useListTransaction();

const locationData = ref(mockData.results);
const formatCurrency = (value: number) => {
  return value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
}

const formatDate = (value: string | number | Date) => {
  const date = new Date(value);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}
const isOpen = ref(false);
const selectedRow = ref();
const addLocation = (transaction: Transaction) => {
  isOpen.value = true;
  selectedRow.value = transaction;
}

const update = async (location: LocationUpdate)  => {
  await updateLocation(selectedRow.value.id, location.name);
  isOpen.value = false;
  transactionsRefresh();
}
</script>

<style scoped lang="scss"></style>