<template>
  <div>
    <form class="mt-6">
      <div class="float-right">
        <div class="flex items-center">
          <span v-if="isLoading" class="text-center">
            <svg class="icon-loader animate-spin h-5 w-5 mr-2 text-gray-500 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        </div>
      </div>
      <div class="md:space-x-4 w-full text-xs">
        <div class="mb-3 space-y-2 w-full text-xs">
          <label
            class="text-sm font-medium text-gray-900 block mb-2">Fund Manager</label>
            <select name="fundManagers" v-model="myFundManager"
            :class="{ 'animate__animated animate__shakeX border-2 border-rose-500': hasError_FM }"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900
              sm:text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
            ">
              <option v-for="(value, name) in npsFundManagers" v-bind:key="name" v-bind:value="name">{{ value}}</option>
            </select>
        </div>
      </div>
      <div class="w-full text-xs mt-8">
        <div class="grid grid-cols-5 gap-4 p-4 items-center" v-for="asset in arrAssetAllocation" :key="asset.id">
          <div class="col-span-2">
            <label class="text-sm font-medium text-gray-900">{{ asset.assetClass }}</label>
          </div>
          <div class="col-span-2">
            <slider v-model="asset.allocationPercent" color="#FB278D" track-color="#ccc" />
          </div>
          <div class="">
            <div class="relative">
              <input v-model="asset.allocationPercent"
                  name="name"
                  type="text"
                  :class="{ 'animate__animated animate__shakeX border-2 border-rose-500': hasError_AP }"
                  class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12">
              <div class="absolute flex border border-transparent right-0 top-0 h-full w-10">
                <div class="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                  %
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col text-center">
        <div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
          <span class="block items-center font-medium tracking-wide text-red-500 text-xs mb-3 ml-1">
            {{ errorMessage }}
          </span>
          <button
            @click="fnSave"
            :disabled="isSaving"
            type="button"
            v-bind:class="{ 'cursor-not-allowed': isSaving }"
            class="
              inline-flex
              items-center
              justify-center
              border border-transparent
              font-medium
              px-3
              py-2
              text-sm
              bg-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:ring-blue-300
              disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-blue-500
              rounded-md
              text-white
              outline-none
              shadow-lg
              transform
              active:scale-x-75
              transition-transform
              flex
            "
          >
            <svg v-bind:class="{ hidden: !isSaving }" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Save</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
  import slider from 'vue3-slider';
  const findKey = require('lodash/findKey');

  const emit = defineEmits(['close']);
  const props = defineProps({
    npsId: String
  });

  const isLoading = ref(false);
  const isSaving = ref(false);
  const hasError_FM = ref(false);
  const hasError_AP = ref(false);
  const errorMessage = ref('');
  const npsFundManagers = ref({});
  const myNumber = ref(0);

  const arrAssetAllocation = ref([]);
  let isDefaultAllocation = false;

  const myFundManager = ref('');

  const fnGetFundManagers = async () => {
    isLoading.value = true;

    let reqUrl = '/api/nps/scheme-enums';
    const response = await fetch(reqUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    isLoading.value = false;

    if (response.status == 200) {
      const data = await response.json()
      npsFundManagers.value = data.fund_managers;
    }
  }

  const fnGetFundAllocation = async () => {
    isLoading.value = true;
    let reqUrl = '/api/nps/' + props.npsId + '/scheme-allocation';

    const response = await fetch(reqUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    isLoading.value = false;

    if (response.status === 200) {
      arrAssetAllocation.value = await response.json();

      if (arrAssetAllocation.value[0].id === "1") {
        isDefaultAllocation = true;
      } else {
        const yoFM = arrAssetAllocation.value[0].fundManager;

        const yoloFM = findKey(npsFundManagers.value, (fm) => { return fm === yoFM; });

        myFundManager.value = yoloFM;
      }
    }
  }

  onMounted(async () => {
    // Promise.all([fnGetFundManagers(), fnGetFundAllocation()]);

    await fnGetFundManagers();
    await fnGetFundAllocation();
  });

  const fnSave = async () => {
    hasError_FM.value = false;
    hasError_AP.value = false;
    errorMessage.value = '';

    if (myFundManager.value === '') {
      setTimeout(() => { hasError_FM.value = true; errorMessage.value = 'Please select the fund manager.'; }, 0);
      return;
    }

    // make sure total allocation percentage is less than 101
    let totalAllocation = 0;
    arrAssetAllocation.value.forEach((asset) => {
      totalAllocation = totalAllocation + asset.allocationPercent;

      asset.fundManager = npsFundManagers.value[myFundManager.value];

      if (isDefaultAllocation) { delete asset.id; }
    });

    if(totalAllocation != 100) {
      setTimeout(() => { hasError_AP.value = true; errorMessage.value = 'Total allocation % should be 100.'; }, 0);
      return;
    }

    isSaving.value = true;
    const reqData = { 'schemes': arrAssetAllocation.value };

    let reqUrl = '/api/nps/' + props.npsId + '/scheme-allocation';
    const response = await fetch(reqUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(reqData),
    });

    if (response.status == 201) {
      emit('close');
    }
  }
</script>
