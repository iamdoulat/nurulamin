'use client';

import { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import html2canvas from 'html2canvas';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { Download, ZoomIn, ZoomOut, Move } from 'lucide-react';
import { Slider } from './ui/slider';
import { motion } from 'framer-motion';

export function PosterGenerator() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(100);
  const posterRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const posterFrameImage = PlaceHolderImages.find((img) => img.id === 'poster-frame');

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setZoom(100);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleDownload = () => {
    if (posterRef.current) {
      html2canvas(posterRef.current, {
        allowTaint: true,
        useCORS: true,
        backgroundColor: null, 
      }).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'campaign-poster.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };
  
  const handleZoomChange = (value: number[]) => {
    setZoom(value[0]);
  };

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-headline bg-green-800 text-white py-2 px-4 inline-block rounded">আপনার ছবি দিয়ে সোশ্যাল মিডিয়ায় শেয়ার করুন</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
            <Card>
                <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Upload Your Photo</h3>
                    <p className="text-muted-foreground mb-4">Select an image file to upload.</p>
                    <div className="space-y-2">
                        <Label htmlFor="photo-upload" className="sr-only">Upload your photo</Label>
                        <Input id="photo-upload" type="file" accept="image/jpeg, image/png, image/gif" onChange={handleImageUpload} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Accepted file types: JPG, PNG, GIF</p>

                    {uploadedImage && (
                        <div className="mt-4 space-y-2">
                            <Label htmlFor="zoom-slider">Adjust Zoom</Label>
                            <div className="flex items-center gap-2">
                                <ZoomOut className="h-5 w-5" />
                                <Slider
                                    id="zoom-slider"
                                    min={50}
                                    max={300}
                                    step={1}
                                    value={[zoom]}
                                    onValueChange={handleZoomChange}
                                />
                                <ZoomIn className="h-5 w-5" />
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            <Button onClick={handleDownload} className="w-full" disabled={!uploadedImage}>
                <Download className="mr-2" />
                Download Image with Frame
            </Button>
        </div>

        <div>
            <div ref={posterRef} className="relative w-full max-w-[600px] mx-auto aspect-[1/1] overflow-hidden">
                 <div ref={constraintsRef} className="absolute inset-0 z-0">
                    {uploadedImage && (
                        <motion.div
                            className="w-full h-full cursor-grab active:cursor-grabbing"
                            drag
                            dragConstraints={constraintsRef}
                            style={{
                                backgroundImage: `url(${uploadedImage})`,
                                backgroundSize: `${zoom}%`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    )}
                </div>
                {posterFrameImage && (
                     <Image
                        src={posterFrameImage.imageUrl}
                        alt="Poster frame"
                        layout="fill"
                        objectFit="contain"
                        className="z-10 pointer-events-none"
                        data-ai-hint={posterFrameImage.imageHint}
                        crossOrigin="anonymous"
                    />
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
