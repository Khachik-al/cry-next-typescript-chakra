import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import React, { FC } from 'react'
import { exportableLoader } from '../../image-loader'
import ChoosePlan from '../ChoosePlan'

interface Props {

}

const Flow1: FC<Props> = () => {
  return (
    <Box pb={24}>
      <ChoosePlan />
      <Box
        display={['none', 'none', 'none', 'none', 'block']}
        position='absolute'
        left={0}
        top={[null, null, 200]}
      >
        <Image
          loader={exportableLoader}
          src='/assets/img/circle_gold.png'
          alt='image'
          height={350}
          width={250}
          priority
          unoptimized
        />
      </Box>
    </Box>
  )
}

export default Flow1
