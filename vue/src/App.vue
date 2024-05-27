<template>
  <div class="bg-slate-700 p-4 text-white w-[250px] min-h-screen fixed">
    <div class="flex flex-col ">
      <div class="p-2 text-2xl">
        ECOMMERCE
      </div>

      <div class="flex flex-col gap-4 mt-6 item mx-4 ">
        <div @click="$router.push('/')" class=" hover:bg-slate-100 rounded-md p-2 hover:text-black cursor-pointer">Home
        </div>
        <div @click="$router.push('/manageproduct')"
          class="hover:bg-slate-100 rounded-md p-2 hover:text-black cursor-pointer">Manage
          Product
        </div>
        <div @click="$router.push('/manageuser')"
          class="hover:bg-slate-100 rounded-md p-2 hover:text-black cursor-pointer">Manage User
        </div>
        <div @click="$router.push('/home')" class="hover:bg-slate-100 rounded-md p-2 hover:text-black cursor-pointer">
          Logout</div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style></style>
