import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Wifi, Plus, Trash2 } from 'lucide-react'

// Mock function to simulate AR scanning
const scanItem = () => {
  const items = [
    { name: 'Router', bandwidth: 100 },
    { name: 'Smart TV', bandwidth: 25 },
    { name: 'Thermostat', bandwidth: 1 },
    { name: 'Smart Speaker', bandwidth: 5 },
    { name: 'Security Camera', bandwidth: 10 }
  ];
  return items[Math.floor(Math.random() * items.length)];
}

export default function ARDeviceScanner() {
  const [scannedItems, setScannedItems] = useState([]);
  const [isScanning, setIsScanning] = useState(false);
  const [manualInput, setManualInput] = useState('');

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      const newItem = scanItem();
      setScannedItems([...scannedItems, newItem]);
      setIsScanning(false);
    }, 2000);
  }

  const handleManualAdd = () => {
    if (manualInput.trim()) {
      setScannedItems([...scannedItems, { name: manualInput.trim(), bandwidth: Math.floor(Math.random() * 20) + 1 }]);
      setManualInput('');
    }
  }

  const handleRemoveItem = (index) => {
    const newItems = scannedItems.filter((_, i) => i !== index);
    setScannedItems(newItems);
  }

  const totalBandwidth = scannedItems.reduce((sum, item) => sum + item.bandwidth, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-600">AR Device Scanner</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex justify-center">
              <Button 
                onClick={handleScan} 
                disabled={isScanning}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                {isScanning ? (
                  <>
                    Scanning...
                    <Camera className="ml-2 h-5 w-5 animate-pulse" />
                  </>
                ) : (
                  <>
                    Start AR Scan
                    <Camera className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Wifi className="mr-2 h-5 w-5" />
                Scanned Devices
              </h2>
              {scannedItems.length === 0 ? (
                <p className="text-gray-500 text-center">No devices scanned yet</p>
              ) : (
                <ul className="space-y-2">
                  {scannedItems.map((item, index) => (
                    <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <span>{item.name} - {item.bandwidth} Mbps</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleRemoveItem(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Input 
                placeholder="Add device manually" 
                value={manualInput}
                onChange={(e) => setManualInput(e.target.value)}
              />
              <Button onClick={handleManualAdd} className="bg-blue-500 hover:bg-blue-600">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="border-t pt-4">
              <p className="text-lg font-semibold text-center">
                Total Bandwidth Usage: {totalBandwidth} Mbps
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}