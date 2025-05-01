const tokens = {
  black: {
    c50: "#000000",
    c75: "#030303",
    c80: "#080808",
    c100: "#0d0d0d",
    c125: "#141414",
    c150: "#1a1a1a",
    c200: "#262626",
    c250: "#333333"
  },
  white: "#FFFFFF", // General white color
  semantic: {
    red: {
      c100: "#F46E6E", // Error text
      c200: "#E44F4F", // Video player scraping error
      c300: "#D74747", // Danger button
      c400: "#B43434", // Not currently used
    },
    green: {
      c100: "#60D26A", // Success text
      c200: "#40B44B", // Video player scraping success
      c300: "#31A33C", // Not currently used
      c400: "#237A2B", // Not currently used
    },
    silver: {
      c100: "#DEDEDE", // Primary button hover
      c200: "#B6CAD7", // Not currently used
      c300: "#8EA3B0", // Secondary button text
      c400: "#617A8A", // Main text in video player context
    },
    yellow: {
      c100: "#FFF599", // Best onboarding highlight
      c200: "#FCEC61", // Dropdown highlight hover
      c300: "#D8C947", // Not currently used
      c400: "#AFA349", // Dropdown highlight
    },
    rose: {
      c100: "#DB3D61", // Authentication error text
      c200: "#8A293B", // Danger button hover
      c300: "#812435", // Danger button
      c400: "#701B2B", // Not currently used
    },
  },
  blue: {
    c50: "#ccccd6",
    c100: "#a2a2a2",
    c200: "#868686",
    c300: "#646464",
    c400: "#4e4e4e",
    c500: "#383838",
    c600: "#2e2e2e",
    c700: "#272727",
    c800: "#181818",
    c900: "#0f0f0f"
  },
  purple: {
    c50: "#aaafff",
    c100: "#8288fe",
    c200: "#5a62eb",
    c300: "#454cd4",
    c400: "#333abe",
    c500: "#292d86",
    c600: "#1f2363",
    c700: "#191b4a",
    c800: "#111334", // Lightbar
    c900: "#0b0d22"
  },
  ash: {
    c50: "#8d8d8d",
    c100: "#6b6b6b",
    c200: "#545454",
    c300: "#3c3c3c",
    c400: "#313131",
    c500: "#2c2c2c",
    c600: "#252525",
    c700: "#1e1e1e",
    c800: "#181818",
    c900: "#111111"
  },
  shade: {
    c25: "#939393", // Media card hover accent
    c50: "#7c7c7c",
    c100: "#666666",
    c200: "#4f4f4f",
    c300: "#404040",
    c400: "#343434",
    c500: "#282828",
    c600: "#202020",
    c700: "#1a1a1a",
    c800: "#151515",
    c900: "#0e0e0e"
  },
};


