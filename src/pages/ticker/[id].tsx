import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import PageLayout from "../../../components/PageLayout/PageLayout";
import PageMeta from "../../../components/PageMeta/PageMeta";
// import { GetStaticProps, GetStaticPaths } from 'next'

const Coin: NextPage = () => {
  const { query } = useRouter()

  return (
    <PageMeta title={`${query.id}`}>
      <PageLayout>
        <Box  mr='10%' ml='10%' mt={10}>
          <Text fontWeight='bold'>{query.id}</Text>
        </Box>
      </PageLayout>
    </PageMeta>
  )
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {},
//   }
// }
// export const getStaticPaths: GetStaticPaths = async (context) => {
//   return {
//     paths: [
//       { params: {} }
//     ],
//     fallback: true
//   };
// }

export default Coin;

