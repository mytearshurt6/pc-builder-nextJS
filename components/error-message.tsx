type Props = {
  message: string
}

export function ErrorMessage({ message }: Props) {
  return (
    //role is for screen readers
    <p className="text-sm text-destructive" role="alert">
      {message}
    </p>
  )
}
