import mantineCoreStyles from '@mantine/core/styles.css?url';

import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '@/theme';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Mantine TanStack Start template' },
    ],
    links: [
      { rel: 'stylesheet', href: mantineCoreStyles },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <HeadContent />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
        <Scripts />
      </body>
    </html>
  );
}
