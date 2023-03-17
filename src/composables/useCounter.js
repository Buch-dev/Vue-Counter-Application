import { ref } from 'vue'

export default function useCounter(initialCount = 0, stepSize = 1, newValue = null) {
    let count = ref(initialCount)
    // let counterValue = ref(newValue)
    let step = ref(stepSize)

    function incrementCount() {
        count.value += stepSize
    }

    function decrementCount() {
        count.value -= stepSize
    }

    function resetValue() {
        count.value = 0
    }

    function setValue(newValue) {
        count.value = Number(newValue)
    }

    return {
        count,
        step,
        incrementCount,
        decrementCount,
        resetValue,
        setValue,
        newValue
    }
}