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
            class="text-sm font-medium text-gray-900 block mb-2"
            >Last Valuation Date</label
          >
          <input type="date" id="start" name="trip-start"
            v-model="npsAccount.lastValuationDate"
            :max="new Date()"
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
            " />
          <!-- <datepicker
            :upperLimit="new Date()"
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
            " /> -->
        </div>
      </div>
      <div class="md:flex flex-row md:space-x-4 w-full text-xs">
        <div class="mb-3 space-y-2 w-full text-xs">
          <label
            for="email"
            class="text-sm font-medium text-gray-900 block mb-2"
            >PRAN</label
          >
          <input
            type="text"
            id="pran"
            v-model="npsAccount.pran"
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
            "
            required=""
          />
        </div>
        <div class="mb-3 space-y-2 w-full text-xs">
          <label
            for="password"
            class="text-sm font-medium text-gray-900 block mb-2"
            >Subscriber Name</label
          >
          <input
            type="text"
            id="subName"
            v-model="npsAccount.subscriberName"
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
            "
            required=""
          />
        </div>
      </div>
      <div class="md:flex flex-row md:space-x-4 w-full text-xs">
        <div class="mb-3 space-y-2 w-full text-xs">
          <label
            for="password"
            class="text-sm font-medium text-gray-900 block mb-2"
            >Total Contribution</label
          >
          <input
            type="text"
            id="totalContribution"
            v-model="npsAccount.totalContribution"
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
            "
            required=""
          />
        </div>
        <div class="mb-3 space-y-2 w-full text-xs">
          <label
            for="password"
            class="text-sm font-medium text-gray-900 block mb-2"
            >Current Value</label
          >
          <input
            type="text"
            id="totalValue"
            v-model="npsAccount.totalValue"
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
            "
            required=""
          />
        </div>
      </div>
      <div class="md:flex flex-row md:space-x-4 w-full text-xs">
        <div class="mb-3 space-y-2 w-full text-xs">
          <label
            for="password"
            class="text-sm font-medium text-gray-900 block mb-2"
            >Returns Earned</label
          >
          <input
            type="text"
            id="returnEarned"
            v-model="npsAccount.returnEarned"
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
            "
            required=""
          />
        </div>
        <div class="mb-3 space-y-2 w-full text-xs">
          <label
            for="password"
            class="text-sm font-medium text-gray-900 block mb-2"
            >Intermediary Charges</label
          >
          <input
            type="text"
            id="intermediaryCharges"
            v-model="npsAccount.intermediaryCharges"
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
            "
            required=""
          />
        </div>
      </div>
      <div class="flex flex-col text-center">
        <div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
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
import { onMounted, ref, reactive } from 'vue';


    let isSaving = ref(false);
    let isLoading = ref(false);

    let npsAccount = ref({});

    const fnGetNPSAccount = async () => {
      isLoading.value = true;

      let reqUrl = '/api/nps';
      const response = await fetch(reqUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      isLoading.value = false;

      if (response.status == 200) {
        npsAccount.value = await response.json();
      }
    }

    onMounted(() => {
      fnGetNPSAccount();
    });

    const fnSave = async () => {
      isSaving.value = true;

      let reqUrl = '/api/nps';
      if (npsAccount.value.id) {
        reqUrl += '/' + npsAccount.value.id;
      }
      const response = await fetch(reqUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(npsAccount.value),
      });

      isSaving.value = false;

      if (response.status != 201) {
        return;
      }

      npsAccount.value = await response.json();
    };


</script>
