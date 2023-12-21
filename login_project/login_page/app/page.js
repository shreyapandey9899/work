import SignIn from './Components/Signin/SignIn';
import OverRight from './Components/overlays/OverRight';

export default function Home() 
{
  const bodyStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    overflow: 'hidden',
    width: '768px',
    maxWidth: '100%',
    minHeight: '480px',
  };
  const mainDivStyle = {
    backgroundColor: '#f6f5f7',
  };

  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center" style={mainDivStyle}>

        <div className='h-4/5 w-3/5 flex justify-around items-center' style={bodyStyle}>
          

            <div className='w-1/2 '>
            <SignIn />
            </div>

            <div className='w-1/2 h-full'>
            <OverRight/>
            </div>

            
          
        </div>
      </div>
    </div>
  );
}
