import { Canvas } from '@react-three/fiber';
import { Model } from './models/room';
import './App'
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
function App() {
  return (
    <div style={{height:'100vh',backgroundColor:'#000'}}>
     <Canvas camera={{position:[100,100,50]}}>
      <Suspense fallback={null}>
        <ambientLight intensity={1}/>
        <Model/>
        <OrbitControls enableZoom={true} enableRotate={true}/>
      </Suspense>
      

    </Canvas>
    </div>
  );
}

export default App;
