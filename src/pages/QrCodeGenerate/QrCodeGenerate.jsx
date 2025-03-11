import { QRCodeSVG } from 'qrcode.react';
import {  useState } from 'react';
import './QrCodeGenerate.css'; 
import { GENERATE_DATA } from '../../constans';

const QrCodeGenerate = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const clickShow = () => {
        console.log('show text:', value);
        setResult(value);
        setValue('');
         const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
                console.log(prevData);
                
                
                localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData,value]) )
    };

    const onChangeInput = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    return (
        <div className="qr-code-container">
            {result !== '' ? <QRCodeSVG  size={225} value={result} /> :  (<div style={{ 
                color: 'black', 
                width: '240px', 
                height: '242px', 
                
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                border: '1px solid #ccc', // Добавил границу для визуализации
                borderRadius: '8px', // Закругленные углы
                backgroundColor: '#f9f9f9', // Фоновый цвет
                fontSize: '16px', // Размер шрифта
                fontWeight: 'bold' // Жирный шрифт
            }}>
                {value}
            </div>)
           }
           <input
                type="text"
                value={value}
                onChange={onChangeInput}
                placeholder="Введите текст или ссылку"
            />
            <button onClick={clickShow}>Сгенерировать QR-код</button>
        </div>
    );
};



export default QrCodeGenerate;