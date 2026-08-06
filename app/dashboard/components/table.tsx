'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
//to differ(for me)

import { Component, ComponentCategory } from '@/lib/types'
import { Box, Cpu, Fan, HardDrive, MemoryStick, Monitor, Plus, Server, Zap } from 'lucide-react'
import { useState } from 'react'

const iconMap: Record<ComponentCategory['icon'], React.ElementType> = {
  Cpu,
  Monitor,
  Server,
  MemoryStick,
  HardDrive,
  Zap,
  Box,
  Fan,
}

type Props = {
  components: ComponentCategory[]
  selectedCategory: Record<string, Component | null>
  onSelectedComponent: (categoryId: string, component: Component | null) => void
}

export function PartsTable({ components, selectedCategory, onSelectedComponent }: Props) {
  const [modalCategoryId, setModalCategoryId] = useState<string | null>(null)

  const totalPrice = Object.values(selectedCategory).reduce(
    (acc, component) => acc + (component?.price ?? 0),
    0,
  )

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Component</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {components.map((component) => {
          const Icon = iconMap[component.icon]
          const selected = selectedCategory[component.id]

          return (
            <TableRow key={component.id} className="my-2">
              <TableCell>
                <div className="flex items-center">
                  <Icon className="h-5 w-5 mr-1" />
                </div>
              </TableCell>
              <TableCell className="font-bold">{component.name}</TableCell>
              <TableCell>{selected?.name ?? '-'}</TableCell>
              <TableCell>{selected?.price ?? '-'}</TableCell>
              <TableCell className="text-right">
                <Dialog
                  open={modalCategoryId === component.id}
                  onOpenChange={(open) => setModalCategoryId(open ? component.id : null)}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-1" />
                      {selected ? 'Change' : 'Add'}
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
