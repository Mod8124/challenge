import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { store } from '../../../../src/services/DisplayService/store/store';
import { Button } from '../../../../src/services/DisplayService/components/Button';
import { Error } from '../../../../src/services/DisplayService/components/Error';
import { Wrap } from '../../../../src/services/DisplayService/components/Wrap';
import { ShowStep } from '../../../../src/services/DisplayService/components/ShowStep';
import { Form } from '../../../../src/services/DisplayService/components/Form/index';
import { IForm } from '../../../../src/services/DisplayService/validations/interface.validations';
import { UseFormHandleSubmit } from 'react-hook-form';

const mockStore = configureMockStore();
const storeBase = mockStore(store);

const mockRender = (Component: React.ReactNode) => {
  return render(<Provider store={storeBase}>{Component}</Provider>);
};

describe('DisplayService', () => {
  it('should render button component ', () => {
    mockRender(<Button isDisabled>hello</Button>);
    const section = screen;
    expect(section).toBeDefined();
  });

  it('should render error component ', () => {
    mockRender(<Error error={''}></Error>);
    const section = screen;
    expect(section).toBeDefined();
  });

  it('should render wrap component ', () => {
    mockRender(
      <Wrap>
        <h2>children component</h2>
      </Wrap>,
    );
    const section = screen;
    expect(section).toBeDefined();
  });

  it('should render wrapForm component ', () => {
    mockRender(
      <Wrap>
        <h2>children component</h2>
      </Wrap>,
    );
    const section = screen;
    expect(section).toBeDefined();
  });

  it('should render ShowStep component ', () => {
    mockRender(<ShowStep />);
    const section = screen;
    expect(section).toBeDefined();
  });

  it('should render ShowStep text', () => {
    mockRender(<ShowStep />);
    const section = screen.getByText('Address');
    expect(section).toBeDefined();
  });
});
