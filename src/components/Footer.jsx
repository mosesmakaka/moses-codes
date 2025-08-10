import React from 'react'

export default function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#222', color: '#fff' }}>
      <p>© {new Date().getFullYear()} Moses Makaka. All rights reserved.</p>
    </footer>
  )
}
