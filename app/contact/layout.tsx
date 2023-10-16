export const metadata = {
  title: 'Contact',
  description: 'Discover options for contacting J Clark.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
