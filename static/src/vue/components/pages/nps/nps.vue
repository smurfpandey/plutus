<template>
  <div>
    <section class="p-5">
      <div
        class="container mx-auto flex py-6 flex-col">
        <div class="w-full">
          <div class="leading-relaxed mb-8 font-normal">
            <div
              class="
                w-full
                rounded-lg
                shadow-lg
                p-4
                text-gray-900
                bg-white
                h-72
                grid grid-cols-3
                gap-4
                justify-items-center
              "
            >
              <div class="flex justify-center items-center">
                <div>
                  <div class="text-2xl my-4">NPS Value</div>
                  <div v-if="npsAccount.totalValue" class="font-bold text-5xl text-gray-700 tracking-wide">
                    ₹ {{ npsAccount.totalValue }}
                  </div>
                </div>
              </div>
              <div class="col-span-2 flex justify-center items-center">
                <div>
                  <button
                  @click="showNPSAccountModal"
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Manage NPS Account
                </button>
                <modal-popup :modalOpen="modalOpen" v-if="openNPSAccountPopup">
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
                        class="
                          modal-container
                          bg-white
                          w-11/12
                          md:max-w-5xl
                          mx-auto
                          rounded
                          shadow-lg
                          z-50
                          overflow-y-auto
                        "
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
                            <p class="text-2xl font-bold">NPS Account</p>
                            <div
                              class="modal-close cursor-pointer z-50"
                              v-on:click="closeNPSAccountModal"
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

                          <ManageNPSAccount :npsAccount="npsAccount" @updated="npsAccount = $event" />
                        </div>
                      </div>
                    </transition>
                  </slot>
                </modal-popup>
                </div>
                <div class="ml-8" v-if="npsAccount.id">
                  <button
                    @click="showNPSSchemeModal"
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Manage NPS Scheme
                  </button>
                <modal-popup :modalOpen="modalOpen" v-if="openNPSSchemePopup">
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
                        class="
                          modal-container
                          bg-white
                          w-11/12
                          md:max-w-5xl
                          mx-auto
                          rounded
                          shadow-lg
                          z-50
                          overflow-y-auto
                        "
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
                            <p class="text-2xl font-bold">NPS Scheme</p>
                            <div
                              class="modal-close cursor-pointer z-50"
                              v-on:click="closeNPSSchemeModal"
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

                          <ManageNPSScheme :npsId="npsAccount.id" @close="closeNPSSchemeModal" />
                        </div>
                      </div>
                    </transition>
                  </slot>
                </modal-popup>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full px-2">
          <TabGroup>
      <TabList class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
        <Tab
          v-slot="{ selected }"
           as="template"
        >
          <button
            :class="[
              'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            Analytics
          </button>
        </Tab>
        <Tab
          v-slot="{ selected }"
           as="template"
        >
          <button
            :class="[
              'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            Transactions
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          :class="[
            'rounded-xl p-3',
            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
          ]"
        >
          Ooooo shiny
        </TabPanel>
        <TabPanel
          :class="[
            'rounded-xl mt-8',
            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
          ]"
        >
          <ViewNPSTransaction :npsId="npsAccount.id" />
        </TabPanel>
      </TabPanels>
    </TabGroup>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
  import { onMounted, ref } from 'vue';
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';

  import ModalPopup from '../../common/modal-popup.vue';
  import ManageNPSAccount from './manage-nps-account.vue';
  import ManageNPSScheme from './manage-nps-scheme.vue';
  import ViewNPSTransaction from './nps-transactions.vue';

  const modalOpen = ref(false);
  const openNPSAccountPopup = ref(false);
  const openNPSSchemePopup = ref(false);
  const isLoading = ref(false);
  const npsAccount = ref({});

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

  const showNPSAccountModal = () => {
    document.querySelector('body').classList.toggle('modal-active');
    modalOpen.value = true;
    openNPSAccountPopup.value = true;
  };

  const closeNPSAccountModal = () => {
    document.querySelector('body').classList.toggle('modal-active');
    modalOpen.value = false;
    openNPSAccountPopup.value = false;
  };

  const showNPSSchemeModal = () => {
    document.querySelector('body').classList.toggle('modal-active');
    modalOpen.value = true;
    openNPSSchemePopup.value = true;
  };

  const closeNPSSchemeModal = () => {
    document.querySelector('body').classList.toggle('modal-active');
    modalOpen.value = false;
    openNPSSchemePopup.value = false;
  };
</script>
