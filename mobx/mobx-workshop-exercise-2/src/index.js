import React from "react";
import { render } from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";

const state = observable({
  title: "Learn MobX Basics",
  done: false,
  toggle() {
    this.done = !this.done;
  }
});

const App = observer(() => (
  <div>
    <h2>
      {state.title} {state.done ? "(done)" : "(not done)"}
    </h2>
    <button onClick={() => state.toggle()}>Toggle</button>
  </div>
));

render(<App />, document.getElementById("root"));
