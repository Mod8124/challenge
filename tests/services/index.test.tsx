import { render, screen } from '@testing-library/react';

import App from '../../src/App';

const mockRender = () => {
  return render(<App />);
};

describe('App', () => {
  it('should render App ', () => {
    mockRender();
    const section = screen;
    expect(section).toBeDefined();
  });

  it('should render The display service', () => {
    mockRender();
    const section = screen.getByRole('main');
    expect(section).toBeDefined();
  });
});
