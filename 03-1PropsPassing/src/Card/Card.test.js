import { render, screen } from '@testing-library/react';
import Card from './Card';

describe("Card Component", () => {
  test("renders Card component", () => {
    render(<Card />);
    expect(screen.getByText('Unknown')).toBeInTheDocument();
  });
});
