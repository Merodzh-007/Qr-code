import { Divider, List, Typography } from "antd"
import { SCAN_DATA } from "../constans"
import { QRCodeSVG } from "qrcode.react"

const ScanHistory = () => {
    return (
        <>
            <Divider orientation="left">История сканированных qr-code</Divider>
    <List
     
      bordered
      dataSource={JSON.parse(localStorage.getItem(SCAN_DATA))}
      renderItem={(item) => (
        <List.Item>
           <QRCodeSVG  size={150} value={item} />
          <Typography.Text mark>{item}</Typography.Text> 
        </List.Item>
                )}
            />
        </>
    )
}
export default ScanHistory