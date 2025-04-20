<template>
  <div>
    <div class="mb-4">
      <button
        @click="showNPSTransactionModal"
        type="button"
        className="inline-flex float-right mb-4 justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      >
        Add New Transaction
      </button>
      <modal-popup :modalOpen="modalOpen" v-if="openNPSTransactionPopup">
        <slot>
          <transition
            enter-active-class="transition ease-out duration-300 transform "
            enter-from-class="opacity-0 translate-y-10 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
          >
            <div
              v-show="modalOpen"
              className="modal-container bg-white w-11/12 md:max-w-5xl mx-auto rounded shadow-lg z-50 overflow-y-auto"
            >
              <div
                id="manageNPSAccount"
                class="modal-content py-4 text-left px-6"
              >
                <svg
                  style="
                    position: absolute;
                    width: 0;
                    height: 0;
                    overflow: hidden;
                  "
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <symbol
                      id="icon-loading"
                      viewBox="0 0 32 32"
                      class="text-black"
                    >
                      <path
                        d="M16 0c-8.711 0-15.796 6.961-15.995 15.624 0.185-7.558 5.932-13.624 12.995-13.624 7.18 0 13 6.268 13 14 0 1.657 1.343 3 3 3s3-1.343 3-3c0-8.837-7.163-16-16-16zM16 32c8.711 0 15.796-6.961 15.995-15.624-0.185 7.558-5.932 13.624-12.995 13.624-7.18 0-13-6.268-13-14 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 8.837 7.163 16 16 16z"
                      ></path>
                    </symbol>
                  </defs>
                </svg>
                <!--Title-->
                <div class="flex justify-between items-center pb-3">
                  <p class="text-2xl font-bold">NPS Transaction</p>
                  <div
                    class="modal-close cursor-pointer z-50"
                    v-on:click="closeNPSTransactionModal"
                  >
                    <svg
                      class="fill-current text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path
                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <!--Body-->
                <ManageNPSTransaction :npsId="props.npsId" />
              </div>
            </div>
          </transition>
        </slot>
      </modal-popup>
    </div>

    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-600
                uppercase
                tracking-wider
              "
            >
              Date
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-600
                uppercase
                tracking-wider
              "
            >
              Particulars
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-600
                uppercase
                tracking-wider
              "
            >
              Amount
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-600
                uppercase
                tracking-wider
              "
            >
              Details
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-600
                uppercase
                tracking-wider
              "
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div class="flex items-center">
                <div class="flex-shrink-0 w-10 h-10">
                  <img
                    class="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">Vera Carpenter</p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">Admin</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">43</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <span
                class="
                  relative
                  inline-block
                  px-3
                  py-1
                  font-semibold
                  text-green-900
                  leading-tight
                "
              >
                <span
                  aria-hidden
                  class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                ></span>
                <span class="relative">Activo</span>
              </span>
            </td>
          </tr>
          <tr>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div class="flex items-center">
                <div class="flex-shrink-0 w-10 h-10">
                  <img
                    class="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">Blake Bowman</p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">Editor</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">Jan 01, 2020</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">77</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <span
                class="
                  relative
                  inline-block
                  px-3
                  py-1
                  font-semibold
                  text-green-900
                  leading-tight
                "
              >
                <span
                  aria-hidden
                  class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                ></span>
                <span class="relative">Activo</span>
              </span>
            </td>
          </tr>
          <tr>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div class="flex items-center">
                <div class="flex-shrink-0 w-10 h-10">
                  <img
                    class="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">Dana Moore</p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">Editor</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">Jan 10, 2020</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">64</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <span
                class="
                  relative
                  inline-block
                  px-3
                  py-1
                  font-semibold
                  text-orange-900
                  leading-tight
                "
              >
                <span
                  aria-hidden
                  class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                ></span>
                <span class="relative">Suspended</span>
              </span>
            </td>
          </tr>
          <tr>
            <td class="px-5 py-5 bg-white text-sm">
              <div class="flex items-center">
                <div class="flex-shrink-0 w-10 h-10">
                  <img
                    class="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">Alonzo Cox</p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">Admin</p>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">70</p>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
              <span
                class="
                  relative
                  inline-block
                  px-3
                  py-1
                  font-semibold
                  text-red-900
                  leading-tight
                "
              >
                <span
                  aria-hidden
                  class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                ></span>
                <span class="relative">Inactive</span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
      >
        <span class="text-xs xs:text-sm text-gray-900">
          Showing 1 to 4 of 50 Entries
        </span>
        <div class="inline-flex mt-2 xs:mt-0">
          <button
            class="
              text-sm text-indigo-50
              transition
              duration-150
              hover:bg-indigo-500
              bg-indigo-600
              font-semibold
              py-2
              px-4
              rounded-l
            "
          >
            Prev
          </button>
          &nbsp; &nbsp;
          <button
            class="
              text-sm text-indigo-50
              transition
              duration-150
              hover:bg-indigo-500
              bg-indigo-600
              font-semibold
              py-2
              px-4
              rounded-r
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  import ModalPopup from '../../common/modal-popup.vue';
  import ManageNPSTransaction from './manage-nps-transaction.vue';

  const props = defineProps({
    npsId: String
  });

  const modalOpen = ref(false);
  const openNPSTransactionPopup = ref(false);
  const isLoading = ref(false);

  const showNPSTransactionModal = () => {
    document.querySelector('body').classList.toggle('modal-active');
    modalOpen.value = true;
    openNPSTransactionPopup.value = true;
  };

  const closeNPSTransactionModal = () => {
    document.querySelector('body').classList.toggle('modal-active');
    modalOpen.value = false;
    openNPSTransactionPopup.value = false;
  };
</script>
