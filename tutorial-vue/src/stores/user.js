import { acceptHMRUpdate, defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    username: "",
    group: "admin",
  }),
  getters: {
    listUser: (state) => state,
  },
  actions: {
    login(username) {
      this.$patch({ username: username });
    },
    logoff() {
      this.$patch({ username: "", group: "" });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
