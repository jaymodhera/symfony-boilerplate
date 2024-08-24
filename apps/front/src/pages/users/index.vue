<template>
  <div>
    <div class="flex justify-content-end m-3 ">
      <NuxtLink to="/auth/register"
        ><Button>{{ $t("pages.user.index.createButton") }}</Button></NuxtLink
      >
    </div>
    <UserList />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
