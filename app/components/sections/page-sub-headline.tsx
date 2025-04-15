import React, { PropsWithChildren } from 'react'

export default function PageSubHeadline({ children }: PropsWithChildren) {
    return <h3 className={'page-sub-headline'}>{children}</h3>
}
