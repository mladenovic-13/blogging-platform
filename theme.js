import { deep } from '@theme-ui/presets';

const theme = {
  ...deep,
  containers: {
    page: {
      width: '100vw',
      m: 0,
      mx: 'auto',
    },
    card: {
      boxShadow:
        '0 1px 5px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.2)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
  },
  styles: {
    ...deep.styles,
  },
};
export default theme;
