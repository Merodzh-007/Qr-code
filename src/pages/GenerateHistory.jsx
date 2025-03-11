import { Divider, List, Typography } from "antd"
import { GENERATE_DATA } from "../constans"
import { QRCodeSVG } from "qrcode.react"

const GenerateHistory = () => {
    return (
        <>
        <Divider orientation="left">История генерированных QR-code</Divider>
    <List
      
      bordered
      dataSource={JSON.parse(localStorage.getItem(GENERATE_DATA))}
      renderItem={(item) => (
        <List.Item style={{marginTop:'10px'}}>
          <QRCodeSVG  size={150} value={item} />
          <Typography.Text mark>{item}</Typography.Text> 
        </List.Item>
                )}
            />
        </>
    )
}
export default GenerateHistory