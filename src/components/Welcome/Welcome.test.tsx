import { render, screen } from '@test-utils';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('has correct TanStack Start guide link', () => {
    render(<Welcome />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/tanstack-start/'
    );
  });
});
