import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Karthik Talam — Lead Frontend Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f172a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              background: '#6366f1',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 700,
              color: 'white',
              marginRight: '16px',
            }}
          >
            KT
          </div>
          <span style={{ color: '#9ca3af', fontSize: '18px' }}>karthik.run</span>
        </div>
        <div
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          Karthik Talam
        </div>
        <div
          style={{
            fontSize: '28px',
            color: '#6366f1',
            fontWeight: 600,
            marginBottom: '16px',
          }}
        >
          Lead Frontend Engineer
        </div>
        <div
          style={{
            fontSize: '20px',
            color: '#9ca3af',
          }}
        >
          Next.js · React · TypeScript · AI-Augmented Engineering
        </div>
      </div>
    ),
    { ...size }
  )
}
