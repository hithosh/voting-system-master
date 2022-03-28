import { useRef } from "react";

export function FunctionRef() {
	const inputEl = useRef(null);
	const onButtonClick = () => {
	  //@ts-ignore
	  inputEl.current.focus();
	};
	return (
	  <>
		<input ref={inputEl} type="text" />
		<button onClick={onButtonClick}>Focus the input</button>
	  </>
	);
  }