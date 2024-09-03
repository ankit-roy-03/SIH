import React, { useState, useRef } from 'react';

const ContractNegotiation = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (canvas) {
      ctxRef.current = canvas.getContext('2d');
      setIsDrawing(true);
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    }
  };

  const draw = (e) => {
    if (!isDrawing || !ctxRef.current) return;
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current.stroke();
  };

  const endDrawing = () => {
    if (ctxRef.current) {
      ctxRef.current.closePath();
    }
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas && ctxRef.current) {
      ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const saveSignature = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'signature.png';
      link.click();
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <header className="bg-green-800 text-white p-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Contract Negotiation</div>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Contracts</a></li>
            <li><a href="#" className="hover:text-gray-300">Profile</a></li>
          </ul>
        </nav>
      </header>

      <div className="contract-page bg-white p-8 m-8 max-w-4xl mx-auto shadow-lg">
        <div className="contract-details mb-8">
          <h1 className="text-3xl text-green-800 mb-4">Contract ID: #12345</h1>
          <p className="status"><strong>Status:</strong> <span className="text-red-600">Negotiation in Progress</span></p>
          <h2 className="text-2xl text-green-800 my-4">Contract Details</h2>
          <p><strong>Crop Type:</strong> Wheat</p>
          <p><strong>Quantity Required:</strong> 500 kg</p>
          <p><strong>Quality Standards:</strong> Organic, Grade A</p>
          <p><strong>Proposed Price:</strong> Farmer's Offer: $0.50/kg, Buyer's Offer: $0.45/kg</p>
          <p><strong>Delivery Date:</strong> October 15, 2024</p>
          <p><strong>Payment Terms:</strong> 50% advance, 50% on delivery</p>
          <button className="btn bg-green-800 text-white px-4 py-2 mt-4">Edit Details</button>
        </div>

        <div className="communication mb-8">
          <h2 className="text-2xl text-green-800 mb-4">Communication</h2>
          <textarea placeholder="Type your message here..." className="w-full h-24 p-4 border border-gray-300 rounded mb-4"></textarea>
          <div className="comm-buttons flex space-x-4">
            <button className="btn bg-green-800 text-white px-4 py-2">Send</button>
            <button className="btn bg-green-800 text-white px-4 py-2">Attach File</button>
            <button className="btn bg-green-800 text-white px-4 py-2">Voice Call</button>
            <button className="btn bg-green-800 text-white px-4 py-2">Video Call</button>
          </div>
        </div>

        <div className="negotiation-tools mb-8">
          <h2 className="text-2xl text-green-800 mb-4">Negotiation Tools</h2>
          <p><strong>Current Offer:</strong> Farmer - $0.50/kg | Buyer - $0.47/kg</p>
          <div className="negotiation-buttons flex space-x-4 mt-4">
            <button className="btn bg-green-800 text-white px-4 py-2">Propose New Price</button>
            <button className="btn bg-green-800 text-white px-4 py-2">Accept Offer</button>
            <input type="date" className="p-2 border border-gray-300 rounded"/>
            <select className="p-2 border border-gray-300 rounded">
              <option>50% advance, 50% on delivery</option>
              <option>100% on delivery</option>
            </select>
            <button className="btn bg-green-800 text-white px-4 py-2">Review Contract</button>
            <button className="btn bg-green-800 text-white px-4 py-2">Accept & Sign</button>
            <button className="btn bg-green-800 text-white px-4 py-2">Reject & Counter</button>
            <button className="btn bg-green-800 text-white px-4 py-2">Help & Support</button>
            <button className="btn bg-green-800 text-white px-4 py-2">Save Draft</button>
          </div>
        </div>

        <div className="digital-signature mb-8">
          <h2 className="text-2xl text-green-800 mb-4">Digital Signature</h2>
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={endDrawing}
            onMouseOut={endDrawing}
            width="400"
            height="200"
            className="border border-gray-300 w-full h-40 bg-white"
          ></canvas>
          <div className="signature-buttons flex space-x-4 mt-4">
            <button onClick={clearCanvas} className="btn bg-green-800 text-white px-4 py-2">Clear</button>
            <button onClick={saveSignature} className="btn bg-green-800 text-white px-4 py-2">Save</button>
          </div>
        </div>
      </div>

      <footer className="bg-green-800 text-white text-center p-4">
        <p>&copy; 2024 Contract Negotiation Platform</p>
      </footer>
    </div>
  );
};

export default ContractNegotiation;
