'use client';

import { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import html2canvas from 'html2canvas';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { Download } from 'lucide-react';
import { motion, PanInfo } from 'framer-motion';
import { Slider } from './ui/slider';

export function PosterGenerator() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const posterRef = useRef<HTMLDivElement>(null);

  const posterFrameImage = PlaceHolderImages.find((img) => img.id === 'poster-frame');

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setScale(1);
        setPosition({ x: 0, y: 0 });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleDownload = () => {
    if (posterRef.current) {
      // Temporarily hide controls if any for the screenshot
      html2canvas(posterRef.current, {
        allowTaint: true,
        useCORS: true,
        backgroundColor: null, 
        scale: 2 // Increase resolution of the downloaded image
      }).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'campaign-poster.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };

  const handleWheel = (event: React.WheelEvent) => {
    event.preventDefault();
    const newScale = scale - event.deltaY * 0.001;
    // Clamp scale between a min and max value
    setScale(Math.min(Math.max(0.5, newScale), 4));
  };

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setPosition(prev => ({
      x: prev.x + info.delta.x,
      y: prev.y + info.delta.y,
    }));
  };

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-headline bg-green-800 text-white py-2 px-4 inline-block rounded">
          আপনার ছবি দিয়ে সোশ্যাল মিডিয়ায় শেয়ার করুন
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 md:order-1">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Upload Your Photo</h3>
              <p className="text-muted-foreground mb-4">Select an image file to upload. Then, drag to move and scroll to zoom.</p>
              <div className="space-y-2">
                <Label htmlFor="photo-upload" className="sr-only">
                  Upload your photo
                </Label>
                <Input
                  id="photo-upload"
                  type="file"
                  accept="image/jpeg, image/png, image/gif"
                  onChange={handleImageUpload}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Accepted file types: JPG, PNG, GIF</p>
              {uploadedImage && (
                <div className="mt-4 space-y-2">
                  <Label htmlFor="zoom-slider">Adjust Zoom</Label>
                  <Slider
                    id="zoom-slider"
                    min={0.5}
                    max={4}
                    step={0.01}
                    value={[scale]}
                    onValueChange={(value) => setScale(value[0])}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          <Button onClick={handleDownload} className="w-full" disabled={!uploadedImage}>
            <Download className="mr-2" />
            Download Image with Frame
          </Button>
        </div>

        <div className="md:order-2">
          <div
            ref={posterRef}
            className="relative w-full max-w-[600px] mx-auto overflow-hidden bg-gray-200 dark:bg-gray-800"
            onWheel={handleWheel}
          >
             {uploadedImage && (
              <motion.div
                className="absolute w-full h-full cursor-grab active:cursor-grabbing z-0"
                drag
                onDrag={handleDrag}
                dragConstraints={{
                  left: -300 * (scale - 1),
                  right: 300 * (scale - 1),
                  top: -300 * (scale - 1),
                  bottom: 300 * (scale - 1),
                }}
                dragMomentum={false}
              >
                <motion.div
                  className="w-full h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${uploadedImage})`,
                  }}
                  animate={{ scale: scale, x: position.x, y: position.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.1 }}
                />
              </motion.div>
            )}
            {posterFrameImage && (
              <Image
                src={posterFrameImage.imageUrl}
                alt="Poster frame"
                width={600}
                height={600}
                className="relative w-full h-auto z-10 pointer-events-none"
                data-ai-hint={posterFrameImage.imageHint}
                crossOrigin="anonymous"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
