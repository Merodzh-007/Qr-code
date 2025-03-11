import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router"


const Headers = () => {
    const { Header} = Layout;

    const navigate = useNavigate()
    const location = useLocation()
    const locationItem = () => {
        switch (location.pathname) {
            case '/Qr-code/':
                return ['1']
            case '/Qr-code/qrcodescanner':
                return ['2']
            case '/Qr-code/qrCodeGenerate':
                return ['3']
            case '/Qr-code/generateHistory':
                return ['4']
            case '/Qr-code/scanHistory':
                return ['5']
            default:
                break;
        }
    }

    return (
        <>
            <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          selectedKeys={locationItem()}
          items={
            [{ key: String(1),
                label: `Главная`,
                  onClick: ()=>navigate('/Qr-code/')
              },
             { key: String(2),
                 label: `Сканировать QR-code`,
                  onClick: ()=>navigate('/Qr-code/qrcodeScanner')
                },
            { key: String(3),
                label: `Генирировать QR-code`,
                onClick: ()=>navigate('/Qr-code/qrCodeGenerate')
                  },
              { key: String(4),
                label: `История Ген`,
                onClick: ()=>navigate('/Qr-code/generateHistory')
                  },
              { key: String(5),
                label: `История Cкан`,
                onClick: ()=>navigate('/Qr-code/scanHistory')
                  },
            ]
          }
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
        </>
    )
}

export default Headers