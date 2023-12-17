import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formOneValidations } from '../../validations/form.validations';
import { IformOneValidations } from '../../validations/interface.validations';
import { useAppDispatch } from '../../hooks/useStore';
import { setStates } from '../../store/auth/authSlice';
import { useLocation } from 'wouter';
import { Iauth } from '../../store/auth/authInterface';

export const FormHandleLogic = () => {
  const dispatch = useAppDispatch();
  const [location, navigate] = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<IformOneValidations>({
    resolver: yupResolver(formOneValidations),
  });

  const onSubmit = (data: Iauth) => {
    dispatch(setStates(data));
    navigate('/step2');
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
