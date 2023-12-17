import { useLocation } from 'wouter';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/useStore';
import { yupResolver } from '@hookform/resolvers/yup';
import { Iauth } from '../../store/auth/authInterface';
import { setStates } from '../../store/auth/authSlice';
import { formTwoValidations } from '../../validations/form.validations';
import { IformTwoValidations } from '../../validations/interface.validations';

export const FormTwoHandleLogic = () => {
  const dispatch = useAppDispatch();
  const [location, navigate] = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IformTwoValidations>({
    resolver: yupResolver(formTwoValidations),
  });

  const onSubmit = (data: Iauth) => {
    dispatch(setStates(data));
    navigate('/step3');
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
