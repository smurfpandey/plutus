<template>
  <div>
    <form>
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
      <div class="md:space-x-4 w-full text-xs">
        <div class="mb-3 space-y-2 w-full text-xs">
          <datepicker v-model="npsAccount.snapshotDate"
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
            " />
        </div>
      </div>
      <div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
        <button
          @click="fnSave"
          :disabled="isLoading"
          type="button"
          class="
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
          <span>Save</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
import Datepicker from 'vue3-datepicker';


    let isLoading = ref(false);

    let npsAccount = ref({});

    const fnSave = async () => {
      isLoading.value = true;

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

      isLoading.value = false;

      if (response.status != 201) {
        return;
      }

      npsAccount.value = await response.json();
    };


</script>
