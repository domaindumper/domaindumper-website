import {
    Box,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    useColorMode,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { SunIcon, MoonIcon } from '@chakra-ui/icons';
  
  export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <Box bg={useColorModeValue('white', 'gray.800')} px={4} py={2}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">My Website</Text>
          <Flex alignItems="center">
            <Menu>
              <MenuButton as={IconButton} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} />
              <MenuList>
                <MenuItem onClick={toggleColorMode}>
                  {colorMode === 'light' ? 'Dark mode' : 'Light mode'}
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    );
  }