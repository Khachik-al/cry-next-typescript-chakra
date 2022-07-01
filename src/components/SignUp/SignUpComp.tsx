import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import Flow from './Flow4'
import Flow1 from './Flow1'
import Flow2 from './Flow2'
import Flow3 from './Flow3'
import FlowHighlights from './FlowHighlights'

interface Props { }

const SignUpComp: FC<Props> = () => {
  const { query } = useRouter()
  const [state, setState] = useState({
    full_name: '',
    email: '',
    password: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zipe_code: '',
    country: '',
  })
  const handleChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [target.name]: target.value,
    })
  }, [state])

  const paintView = useCallback(() => {
    switch (query.flow) {
      case '1':
        return (
          <>
            <FlowHighlights flow={query.flow} />
            <Flow1 />
          </>
        )
      case '2':
        return (
          <>
            <FlowHighlights flow={query.flow} />
            <Flow2 state={state} />
          </>
        )
      case '3':
        return (
          <>
            <FlowHighlights flow={query.flow} />
            <Flow3 state={state} handleChange={handleChange} />
          </>
        )
      case '4':
        return (
          <Flow state={state} />
        )
      default:
        return (
          <>
            <FlowHighlights flow='1' />
            <Flow1 />
          </>
        )
    }
  }, [query.flow, state, handleChange])

  return (
    <>
      {paintView()}
    </>
  )
}

export default SignUpComp
