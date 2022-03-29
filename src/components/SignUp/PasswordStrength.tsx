import {
	Box, HStack,
} from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'

interface Props {
	value: string;
}

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

const PasswordStrength: FC<Props> = ({ value }) => {
	const [strength, setStrength] = useState([false, false, false, false])

	useEffect(() => {
		
		if (strongRegex.test(value)) {
			setStrength([true, true, true, true])
		} else if (mediumRegex.test(value)) {
			setStrength([true, true, true, false])
		} else if (value) {
			setStrength([true, false, false, false])
		}else{
			setStrength([false, false, false, false])
		}

	}, [value])

	return (
		<>

			<HStack spacing={0.5} mt={2}>
				{strength.map(el => <Box h='2px' w='full' borderRadius='xl' bg={el ? 'primary.100' : 'grey.400'} />)}
			</HStack>
		</>
	)
}

export default PasswordStrength
