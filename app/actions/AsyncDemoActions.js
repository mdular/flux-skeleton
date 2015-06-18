var alt = require("../alt");
var superagent = require("superagent");

class AsyncDemoActions {
    loadData(val) {

        // simulated asynchronous request
        setTimeout(() => {
            this.actions.loadDataComplete({text: '[{"data":"some data"}, {"data":"some other data"}]'});
        }, 300);

        // ajax example with superagent
        // superagent.get('/data/' + val)
        //     .set('X-Requested-With', 'XMLHttpRequest')
        //     .send()
        //     .end((err, response) => {
        //         this.actions.loadDataComplete(response);
        //     });

        this.dispatch();
    }

    loadDataComplete(response) {
        this.dispatch(JSON.parse(response.text));
    }
}

export default alt.createActions(AsyncDemoActions);
