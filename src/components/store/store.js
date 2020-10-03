export function createStore() {
  return {
    data: [],
    addData(text) {
      this.data.push({
        text,
      });
    },
    removeData(text) {
      this.data = this.data.filter((data) => data.text !== text);
    },
  };
}
