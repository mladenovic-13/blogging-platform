import { deep } from '@theme-ui/presets';

const theme = {
  ...deep,
  containers: {
    page: {
      width: '100vw',
      m: 0,
    },
    card: {
      boxShadow:
        '0 2px 5px rgb(255,255,255,0.4), 0 1px 5px white',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    growCard: {
      boxShadow:
        '0 2px 5px rgb(255,255,255,0.4), 0 1px 5px white',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
      ':hover': {
        transform: 'scale(1.1)',
      },
      textAlign: 'center',
      transition: 'all .2s ease-in-out',
    },
  },
  styles: {
    ...deep.styles,
  },
};
export default theme;
