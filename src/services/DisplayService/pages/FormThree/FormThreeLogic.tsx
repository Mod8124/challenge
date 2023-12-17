import { useLocation } from 'wouter';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../hooks/useStore';
import { Iauth } from '../../store/auth/authInterface';
import { setStates } from '../../store/auth/authSlice';
import { formThreeValidations } from '../../validations/form.validations';
import { IformThreeValidations } from '../../validations/interface.validations';

export const FormThreeHandleLogic = () => {
  const dispatch = useAppDispatch();
  const [location, navigate] = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<IformThreeValidations>({
    resolver: yupResolver(formThreeValidations),
  });

  const onSubmit = (data: Iauth) => {
    dispatch(setStates(data));
    navigate('/thanks'); // `pushState` is used
  };

  return {
    register,
    handleSubmit,
    errors,
    getValues,
    onSubmit,
    setValue,
  };
};
