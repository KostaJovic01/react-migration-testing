import {Button} from '@/components/ui/button';

function App() {
  return (
    <>
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Component Testing Page</h1>
        {/* Section for Button Variants with Mixed Sizes */}
        <section className='mb-6'>
          <h2 className='text-xl mb-2'>
            Test Button Variants with Mixed Sizes
          </h2>
          <div className='grid grid-cols-3 gap-4'>
            <h3 className='text-lg font-semibold col-span-3'>
              Variants with Default Size
            </h3>
            <Button size='default' variant='default'>
              Default Button
            </Button>
            <Button size='default' variant='destructive'>
              Destructive Button
            </Button>
            <Button size='default' variant='outline'>
              Outline Button
            </Button>

            <h3 className='text-lg font-semibold col-span-3 mt-4'>
              Variants with Small Size
            </h3>
            <Button size='sm' variant='secondary'>
              Secondary Button
            </Button>
            <Button size='sm' variant='ghost'>
              Ghost Button
            </Button>
            <Button size='sm' variant='link'>
              Link Button
            </Button>

            <h3 className='text-lg font-semibold col-span-3 mt-4'>
              Variants with Large Size
            </h3>
            <Button size='lg' variant='default'>
              Large Default Button
            </Button>
            <Button size='lg' variant='destructive'>
              Large Destructive Button
            </Button>
            <Button size='lg' variant='outline'>
              Large Outline Button
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
