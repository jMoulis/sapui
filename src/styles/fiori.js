const colors = {
  action: {
    primary: '#0a6ed1',
    secondary: '#fff',
  },
  shell: {
    shell1: '#354A5F',
    shell2: '#D1E8FF',
  },
  text: {
    text1: '#32363A',
    text2: '#515559',
    text3: '#6A6d70',
    text4: '#74777A',
    text5: '#FFFFFF',
  },
  backgrounds: {
    background1: '#EDEFF0',
    background2: '#FFFFFF',
    background3: '#F1FDF6',
    background4: '#FEF7F1',
    background5: '#FFEBEB',
    background6: '#F5FAFF',
  },
  neutral: {
    neutral1: '#FAFAFA',
    neutral2: '#EEEEEF',
    neutral3: '#D9D9D9',
    neutral4: '#89919A',
  },
  status: {
    default: '#0a6ed1',
    success: '#107F3E',
    alert: '#E9730C',
    danger: '#BB0000',
    neutral: '#6D7678',
  },
  accent: {
    accent1: '#E38B16',
    accent2: '#DC7474',
    accent3: '#DB1F77',
    accent4: '#C0399F',
    accent5: '#6367DE',
    accent6: '#5899DA',
    accent7: '#13A4B4',
    accent8: '#7CA10C',
    accent9: '#955ECF',
    accent10: '#6C8893',
    accent11: '#D17F15',
    accent12: '#D04343',
    accent13: '#2B78C5',
    accent14: '#0F828F',
    accent15: '#647887',
  },
  stateAction: {
    hover: '#085CAF',
    selected: '#0254A7',
    disabled: '#0a6ed1',
  },
  stateBackground: {
    hover: '#FAFAFA',
    selected: '#0A6ED1',
    selectedHover: '#0A6ED1',
  },
  rgba: {
    primary: '0,193,255',
    secondary: '8,151,204',
    ternary: '11,96,137',
    white: '255,255,255',
    gray: '86,87,89',
    error: '244, 67, 54',
    success: '97, 189, 79',
  },
};

const theme = {
  fonts: {
    colors: {
      lightBlue: '#147575',
    },
  },
  colors,
  forms: {
    element: {
      borderColor: colors.neutral.neutral4,
      input: {
        '&:hover': {
          borderColor: colors.stateAction.hover,
        },
        '&:focus': {
          borderColor: colors.stateAction.hover,
          boxShadow: `0 0 0 1px ${colors.stateAction.selected}`,
          zIndex: 2,
        },
      },
    },
  },
  buttons: {
    emphasized: {
      borderColor: colors.action.primary,
      backgroundColor: colors.action.primary,
      color: colors.action.secondary,
    },
    regular: {
      color: colors.action.primary,
      borderColor: colors.action.primary,
      backgroundColor: colors.action.secondary,
      '&:hover': {
        color: colors.action.secondary,
      },
    },
    light: {
      color: colors.action.primary,
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      '&:hover': {
        color: colors.neutral.neutral1,
      },
    },
    cancel: {
      color: '#cae4fb',
      hover: {
        backgroundColor: 'rgba(99, 127, 153, 0.5)',
      },
      active: {
        backgroundColor: '#91c8f6',
        color: '#2f3c48',
      },
    },
    actions: {
      '&:hover': {
        backgroundColor: colors.stateAction.hover,
        borderColor: colors.stateAction.hover,
        color: colors.action.secondary,
      },
      '&:active': {
        backgroundColor: colors.stateAction.selected,
        borderColor: colors.stateAction.selected,
        color: colors.action.secondary,
        boxShadow: `0 0 0 1px ${colors.stateAction.selected}`,
      },
      '&:disabled': {
        opacity: '0.4',
        cursor: 'not-allowed',
      },
    },
  },
};

export default theme;
