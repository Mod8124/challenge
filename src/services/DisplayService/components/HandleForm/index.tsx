import { FC } from 'react';
import { Form } from '../Form';
import { Input } from '../Input/';
import { Button } from '../Button';
import { useLocation } from 'wouter';
import { useDataStore } from '../../hooks/useData';
import { slideData } from '../../helpers/slideData';
import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormSetValue,
  SubmitHandler,
} from 'react-hook-form';

interface HandleFormLogic<T extends FieldValues> {
  register: UseFormRegister<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  errors: FieldErrors<T>;
  setValue?: UseFormSetValue<T>;
  onSubmit: SubmitHandler<T>;
}

interface IHandleForm<T extends FieldValues> {
  HandleFormLogic: () => HandleFormLogic<T>;
}

export const HandleForm: FC<IHandleForm<any>> = ({ HandleFormLogic }) => {
  const { register, onSubmit, errors, handleSubmit, setValue } = HandleFormLogic();

  const [location] = useLocation();
  const { data } = useDataStore();

  return (
    <Form handleSubmit={handleSubmit} onSubmit={onSubmit} title='Register'>
      <>
        {data &&
          data
            .slice(slideData[location].startIndex, slideData[location].finishIndex ?? data.length)
            .map((field, index) => {
              if (Array.isArray(field)) {
                return (
                  <div key={`nested-${index}`}>
                    {field.map((f, innerIndex) => (
                      <article key={`nested-${index}-${innerIndex}`}>
                        <Input
                          register={register}
                          name={f.id}
                          placeholder={f.placeholder ?? f.id}
                          type={f.type}
                          autoComplete='off'
                          error={errors && errors[f.id] ? errors[f.id]?.message : ''}
                        />
                      </article>
                    ))}
                  </div>
                );
              }

              return (
                <article key={field.id}>
                  <Input
                    register={register}
                    name={field.id}
                    options={field.options ?? []}
                    placeholder={field.placeholder ?? field.id}
                    type={field.type}
                    autoComplete='off'
                    setValue={setValue}
                    error={errors && errors[field.id] ? errors[field.id]?.message : ''}
                  />
                </article>
              );
            })}

        <Button isDisabled={false}>Next Part</Button>
      </>
    </Form>
  );
};
