import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import './QrCodeScanner.css'; // Импортируем стили
import { SCAN_DATA } from '../../constans';

const QrCodeScanner = () => {
    const [value, setValue] = useState('');

    const scanRes = (e) => {
        setValue(e[0].rawValue);
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
        console.log(prevData);
        
        
        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData,e[0].rawValue]) )
    };

    const settings = {
        audio: false,
        onOff: true,
        torch: true,
        zoom: true,
        finder: false
    };
    
    // Функция для проверки, является ли строка валидным URL
    const isUrl = (text) => {
        const urlPattern = /^(https?:\/\/)?([\da-z\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/;
        return urlPattern.test(text);
    };

    // Отображение результата: ссылка или текст
    const renderResult = (text) => {
        if (isUrl(text)) {
            return (
                <a href={text} target="_blank" rel="noopener noreferrer">
                    {text}
                </a>
            );
        } else {
            return text;
        }
    };

    return (
        <div className="qr-scanner-container">
            <h1 className="qr-scanner-title">QR Code Scanner</h1>
            <div className="qr-scanner">
                <Scanner
                    
                    components={settings}
                    onScan={scanRes}
                />
            </div>
            <div className="qr-scanner-result">
                <strong>Scanned Result:</strong> {value ? renderResult(value) : 'Отсканируйте QR-код, чтобы увидеть результат здесь'}
            </div>
        </div>
    );
};

export default QrCodeScanner;