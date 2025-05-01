const tokens = {
  black: {
    c50: "#ffe6f1",
    c75: "#ffd1e6",
    c80: "#ffbfdc",
    c100: "#ffaad2",
    c125: "#ff94c8",
    c150: "#ff7fbe",
    c200: "#ff6ab5",
    c250: "#ff55ab"
  },
  white: "#FFF0F7", // Soft anime-style white-pink
  semantic: {
    red: {
      c100: "#ff7c94", // Light cherry
      c200: "#ff5e7e", // Bright pink-red
      c300: "#e84a6e", // Hot pink
      c400: "#cc3a5e", // Darker accent pink
    },
    green: {
      c100: "#b7f5d8", // Mint
      c200: "#90f0c6", // Pastel green
      c300: "#6cdcb1", // Soft jade
      c400: "#4dbb93", // Deeper mint
    },
    silver: {
      c100: "#f8d4e6", // Pale blush
      c200: "#eebed7", // Muted pink-silver
      c300: "#e3a7c8", // Rose gold-ish
      c400: "#c78ba9", // Dusty rose
    },
    yellow: {
      c100: "#fff3d1", // Cream yellow
      c200: "#ffe9a8", // Light anime blonde
      c300: "#ffde88", // Soft gold
      c400: "#e3c26d", // Sandy tone
    },
    rose: {
      c100: "#ff99bb", // Bubblegum
      c200: "#ff7aa5", // Bright candy
      c300: "#ff5b8f", // Bold pink
      c400: "#e04075", // Intense magenta
    },
  },
  blue: {
    c50: "#f0e8ff",
    c100: "#d9c9ff",
    c200: "#c2abff",
    c300: "#ab8dff",
    c400: "#9570f0",
    c500: "#7e5cd6",
    c600: "#6849b8",
    c700: "#53389a",
    c800: "#3f297a",
    c900: "#2c1b5b"
  },
  purple: {
    c50: "#ffe6fa",
    c100: "#f7bdf4",
    c200: "#f095ea",
    c300: "#e86ce0",
    c400: "#d944d3",
    c500: "#b337a8",
    c600: "#8e2a84",
    c700: "#6a1e61",
    c800: "#4a1544", // Lightbar pink-purple
    c900: "#2d0b29"
  },
  ash: {
    c50: "#fcd3e1",
    c100: "#f6b3cb",
    c200: "#f093b5",
    c300: "#ea74a0",
    c400: "#d35a88",
    c500: "#b0476f",
    c600: "#8c3557",
    c700: "#69243f",
    c800: "#471627",
    c900: "#260912"
  },
  shade: {
    c25: "#ffe0f0", // Light pink highlight
    c50: "#ffc9e4",
    c100: "#ffb2d7",
    c200: "#ff9bc9",
    c300: "#ff84bb",
    c400: "#f76dac",
    c500: "#dd5796",
    c600: "#b6467a",
    c700: "#90355f",
    c800: "#6a2444",
    c900: "#45152a"
  },
};


