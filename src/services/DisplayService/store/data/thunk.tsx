import DisplayServiceApi from '../../api/DisplayServiceAPI';
import { setIsLoading, setData, setErrors } from './dataSlice';

export const getData = () => {
  return async (dispatch: any) => {
    try {
      dispatch(setIsLoading()); // Set isLoading to true
      const { data } = await DisplayServiceApi.get('');
      setTimeout(() => {
        if (data) dispatch(setData(data));
      }, 1000); // simulate a time request
    } catch (err: any) {
      dispatch(setErrors(err)); // Set errors from the API response
    } finally {
      dispatch(setIsLoading()); // Set isLoading to false
    }
  };
};
