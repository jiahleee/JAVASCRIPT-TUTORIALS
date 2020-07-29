class Inventory {
    /**
     * @param {string[]} items
     */
    constructor() {
        this.items = [];
    } //빈 배열 items=[]; 변수 선언해준다.

    addItem(item) {
        return this.items.push(item);
    }

    getItems() {
        return this.items;
    }

    getCount() {
        return this.items.length;
    }

    exists(item) {
        return this.items.includes(item);
    }
}

// Do not modify this
export default Inventory;
