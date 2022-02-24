import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import PageLayout from '../../../../components/PageLayout/PageLayout'
import PageMeta from '../../../../components/PageMeta/PageMeta'

type Props = {}

const pair = (props: Props) => {
	return (
		<PageMeta>
      <PageLayout>
        <Box  mr='10%' ml='10%' mt={10}>
          <Text fontWeight='bold'>Pair</Text>
        </Box>
      </PageLayout>
    </PageMeta>
	)
}

export default pair