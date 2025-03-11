import { Route, Routes } from "react-router"
import QrCodeGenerate from "../pages/QrCodeGenerate/QrCodeGenerate"
import QrCodeScanner from "../pages/QrCodeScanner/QrCodeScanner"
import Error from "../pages/Error"
import MainPage from "../pages/MainPage"
import GenerateHistory from "../pages/GenerateHistory"
import ScanHistory from "../pages/ScanHistory"

const AppRoute = () => {
    const pagesRoute = [
       { path: '/Qr-code/', element: <MainPage /> },
        { path: '/Qr-code/qrCodeGenerate', element: <QrCodeGenerate /> },
        { path: '/Qr-code/qrcodeScanner', element: <QrCodeScanner /> },
        { path: '/Qr-code/generateHistory', element: <GenerateHistory /> },
        { path: '/Qr-code/scanHistory', element: <ScanHistory /> }, 
        { path: '/*', element: <Error /> },
    ]
    return (
        <Routes>
            {pagesRoute.map((route) => (
                <Route key={route.path} element={route.element} path={route.path} />
            ))}
        </Routes>
    )
}
export default AppRoute