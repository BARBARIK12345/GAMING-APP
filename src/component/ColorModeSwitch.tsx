import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

function ColorModeSwitch() {

  
    const  {toggleColorMode , colorMode} = useColorMode();

  return (
    <div>
      
      <HStack>
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text>Dark Mode</Text>
      </HStack>

    </div>
  )
}

export default ColorModeSwitch
