import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card className="max-w-sm bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Explore cutting-edge technology and unmatched performance.</p>
      </CardContent>
      <CardFooter>
        <button className="bg-[#FF7300] text-white px-4 py-2 rounded hover:bg-[#FF7300]/90">
          Learn More
        </button>
      </CardFooter>
    </Card>
  );
}

export default FeatureCard;
