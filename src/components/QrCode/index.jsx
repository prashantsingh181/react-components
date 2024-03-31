import { useState } from "react";
import "./styles.css";
import QRCode from "react-qr-code";

export default function QrCode() {
  const [inputValue, setInputValue] = useState("");
  const [qrCode, setQrCode] = useState("");
  function handleChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <div>
      <input value={inputValue} onChange={handleChange} name="qrcodevalue" />
      <button onClick={() => setQrCode(inputValue)}>Generate</button>
      <QRCode value={qrCode} size={400} />
    </div>
  );
}
