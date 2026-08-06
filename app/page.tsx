import { TypographyH3 } from '@/components/ui/typography-h3'
import { Button } from '@/components/ui/button'
import { TypographyH1 } from '@/components/ui/typography-h1'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col items-center py-32 px-16 min-h-screen w-full max-w-3xl">
        <TypographyH1>Create your dream build</TypographyH1>
        <br />
        <Button>
          <Link href="/dashboard">Create</Link>
        </Button>
      </main>
    </div>
  )
}
