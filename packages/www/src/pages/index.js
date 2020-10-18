import React, { useEffect } from "react";
import { Container, Flex, Heading, Button } from "@theme-ui/components";
import netlifyIdentity from "netlify-identity-widget";

export default (props) => {
  useEffect(() => {
    netlifyIdentity.init({});
  });

  return (
    <Container>
      <Flex sx={{ flexDirection: "column", p: 3 }}>
        <Heading as="h1" sx={{ mb: 3 }}>
          Get Shit Done
        </Heading>
        <Button onClick={() => netlifyIdentity.open()} sx={{ mb: 3 }}>
          Get started
        </Button>
        <Button onClick={() => console.log(netlifyIdentity.currentUser())}>
          Log current user
        </Button>
      </Flex>
    </Container>
  );
};
