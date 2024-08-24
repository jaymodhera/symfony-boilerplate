
<template>
  <div class="card">
    <Dialog 
      v-model:visible="dialogVisible"
      :header="$t('pages.transaction.index.selectLocation')"
      :style="{ width: '25vw' }"
      maximizable
      modal
      :contentStyle="{ height: '300px' }"
    >
      <DataTable
        v-model:selection="selectedLocation"
        :value="data"
        scrollable
        selectionMode="single"
        dataKey="name" :metaKeySelection="false"
        @rowSelect="onRowSelect"
        @rowUnselect="onRowUnselect"
        scrollHeight="flex"
        tableStyle="min-width: 10rem"
      >
        <Column field="name" :header="$t('pages.transaction.index.location')"/>
      </DataTable>
      <template #footer>
        <Button label="Update" icon="pi pi-check" @click="ok" />
      </template>
      <div
          class="surface-ground p-0 flex align-items-center justify-content-center"
      >
        <h5 class="m-0"> {{ $t("pages.transaction.index.note") }} </h5>
    </div>
    </Dialog>
  </div>
</template>

<script setup>
import { GOOGLE_API_URL, GOOGLE_API_KEY, RADIUS } from "~/constants/common";

const props = defineProps({
    visible: {
        type: Boolean,
        default: false,
    },
    data: {
        type: Object,
        default: null,
    },
    row: {
        type: Object,
        default: null,
    }
});
const emits = defineEmits(['update', 'selectLocation']);
const selectedLocation = ref(null);

// const location = `${props.row.latitude},${props.row.longitude}`
// const url = `${GOOGLE_API_URL}?location=${location}&radius=${RADIUS}&key=${GOOGLE_API_KEY}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log('Nearby Places:', data.results);
// })
// .catch(error => {
//     console.error('Error:', error);
// });

const dialogVisible = ref(false);

onMounted(() => {
    dialogVisible.value = props.visible;
});

const onRowSelect = (e) => {
    selectedLocation.value = e.data;
};
const onRowUnselect = (e) => {
    selectedLocation.value = null;
};
const ok = () => {
    dialogVisible.value = false;
    emits('update', dialogVisible.value);
    emits('selectLocation', selectedLocation.value);
};

</script>
