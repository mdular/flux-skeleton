var alt = require("../alt");
var AsyncDemoActions = require("../actions/AsyncDemoActions");

class AsyncDemoStore {
    constructor() {
        this.appData = [];

        this.bindListeners({
            onLoadData: AsyncDemoActions.LOAD_DATA,
            onLoadDataComplete: AsyncDemoActions.LOAD_DATA_COMPLETE
        });
    }

    onLoadData(data) {
        this.loading = true;
    }

    onLoadDataComplete(data) {
        console.log('onLoadDataComplete', data);
        this.appData = data;
        this.loading = false;
    }
}

module.exports = alt.createStore(AsyncDemoStore, 'AsyncDemoStore');
