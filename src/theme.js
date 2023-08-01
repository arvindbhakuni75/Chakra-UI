import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const replaceExisting = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#f5fee5",
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2e032",
        500: "#8ac919",
        600: "#71ab09",
        700: "#578602",
        800: "#3c5e00",
        900: "#203300",
      },
    },

    fonts: {
      heading: `Montserrat, ${base.fonts.heading}`,
      body: "Inter",
    },
    components: {
        Button: {
            variants: {
                placeItems: (props) => ({
                    rounded: "none",
                    _focus: {
                        ring: 2,
                        ringColor: "brand.500",
                    },
                    backgroundColor: mode("brand.400", "brand.300")(props),
                    color: mode("brand.900", "brand.900")(props),
                    _hover: {
                        backgroundColor: mode("brand.500", "brand.500")(props),
                        color: mode("brand.900", "brand.900")(props),
                    }
                }),
            }
        },
      Input: { ...replaceExisting },
      Select: { ...replaceExisting },
      Textarea: {
        variants: {
          filled: {
            _focus: {
              borderColor: "brand.500",
            },
          },
        },
        sizes: {
            md: {
              borderRadius: "none",
            },
          },
      },
      Checkbox: {
        baseStyle: {
            control: {
                _focus: {
                    ring: 2,
                    ringColor: 'brand.500'
                }
            }
        }
      }
      
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select", "Textarea"],
  })
);

export default theme;
