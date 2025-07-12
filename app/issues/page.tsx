import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const IssuesPage = () => {
  
  console.log("Went to the issue page")
  
  return (
    <div>
      <Button size="3" variant="soft">
        <Link href={'/issues/new'}>
          New Issue
        </Link>
      </Button>
    </div>
  )
}

export default IssuesPage
