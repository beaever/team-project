import useSWR from 'swr';

interface loginDataModel {
	login: boolean;
}

const initial_value = {
	login: false,
};

const fetcher = (url: string) => {
	if (!localStorage.getItem('load-login')) {
		return initial_value;
	} else {
		return JSON.parse(localStorage.getItem('load-login'));
	}
};

const useLoginState = (
	props: string,
): {
	loginForm: loginDataModel;
	setLoginForm: Function;
	loadLogin: boolean;
	useLoginStateReset: Function;
	mutateConfirm: Function;
} => {
	const { data, mutate, isValidating, error } = useSWR('load-login', fetcher);

	const mutateConfirm = () => {
		return mutate('load-login');
	};

	const mutateWrappper = (newForm) => {
		localStorage.setItem('load-login', JSON.stringify(newForm));
		return mutate();
	};

	const useLoginStateReset = () => {
		localStorage.setItem('load-login', JSON.stringify(initial_value));
		return mutate();
	};

	return {
		loginForm: data as loginDataModel,
		setLoginForm: mutateWrappper,
		loadLogin: isValidating,
		useLoginStateReset,
		mutateConfirm,
	};
};

export default useLoginState;
