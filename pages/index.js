import Link from 'next/link'
import Layout from '../Components/Layout'

import { getIds, getPosts } from '../lib/Posts'


export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(), ids: getIds()
    }
  }
}

export default function Home({ posts, ids }) {
  console.log(ids)
  return (
    <Layout pageTitle={'Home'}>
      <Link href='/About'>
        <a>About</a>
      </Link>
      <ul>

        {
          posts.map(({ title, date }, i) => {
            //console.log(postName);
            return <Link href={`/Posts/${ids[i].params.id}`} key={i}>
              <li>
                {title}
              </li>
            </Link>


          })
        }

      </ul>
    </Layout>
  )
}

// pages/index.js => /に対応してる 