export const defaultTheme = {
  extend: {
    colors: {
      themePreview: {
        primary: "#1a1a1a",
        secondary: "#212121",
        ghost: "#f5f5f5",
      },

      // Branding
      pill: {
        background: "#212121",
        backgroundHover: "#282828",
        highlight: "#545454",
        activeBackground: "#141414",
      },

      // meta data for the theme itself
      global: {
        accentA: "#545454",
        accentB: "#3c3c3c",
      },

      // light bar
      lightBar: {
        light: "#320064",
      },

      // Buttons
      buttons: {
        toggle: "#6a00cc",
        toggleDisabled: "#262626",
        danger: "#812435",
        dangerHover: "#8A293B",

        secondary: "#212121",
        secondaryText: "#8EA3B0",
        secondaryHover: "#2c2c2c",
        primary: "#f5f5f5",
        primaryText: "#000000",
        primaryHover: "#DEDEDE",
        purple: "#460099",
        purpleHover: "#6a00cc",
        cancel: "#212121",
        cancelHover: "#2c2c2c"
      },

      // only used for body colors/textures
      background: {
        main: "#030303",
        secondary: "#030303",
        secondaryHover: "#030303",
        accentA: "#460099",
        accentB: "#212121"
      },

      // Modals
      modal: {
        background: "#0d0d0d",
      },

      // typography
      type: {
        logo: "#8288fe",
        emphasis: "#f2f2f2",
        text: "#7c7c7c",
        dimmed: "#7c7c7c",
        divider: "#2c2c2c",
        secondary: "#6b6b6b",
        danger: "#F46E6E",
        success: "#60D26A",
        link: "#8288fe",
        linkHover: "#aaafff"
      },

      // search bar
      search: {
        background: "#212121",
        hoverBackground: "#0e0e0e",
        focused: "#282828",
        placeholder: "#4f4f4f",
        icon: "#282828",
        text: "#f5f5f5",
      },

      // media cards
      mediaCard: {
        hoverBackground: "#0e0e0e",
        hoverAccent: "#333333",
        hoverShadow: "#000000",
        shadow: "#0d0d0d",
        barColor: "#545454",
        barFillColor: "#8288fe",
        badge: "#1a1a1a",
        badgeText: "#6b6b6b"
      },

      // Large card
      largeCard: {
        background: "#212121",
        icon: "#6a00cc",
      },

      // Dropdown
      dropdown: {
        background: "#212121",
        altBackground: "#080808",
        hoverBackground: "#2c2c2c",
        highlight: "#AFA349",
        highlightHover: "#FCEC61",
        text: "#7c7c7c",
        secondary: "#666666",
        border: "#343434",
        contentBackground: "#000000"
      },

      // Passphrase
      authentication: {
        border: "#404040",
        inputBg: "#212121",
        inputBgHover: "#2c2c2c",
        wordBackground: "#282828",
        copyText: "#666666",
        copyTextHover: "#8d8d8d",
        errorText: "#DB3D61",
      },

      // Settings page
      settings: {
        sidebar: {
          activeLink: "#212121",
          badge: "#0e0e0e",

          type: {
            secondary: "#4f4f4f",
            inactive: "#7c7c7c",
            icon: "#262626",
            iconActivated: "#5a62eb",
            activated: "#8288fe"
          },
        },

        card: {
          border: "#1a1a1a",
          background: "#212121",
          altBackground: "#212121"
        },

        saveBar: {
          background: "#000000"
        },
      },

      // Utilities
      utils: {
        divider: "#3c3c3c"
      },

      // Onboarding
      onboarding: {
        bar: "#343434",
        barFilled: "#6a00cc",
        divider: "#4f4f4f",
        card: "#0d0d0d",
        cardHover: "#141414",
        border: "#202020",
        good: "#8288fe",
        best: "#FFF599",
        link: "#8288fe",
      },

      // Error page
      errors: {
        card: "#030303",
        border: "#2c2c2c",

        type: {
          secondary: "#6b6b6b",
        },
      },

      // About page
      about: {
        circle: "#212121",
        circleText: "#7c7c7c"
      },

      // About page
      editBadge: {
        bg: "#2c2c2c",
        bgHover: "#313131",
        text: "#7c7c7c"
      },

      progress: {
        background: "#8d8d8d",
        preloaded: "#8d8d8d",
        filled: "#5a62eb",
      },

      // video player
      video: {
        buttonBackground: "#252525",

        autoPlay: {
          background: "#111111",
          hover: "#252525",
        },

        scraping: {
          card: "#000000",
          error: "#E44F4F",
          success: "#40B44B",
          loading: "#5a62eb",
          noresult: "#262626"
        },

        audio: {
          set: "#5a62eb",
        },

        context: {
          background: "#000000",
          light: "#7c7c7c",
          border: "#252525",
          hoverColor: "#252525",
          buttonFocus: "#2c2c2c",
          flagBg: "#2c2c2c",
          inputBg: "#212121",
          buttonOverInputHover: "#2c2c2c",
          inputPlaceholder: "#545454",
          cardBorder: "#1e1e1e",
          slider: "#262626",
          sliderFilled: "#5a62eb",
          error: "#E44F4F",

          buttons: {
            list: "#1e1e1e",
            active: "#111111",
          },

          closeHover: "#111111",

          type: {
            main: "#8EA3B0",
            secondary: "#545454",
            accent: "#5a62eb",
          },
        },
      },
    },
  },
};
