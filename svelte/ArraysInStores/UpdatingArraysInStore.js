import { writable } from 'svelte/store';

const myStore = writable([]);

// replace entire array
export function setWholeArray(arrayData) {
    myStore.set([...arrayData]);
}

// update single array item
export function updateSingleArrayItem(itemData) {
    myStore.update((arrayItems) => {
        let targetIndex = arrayItems.findIndex((item) => item.id === itemData.id);
        arrayItems[targetIndex] = itemData;
        return arrayItems;
    });
}

// delete single item
export function destroySingleArrayItem(itemData) {
    myStore.update((arrayItems) => {
        return arrayItems.filter((item) => item.id !== itemData.id);
    });
}