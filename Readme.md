## react + flux (redux) + react-router + gulp application skeleton

### Start hacking:

    npm install

    node_modules/.bin/gulp compile
    node_modules/.bin/gulp watch

### Demo:

simply open ```public/index.html``` in a browser (after compilation)

### What's inside:

- react
- react-router
- redux for data flow

gulp build configuration:
- jsx transpiler
- es6 transpiler
- browserify bundling

### How it works

#### Initial wiring
Let's follow the trail.. the entry point is ```main.js```
- Exposes a global ```renderApp()``` method to integrate with existing JS layer. It's called immediately in this example.
- Renders the ```root.jsx``` component into ```<main>``` of ```index.html```
- Contains an example of exposing a public API to the app

The component described in ```root.jsx``` contains
- The redux store provider, which holds our application state
- react-router with ```routes.jsx``` mounted, which handles navigating through different pages in our app.

Inspecting ```routes.jsx``` reveals ```App.jsx``` as the parent component, with routed children for ```/ (Index)```, ```/asyncdemo (AsyncDemo)``` and ```* (NotFound)```

#### App.jsx
Our top level ```react``` view component. It renders the ```<Navigation>``` component, as well as the child page as determined by ```react-router``` and injected via props

#### Index & NotFound
Default views used by the corresponding routes

#### AsyncDemo
This is where the ```redux``` example starts. Please note: while it is isolated to a single page here, the implementation could happen on any level of the component hierarchy, or on multiple ones in parallel

As can be seen in the route configuration, the react component for this route is actually called ```<AsyncDemoContainer>```. Component containers are used to map relevant pieces of the application state to the actual react view component, ```<AsyncDemo>```. From within the AsyncDemo component, they will be accessible as properties.

Since properties cannot be changed from within the component, an action will need to be triggered, such as loading data when clicking on a button. There are some actions defined in ```AsyncDemoActions```; In order to access an action from our ```AsyncDemo``` view, the ```AsyncDemoContainer``` passes them as properties as well.

If an action results in a state change, and that change affects our component (as determined by the component container), it will be updated accordingly. We have now achieved a basic ```flux``` workflow.

It's important to note that with ```redux```, there is an additional concept: ```reducers```. These are responsible for managing the changes to our application state and can be found in ```AsyncDemoReducers```. Be sure to head over to the redux documentation to learn more.

Action > Reducer > State > Container > Component > ```this.props``` (can contain actions, thus closing the cycle)

### Building for production:

    NODE_ENV=production node_modules/.bin/gulp compile
    NODE_ENV=production node_modules/.bin/gulp build

the result will be in ```public/js/build/main.js``` with significantly smaller filesize.

### TODO:
- [ ] separate vendor bundle
