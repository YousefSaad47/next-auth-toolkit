import { Header } from '@/components/auth/header';
import { BackButton } from '@/components/auth/back-button';
import { CardWrapper } from '@/components/auth/card-wrapper';
import { TriangleAlert } from 'lucide-react';

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! something went wrong!"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center justify-center">
        <TriangleAlert className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
