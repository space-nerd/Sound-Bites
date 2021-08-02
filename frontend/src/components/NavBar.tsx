import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex bg="blue.600" p={4} ml={"auto"}>
      <Box ml={"auto"} color="white">
        <DarkModeSwitch />
      </Box>
    </Flex>
  );
};
