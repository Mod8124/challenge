import { ContainerOptionsStyle, OptionsStyle } from './OptionsStyle';
import { IForm } from '../../../validations/interface.validations';
import { Tid } from '../../../store/data/dataInterface';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { Option } from '../Option';
import { FC, useState } from 'react';

interface IOptions {
  error: any;
  placeholder: string;
  activeOptions: boolean;
  options?: string[];
  register: UseFormRegister<IForm>;
  name: Tid;
  defaultValue: string;
  setValue?: UseFormSetValue<IForm>;
}

export const Options: FC<IOptions> = ({
  error,
  placeholder,
  options,
  activeOptions,
  register,
  name,
  defaultValue,
  setValue,
}) => {
  const [optionValue, setOptionValue] = useState<string>(
    defaultValue !== '' ? defaultValue : placeholder,
  );

  const handleValue = (value: string) => {
    setOptionValue(value);

    if (setValue) setValue(name, value);
  };

  return (
    <ContainerOptionsStyle erroractive={error !== ''} placeholder={optionValue} {...register(name)}>
      <p>{optionValue}</p>

      {activeOptions && (
        <OptionsStyle>
          {options &&
            options.map((option) => (
              <span key={option} onClick={() => handleValue(option)}>
                <Option name={option} key={option} />
              </span>
            ))}
        </OptionsStyle>
      )}
    </ContainerOptionsStyle>
  );
};
