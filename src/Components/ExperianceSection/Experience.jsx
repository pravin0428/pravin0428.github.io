import { Box , Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Card ,CardBody } from '@chakra-ui/card'
 
import React from 'react'
 
 
function Experience() {
  return (
    <Box>
 <Heading size='md' py='2'>Experiance</Heading>
  <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>  
 
  <Image
    objectFit='cover'
    maxW={{ base: '80%', sm: '130px' }}
    src='https://media.licdn.com/dms/image/C510BAQGgXUdfEd9tgw/company-logo_200_200/0/1519899154464?e=1700092800&v=beta&t=2eZm3MBc0uJ63aF32LDFJCm8uaIiglsrV26qKPcLKek'
    alt='Caffe Latte'
  />

  <Stack>
  
     <CardBody>  
      <Heading size='md'> Tratoli TMC</Heading>

      <Text py='2'>
        Role: Front End Software Developer 
      </Text>
      <Text>
        Start Date: 19 Mar 2023 
      </Text>
      </CardBody>   
  </Stack>
</Card>
</Box>
  )
}

export default Experience