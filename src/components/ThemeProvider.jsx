"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * ThemeProvider component that wraps the application with theme functionality.
 *
 * Features:
 * - Automatically detects and uses system theme preference (light/dark)
 * - Persists theme selection in localStorage with key "scs-theme"
 * - Supports three modes: light, dark, and system (auto)
 * - Uses CSS class-based theme switching
 * - Prevents flash of unstyled content during theme transitions
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap
 * @returns {JSX.Element} Themed provider wrapper
 */
export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider
      attribute="class" // Uses class-based theme switching (adds 'dark' class to html element)
      defaultTheme="system" // Defaults to system preference (respects user's OS/browser setting)
      enableSystem={true} // Enables system theme detection
      storageKey="scs-theme" // localStorage key for theme persistence
      disableTransitionOnChange // Prevents flash during theme changes
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
