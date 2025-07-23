import { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, OrthographicCamera } from '@react-three/drei'
import '../styles/LaptopModel.css'

function Laptop({ ...props }) {
  const { scene } = useGLTF('/models/laptop.glb')
  const meshRef = useRef()
  
  // Animation loop to rotate the laptop model
  useFrame(( _, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
    }
  })
  
  return (
    <primitive 
      ref={meshRef}
      object={scene} 
      scale={[1, 1, 1]} 
      position={[0, -0.5, 0]}
      {...props} 
    />
  )
}

function LaptopModel() {
  const controlsRef = useRef()

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enableDamping = true
      controlsRef.current.dampingFactor = 0.1
    }
  }, [])

  return (
    <div 
      className="laptop-model-container" 
      style={{ width: '100%', height: '400px' }}
    >
      <Canvas
        style={{ 
          background: 'transparent'
        }}
      >
        <OrthographicCamera
          makeDefault
          zoom={100}
          position={[0, 1.5, 4]}
          near={0.1}
          far={1000}
        />
        
        <ambientLight intensity={1} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1}
        />
        <pointLight 
          position={[-5, 5, 5]} 
          intensity={1}
        />
        
        <Suspense fallback={null}>
          <Laptop />
        </Suspense>
        
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          autoRotate={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
          rotateSpeed={0.8}
          enableDamping={true}
          dampingFactor={0.1}
        />
      </Canvas>
    </div>
  )
}

// Preload the model
useGLTF.preload('/models/laptop.glb')

export default LaptopModel
