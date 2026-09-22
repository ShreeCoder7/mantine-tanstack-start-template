import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mantine
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter TanStack Start project includes a minimal setup, if you want to learn more on
        Mantine + TanStack Start integration follow{' '}
        <Anchor href="https://mantine.dev/guides/tanstack-start/" size="lg">
          this guide
        </Anchor>
        . To get started edit src/routes/index.tsx file.
      </Text>
    </>
  );
}
