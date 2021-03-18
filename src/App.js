import { useReducer, useState } from "react";
import "./App.css";

const initState = {
	count: 0,
};

const reducerFun = (state, action) => {
	switch (action.type) {
		case "increament":
			return {
				...state,
				count: state.count + 1,
			};
		case "decreament":
			return {
				...state,
				count: state.count - 1,
			};
		case "initCount":
			return {
				...state,
				count: action.payload,
			};
	}
};

function App() {
	const [input, setInput] = useState(0);
	const [state, dispatch] = useReducer(reducerFun, initState);

	return (
		<div className="App">
			<label>Count: </label>
			<input
				type="number"
				onChange={(e) => setInput(parseInt(e.target.value))}
				value={input}
			/>
			<button onClick={() => dispatch({ type: "initCount", payload: input })}>
				Initialize
			</button>
			<div id="counter-div">
				<button onClick={() => dispatch({ type: "decreament" })}>-</button>
				<p>{state.count}</p>
				<button onClick={() => dispatch({ type: "increament" })}>+</button>
			</div>
		</div>
	);
}

export default App;
