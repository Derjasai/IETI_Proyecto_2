import { Heading, Text } from "@chakra-ui/react";

export function Home() {
    return (
      <div>
        <Heading as='h1' size='4xl' noOfLines={1}>Tacha</Heading>
        <Text size='md'>Tu lista de tareas preferida</Text>
      </div>
    );
}