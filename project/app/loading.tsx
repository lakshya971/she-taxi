import Loading from '@/components/ui/loading';

export default function AppLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loading 
        message="Loading SheTaxi..." 
        size="lg" 
        variant="full-screen"
      />
    </div>
  );
}
