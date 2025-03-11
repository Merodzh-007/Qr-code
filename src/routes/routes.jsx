import { Route, Routes } from "react-router"
import QrCodeGenerate from "../pages/qrCodeGenerate/QrCodeGenerate"
import QrCodeScanner from "../pages/QrCodeScanner/QrCodeScanner"
import Error from "../pages/Error"
import MainPage from "../pages/MainPage"
import GenerateHistory from "../pages/GenerateHistory"
import ScanHistory from "../pages/ScanHistory"

const AppRoute = () => {
    const pagesRoute = [
       { path: '/', element: <MainPage /> },
        { path: '/qrCodeGenerate', element: <QrCodeGenerate /> },
        { path: '/qrcodeScanner', element: <QrCodeScanner /> },
        { path: '/generateHistory', element: <GenerateHistory /> },
        { path: '/scanHistory', element: <ScanHistory /> }, 
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