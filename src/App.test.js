import { render, screen } from '@testing-library/react';
import App from './App';

test('titlePromotion', () => {
  render(<App />);
  const titlePromotion = screen.getByText(/โปรโมชั่นหนังสือ Harry Potter/i);
  expect(titlePromotion).toBeInTheDocument();  
});
