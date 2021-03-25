
"use strict";
class ResultDeal {
    constructor(value) {
        this.value = value;
    }
    Search() {
        window.open(`/search?word=${this.value}`,"_self")
    }
}