var alt = require("../alt");
var AsyncDemoActions = require("../actions/AsyncDemoActions");

class AsyncDemoStore {
    constructor() {
        this.appData = [];

        this.bindAction(AsyncDemoActions.loadData, this.onLoadData);
        this.bindAction(AsyncDemoActions.loadDataComplete, this.onLoadDataComplete);
    }

    onLoadData() {
        //this.comments = []; // don't clear to keep state while updating
        this.loading = true;
    }

    onLoadDataComplete(data) {
        this.appData = data;
        this.loading = false;
    }
}

export default alt.createStore(AsyncDemoStore);
