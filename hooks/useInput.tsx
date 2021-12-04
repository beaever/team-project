import { useState } from 'react';

const useInput = (
	initialState: string,
	validator?: (value: string) => boolean,
) => {
	const [value, setValue] = useState(initialState);
	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		if (validator === undefined) {
			setValue(value);
		} else {
			const willdata = validator(value);
			if (willdata) {
				setValue(value);
			}
		}
	};
	return { value, onChange };
};

export default useInput;

/*handleChange라는 함수를 만들어주고 input 태그의 onChange에 적어줌
onChange는 input 안의 값이 변경될 때에 발생.
실행시켜서 input에 글자를 적으면 '텍스트'라는 글자가 input 안의 글로 바뀌게 됨.
이렇게 하면 input으로 state값을 변경할 수 있게 됨*/

/*validtor은 반드시 필요하지 않을수도 있기때문에  validator? 형태로 선언을 해두었고
validator? : (value: string)=> boolean 뜻은 validator 입력 값 value는 string이고 결과 return 값은 boolean 형태로 나온 다는 뜻 
내부에서 if else처리를 통해 validator이 없을 경우를 처리. 
const willdata = validator(value) 처리를 통해서 입력값이 true일때만 입력값이 입력되도록 처리했. */
