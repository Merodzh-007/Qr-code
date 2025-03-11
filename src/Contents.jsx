import { Layout, theme } from "antd";
import AppRoute from "./routes/routes"

const Contents = () => {
  const { Content } = Layout;

      const {
    token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Content
        style={{
                        padding: '0 48px',
               height: 'calc(100vh - 64px - 70px)', // 64px - высота Header, 70px - высота Footer
    overflow: 'auto',
                    }}
                    
      >
        <div
          style={{
            padding: 24,
            minHeight: 600,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <AppRoute />
        </div>
      </Content>
        </>
    )
}
export default Contents