export const defaultTheme = {
  extend: {
    colors: {
      themePreview: {
        primary: tokens.black.c80,
        secondary: tokens.black.c100,
        ghost: tokens.white,
      },

      // Branding
      pill: {
        background: tokens.black.c100,
        backgroundHover: tokens.black.c125,
        highlight: tokens.blue.c200,
        activeBackground: tokens.shade.c700,
      },

      // meta data for the theme itself
      global: {
        accentA: tokens.blue.c200,
        accentB: tokens.blue.c300,
      },

      // light bar
      lightBar: {
        light: tokens.purple.c800,
      },

      // Buttons
      buttons: {
        toggle: tokens.purple.c300,
        toggleDisabled: tokens.black.c200,
        danger: tokens.semantic.rose.c300,
        dangerHover: tokens.semantic.rose.c200,

        secondary: tokens.black.c100,
        secondaryText: tokens.semantic.silver.c300,
        secondaryHover: tokens.black.c150,
        primary: tokens.white,
        primaryText: tokens.black.c50,
        primaryHover: tokens.semantic.silver.c100,
        purple: tokens.purple.c600,
        purpleHover: tokens.purple.c400,
        cancel: tokens.black.c100,
        cancelHover: tokens.black.c150
      },

      // only used for body colors/textures
      background: {
        main: tokens.black.c75,
        secondary: tokens.black.c75,
        secondaryHover: tokens.black.c75,
        accentA: tokens.purple.c600,
        accentB: tokens.black.c100
      },

      // Modals
      modal: {
        background: tokens.shade.c800,
      },

      // typography
      type: {
        logo: tokens.purple.c100,
        emphasis: tokens.white,
        text: tokens.shade.c50,
        dimmed: tokens.shade.c50,
        divider: tokens.ash.c500,
        secondary: tokens.ash.c100,
        danger: tokens.semantic.red.c100,
        success: tokens.semantic.green.c100,
        link: tokens.purple.c100,
        linkHover: tokens.purple.c50
      },

      // search bar
      search: {
        background: tokens.black.c100,
        hoverBackground: tokens.shade.c900,
        focused: tokens.black.c125,
        placeholder: tokens.shade.c200,
        icon: tokens.shade.c500,
        text: tokens.white,
      },

      // media cards
      mediaCard: {
        hoverBackground: tokens.shade.c900,
        hoverAccent: tokens.black.c250,
        hoverShadow: tokens.black.c50,
        shadow: tokens.shade.c800,
        barColor: tokens.ash.c200,
        barFillColor: tokens.purple.c100,
        badge: tokens.shade.c700,
        badgeText: tokens.ash.c100
      },

      // Large card
      largeCard: {
        background: tokens.black.c100,
        icon: tokens.purple.c400,
      },

      // Dropdown
      dropdown: {
        background: tokens.black.c100,
        altBackground: tokens.black.c80,
        hoverBackground: tokens.black.c150,
        highlight: tokens.semantic.yellow.c400,
        highlightHover: tokens.semantic.yellow.c200,
        text: tokens.shade.c50,
        secondary: tokens.shade.c100,
        border: tokens.shade.c400,
        contentBackground: tokens.black.c50
      },

      // Passphrase
      authentication: {
        border: tokens.shade.c300,
        inputBg: tokens.black.c100,
        inputBgHover: tokens.black.c150,
        wordBackground: tokens.shade.c500,
        copyText: tokens.shade.c100,
        copyTextHover: tokens.ash.c50,
        errorText: tokens.semantic.rose.c100,
      },

      // Settings page
      settings: {
        sidebar: {
          activeLink: tokens.black.c100,
          badge: tokens.shade.c900,

          type: {
            secondary: tokens.shade.c200,
            inactive: tokens.shade.c50,
            icon: tokens.black.c200,
            iconActivated: tokens.purple.c200,
            activated: tokens.purple.c100
          },
        },

        card: {
          border: tokens.shade.c700,
          background: tokens.black.c100,
          altBackground: tokens.black.c100
        },

        saveBar: {
          background: tokens.black.c50
        },
      },

      // Utilities
      utils: {
        divider: tokens.ash.c300
      },

      // Onboarding
      onboarding: {
        bar: tokens.shade.c400,
        barFilled: tokens.purple.c300,
        divider: tokens.shade.c200,
        card: tokens.shade.c800,
        cardHover: tokens.shade.c700,
        border: tokens.shade.c600,
        good: tokens.purple.c100,
        best: tokens.semantic.yellow.c100,
        link: tokens.purple.c100,
      },

      // Error page
      errors: {
        card: tokens.black.c75,
        border: tokens.ash.c500,

        type: {
          secondary: tokens.ash.c100,
        },
      },

      // About page
      about: {
        circle: tokens.black.c100,
        circleText: tokens.ash.c50
      },

      // About page
      editBadge: {
        bg: tokens.ash.c500,
        bgHover: tokens.ash.c400,
        text: tokens.ash.c50
      },

      progress: {
        background: tokens.ash.c50,
        preloaded: tokens.ash.c50,
        filled: tokens.purple.c200,
      },

      // video player
      video: {
        buttonBackground: tokens.ash.c600,

        autoPlay: {
          background: tokens.ash.c800,
          hover: tokens.ash.c600,
        },

        scraping: {
          card: tokens.black.c50,
          error: tokens.semantic.red.c200,
          success: tokens.semantic.green.c200,
          loading: tokens.purple.c200,
          noresult: tokens.black.c200
        },

        audio: {
          set: tokens.purple.c200,
        },

        context: {
          background: tokens.black.c50,
          light: tokens.shade.c50,
          border: tokens.ash.c600,
          hoverColor: tokens.ash.c600,
          buttonFocus: tokens.ash.c500,
          flagBg: tokens.ash.c500,
          inputBg: tokens.black.c100,
          buttonOverInputHover: tokens.ash.c500,
          inputPlaceholder: tokens.ash.c200,
          cardBorder: tokens.ash.c700,
          slider: tokens.black.c200,
          sliderFilled: tokens.purple.c200,
          error: tokens.semantic.red.c200,

          buttons: {
            list: tokens.ash.c700,
            active: tokens.ash.c900,
          },

          closeHover: tokens.ash.c800,

          type: {
            main: tokens.semantic.silver.c300,
            secondary: tokens.ash.c200,
            accent: tokens.purple.c200,
          },
        },
      },
    },
  },
};
