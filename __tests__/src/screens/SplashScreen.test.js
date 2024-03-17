import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import SplashScreen from '../../../src/screens/SplashScreen';
const mockNavigation = {
  replace: jest.fn(),
};
describe('SplashScreen', () => {
  it('renders and animates correctly', async () => {
    const { getByTestId } = render(<SplashScreen navigation={mockNavigation} />);
    
    const logoImage = getByTestId('logo-image');
    const text = getByTestId('splash-text');
    expect(logoImage).toBeTruthy();
    expect(text).toBeTruthy();

    await waitFor(() => {
      expect(logoImage.props.style.opacity).toBeCloseTo(1, 2); 
    });

   
   
  });
});
