import { ComponentType } from './generated/prisma/enums'

export type ComponentCategory = {
  id: string
  name: string
  icon: string
}

export type Component = {
  id: string
  name: string
  price: number
  type: ComponentType
  sockeet: string | null
}

export const categoryIdToBdType: Record<string, ComponentType> = {
  cpu: 'cpu',
  ram: 'ram',
  gpu: 'gpu',
  storage: 'ssd',
  motherboard: 'motherboard',
  cooling: 'cooler',
  psu: 'psu',
  case: 'case',
}

export const dbTypeToCategoryId: Record<ComponentType, string> = {
  cpu: 'cpu',
  ram: 'ram',
  gpu: 'gpu',
  ssd: 'storage',
  motherboard: 'motherboard',
  cooler: 'cooling',
  psu: 'psu',
  case: 'case',
}
