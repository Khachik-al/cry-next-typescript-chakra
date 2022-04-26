import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
import { FC } from 'react'


type Props = {
  value: number | null;
  fontSize: number;
  boxSize: number;
}

const UpDownPercent: FC<Props> = ({ value, fontSize, boxSize }) => (
  <Text
    fontSize={fontSize}
    color={value && value < 0 ? 'danger' : 'primary.100'}
    fontWeight='extrabold'
  >
    {value === null ? '---' :
      value < 0 ?
        <TriangleDownIcon boxSize={boxSize} mb={1} /> :
        <TriangleUpIcon boxSize={boxSize} mb={1} />}
    {' '}
    {value === null ?
      '---' :
      Number(value.toFixed(2)) + ' %'}
  </Text>
)

export default UpDownPercent
