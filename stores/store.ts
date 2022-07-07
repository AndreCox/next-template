//set up mobx store
import { makeAutoObservable } from "mobx";

class Store {
  count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }
}

export const store = new Store();
