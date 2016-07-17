var alt = require("../alt");
var superagent = require("superagent");

class AsyncDemoActions {
    loadData(val) {

        // simulated asynchronous request
        setTimeout(() => {
            let data = [{ref: 'D1I4X', description: 'an item asynchronously returned'}];
            this.loadDataComplete(JSON.stringify(data));
        }, 300);

        // ajax example with superagent
        // superagent.get('/data/' + val)
        //     .set('X-Requested-With', 'XMLHttpRequest')
        //     .send()
        //     .end((err, response) => {
        //         this.loadDataComplete(response);
        //     });

        return true;
    }

    loadDataComplete(response) {
        return JSON.parse(response);
    }
}

module.exports = alt.createActions(AsyncDemoActions);
