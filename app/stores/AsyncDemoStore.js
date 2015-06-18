var alt = require("../alt");
var AsyncDemoActions = require("../actions/AsyncDemoActions");

class AsyncDemoStore {
    constructor() {
        this.data = [];

        this.bindAction(AsyncDemoActions.loadData, this.onLoadData);
        this.bindAction(AsyncDemoActions.loadDataComplete, this.onLoadDataComplete);
    }

    onLoadData() {
        //this.comments = []; // don't clear to keep state while updating
        this.loading = true;
    }

    onLoadDataComplete(data) {
        this.data = data;
        this.loading = false;
    }
}

export default alt.createStore(AsyncDemoStore);
