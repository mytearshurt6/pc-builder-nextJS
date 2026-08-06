'use client'

import { Button } from '@/components/ui/button'
import { TypographyH1 } from '@/components/ui/typography-h1'
import type { Component } from '@/lib/types'
import { useCallback, useState } from 'react'
import { PartsTable } from './table'
import { COMPONENT_CATEGORIES } from '@/lib/constants'

export function CurrentBuild() {
  const [selectedCategory, setSelectedCategory] = useState<Record<string, Component | null>>({})
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false)

  const onSelectComponent = useCallback((categoryId: string, component: Component | null) => {
    setSelectedCategory((prev) => ({ ...prev, [categoryId]: component }))
  }, [])
  return (
    <>
      <div className="flex justify-between mb-8">
        <TypographyH1>Create your build</TypographyH1>
        <Button onClick={() => setIsSaveModalOpen(true)}>Create</Button>
      </div>
      <div className="min-w-0 overflow-x-auto">
        <PartsTable
          components={COMPONENT_CATEGORIES}
          onSelectedComponent={onSelectComponent}
          selectedCategory={selectedCategory}
        />
      </div>
    </>
  )
}
