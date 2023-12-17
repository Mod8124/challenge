import { FC } from 'react';
import { ArticleStyle, InputStyle } from './input.style';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { Tid } from '../../store/data/dataInterface';
import { IForm } from '../../validations/interface.validations';
import { Options } from './Options';
import { useToggle } from '../../hooks/useToggle';
import { Error } from '../Error';
import { useAuthStore } from '../../hooks/useAuth';
import { Icon } from './Icon/';
import { Textarea } from './Textarea';

export interface Iinput {
  type: string;
  placeholder: string;
  name: Tid;
  autoComplete: string;
  register: UseFormRegister<IForm>;
  error: any;
  options?: string[];
  setValue?: UseFormSetValue<IForm>;
}

export const Input: FC<Iinput> = ({
  type,
  placeholder,
  autoComplete,
  name,
  register,
  options,
  error,
  setValue,
}) => {
  const [activeOptions, toggleActiveOptions] = useToggle(false);

  const handleToggle = () => {
    if (name !== 'jobTitle') return;
    toggleActiveOptions();
  };

  const Auth = useAuthStore();

  return (
    <>
      <ArticleStyle>
        {type === 'textarea' ? (
          <Textarea
            placeholder={placeholder}
            name={name}
            register={register}
            defaultValue={Auth[name]}
            error={error}
          ></Textarea>
        ) : options && options.length > 0 ? (
          <Options
            placeholder={placeholder}
            options={options ? options : []}
            activeOptions={activeOptions}
            error={error}
            name={name}
            defaultValue={Auth[name]}
            register={register}
            setValue={setValue}
          />
        ) : (
          <InputStyle
            type={type}
            {...register(name)}
            placeholder={placeholder}
            autoComplete={autoComplete}
            defaultValue={Auth[name]}
            erroractive={error !== ''}
          />
        )}
        <Icon name={name} activeOptions={activeOptions} handleToggle={handleToggle} />
      </ArticleStyle>
      <Error error={error} />
    </>
  );
};
