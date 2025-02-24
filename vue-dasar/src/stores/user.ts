//@ts-nocheck
import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: null as IUser | null,
  }),
  action: {
    async login(username: String, password: String) {
      if (password == "admin") {
        this.user({ username: username, level: 1 });
      }
    },
    logoff() {
      this.user();
    },
  },
});

interface IUser {
  username: String;
  password: String | null;
  level: Number;
}

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
