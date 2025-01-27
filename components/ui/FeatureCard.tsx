import React, { memo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const FeatureCard = memo(function FeatureCard({ title, description, imageUrl }: FeatureCardProps) {
  return (
    <Card className="max-w-sm bg-gray-800 text-white">
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-cover rounded-t-lg"
            loading="lazy"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Explore cutting-edge technology and unmatched performance.</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="gradient"
          className="w-full"
        >
          <span className="relative z-10">Learn More</span>
        </Button>
      </CardFooter>
    </Card>
  );
});

export default FeatureCard;
