import {
  Button, Flex,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import ChoosePlan from '../ChoosePlan'

interface Props {

}

const Flow1: FC<Props> = () => {
  const router = useRouter()

  return (
    <>
      <ChoosePlan/>
      <Flex justify='center' mt={12}>
        <Button
          onClick={() => router.push('/signup?flow=2')}
        >
          7 day trial for $7
        </Button>
      </Flex>
    </>
  )
}

export default Flow1
