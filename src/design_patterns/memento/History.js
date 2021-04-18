class History {
    constructor() {
        this.states = [];
    }

    push(state) {
        this.states.push(state);
    }

    pop() {
        let lastIndex = this.states.length - 1;
        let lastState = this.states[lastIndex];
        this.states.pop(lastState);

        return lastState;
    }
}

export default History;