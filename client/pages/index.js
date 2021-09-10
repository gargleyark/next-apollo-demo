import React from 'react'
import Link from 'next/link'
import { Name } from '../components'

const Page = () => (
  <div>
    Welcome, <Name />
    <br/><br/>
    <Link href="/about"><a>About</a></Link>

  </div>
)

export default Page
