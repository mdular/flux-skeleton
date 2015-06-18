var alt = require("../alt");
var superagent = require("superagent");

class AsyncDemoActions {
    loadData(val) {
        superagent.get('data.json') //superagent.get('/getcomments/${val}')
            .set('X-Requested-With', 'XMLHttpRequest')
            .send()
            .end((err, response) => {
                this.actions.loadDataComplete(response);
            });

        this.dispatch();
    }

    loadDataComplete(response) {
        console.log(response);

        this.dispatch(JSON.parse(response.text));
    }
}

export default alt.createActions(AsyncDemoActions);
