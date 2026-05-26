import { ImageResponse } from 'next/og';

export const alt = 'Property Management Consultants, LLC | Huntsville, AL';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d3d6e',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Stars row */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} width="36" height="36" viewBox="0 0 24 24" fill="#facc15">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span style={{ color: '#93c5fd', fontSize: '28px', marginLeft: '12px', alignSelf: 'center' }}>
            32 Five-Star Google Reviews
          </span>
        </div>

        {/* Company name */}
        <div style={{ color: '#ffffff', fontSize: '64px', fontWeight: '700', lineHeight: 1.1, marginBottom: '20px' }}>
          Property Management
          <br />
          Consultants, LLC
        </div>

        {/* Tagline */}
        <div style={{ color: '#93c5fd', fontSize: '32px', marginBottom: '48px' }}>
          Transparent property management in North Alabama.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '32px',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ color: '#ffffff', fontSize: '22px', fontWeight: '600' }}>$250 Leasing Fee</span>
            <span style={{ color: '#93c5fd', fontSize: '18px' }}>One-time per placement</span>
          </div>
          <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ color: '#ffffff', fontSize: '22px', fontWeight: '600' }}>10% Monthly Management</span>
            <span style={{ color: '#93c5fd', fontSize: '18px' }}>No hidden fees. Ever.</span>
          </div>
          <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ color: '#ffffff', fontSize: '22px', fontWeight: '600' }}>Huntsville, AL</span>
            <span style={{ color: '#93c5fd', fontSize: '18px' }}>propertyconsultantsllc.com</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
