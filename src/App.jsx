import React from 'react'
import QRCode from 'qrcode.react'

function App() {
  const googleFormsUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdpMYeuXg2DFH0etZ27QVFNHyEqNhQ6DeEXuYz6m4CKPGBt4w/viewform?usp=dialog'

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h1 style={{
          color: '#333',
          marginBottom: '30px',
          fontSize: '24px',
          fontWeight: '600'
        }}>
          Google Forms QR Code
        </h1>
        
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '15px',
          marginBottom: '25px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <QRCode
            value={googleFormsUrl}
            size={200}
            level="H"
            includeMargin={true}
            fgColor="#2c3e50"
            bgColor="#ffffff"
          />
        </div>
        
        <p style={{
          color: '#666',
          fontSize: '14px',
          marginBottom: '20px',
          lineHeight: '1.5'
        }}>
          Scan this QR code to access the Google Form
        </p>
        
        <div style={{
          backgroundColor: '#e8f4f8',
          padding: '15px',
          borderRadius: '10px',
          border: '1px solid #b8e6f9'
        }}>
          <p style={{
            color: '#2c5282',
            fontSize: '12px',
            margin: '0',
            wordBreak: 'break-all',
            fontFamily: 'monospace'
          }}>
            {googleFormsUrl}
          </p>
        </div>
        
        <button
          onClick={() => {
            navigator.clipboard.writeText(googleFormsUrl)
            alert('URL copied to clipboard!')
          }}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#5a6fd8'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#667eea'}
        >
          Copy URL
        </button>
      </div>
    </div>
  )
}

export default App