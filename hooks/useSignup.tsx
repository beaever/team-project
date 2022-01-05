import useSWR from 'swr';
import lodash from 'lodash';

type SignupTypes = {
  type: string;
  id: string;
  name: string;
  phone: string;
  auth: string;
  check_auth: string;
  birth: string;
  gender: string;
  email: string;
  nick_name: string;
  service: number;
  privacy: number;
  location_based: number;
  marketing: number;
};

const initial_value = {
  type: '',
  phone: '',
  auth: '',
  check_auth: '',
  birth: '',
  gender: '',
  email: '',
  nick_name: '',
  id: '',
  name: '',
  service: 0,
  privacy: 0,
  location_based: 0,
  marketing: 0,
};

const fetcher = (url: string) => {
  if (window.signup) {
    return window.signup;
  } else {
    return initial_value;
  }
};

const useSignup = (
  props: string
): {
  form: SignupTypes;
  setForm: Function;
  signupLoading: boolean;
  reset: Function;
} => {
  const { data, mutate, isValidating, error } = useSWR('signup', fetcher);
  const mutateWrappper = (newForm) => {
    window.signup = newForm;
    return mutate();
  };

  const reset = () => {
    window.signup = initial_value;
    return mutate();
  };

  return {
    form: data as SignupTypes,
    setForm: mutateWrappper,
    signupLoading: isValidating,
    reset,
  };
};

export default useSignup;
