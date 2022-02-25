import React, { FC, useCallback } from 'react'
import Flow from './Flow4'
import Flow1 from './Flow1'
import Flow2 from './Flow2'
import Flow3 from './Flow3'
import FlowHighlights from './FlowHighlights'
import { useRouter } from 'next/router'

interface Props { }


const SignUpComp: FC<Props> = () => {
  const { query } = useRouter()

  const paintView = useCallback<() => JSX.Element>(() => {
    switch (query.flow) {
      case '1':
        return <>
          <FlowHighlights flow={query.flow} />
          <Flow1 />
        </>
      case '2':
        return <>
          <FlowHighlights flow={query.flow} />
          <Flow2 />
        </>
      case '3':
        return <>
          <FlowHighlights flow={query.flow} />
          <Flow3 />
        </>
      case '4':
        return <>
          <Flow />
        </>
      default:
        return <>
          <FlowHighlights flow='1' />
          <Flow1 />
        </>
    }
  }, [query.flow])

  return (
    <>
      {paintView()}
    </>
  )
}

export default SignUpComp
