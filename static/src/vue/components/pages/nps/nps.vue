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
                <modal-popup :modalOpen="modalOpen" v-if="showNPSAccountModal">
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
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table class="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Date
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Particulars
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Amount
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Details
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Status
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
										<div class="flex-shrink-0 w-10 h-10">
											<img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
													Vera Carpenter
												</p>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Admin</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										43
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative">Activo</span>
									</span>
								</td>
							</tr>
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
										<div class="flex-shrink-0 w-10 h-10">
											<img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
													Blake Bowman
												</p>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Editor</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										Jan 01, 2020
									</p>
                </td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										77
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative">Activo</span>
									</span>
								</td>
							</tr>
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
										<div class="flex-shrink-0 w-10 h-10">
											<img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
													Dana Moore
												</p>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Editor</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										Jan 10, 2020
									</p>
                </td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										64
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
									<span class="relative">Suspended</span>
									</span>
								</td>
							</tr>
							<tr>
								<td class="px-5 py-5 bg-white text-sm">
									<div class="flex items-center">
										<div class="flex-shrink-0 w-10 h-10">
											<img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                alt="" />
                                        </div>
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
													Alonzo Cox
												</p>
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
                                        class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
									<span class="relative">Inactive</span>
									</span>
								</td>
							</tr>
						</tbody>
					</table>
					<div
						class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
						<span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
						<div class="inline-flex mt-2 xs:mt-0">
							<button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
							&nbsp; &nbsp;
							<button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
						</div>
					</div>
				</div>
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
