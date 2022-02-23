import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import PageLayout from "../../../../components/PageLayout/PageLayout";
import PageMeta from "../../../../components/PageMeta/PageMeta";


const ExchangeItem: NextPage = () => {
  const { query } = useRouter()

  return (
    <PageMeta title={`${query.id}`}>
      <PageLayout>
        <Box  mr='10%' ml='10%' mt={10}>
          <Text fontWeight='bold'>{query.id}</Text>
          <Link href={`/exchange/${query.id}/pair`}>
              <Text cursor='pointer' _hover={{ textDecoration: 'underline' }} mt={5}>
                Pair
              </Text>
            </Link>
        </Box>
      </PageLayout>
    </PageMeta>
  )
}

export default ExchangeItem;

