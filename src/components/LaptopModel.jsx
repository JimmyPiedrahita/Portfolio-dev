import { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useTheme } from '../hooks/useTheme'
import '../styles/LaptopModel.css'

function Laptop({ ...props }) {
  const { scene } = useGLTF('/models/laptop.glb')
  const meshRef = useRef()
  
  // Animación de rotación suave
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <primitive 
      ref={meshRef}
      object={scene} 
      scale={[2.5, 2.5, 2.5]} 
      position={[0, 0, 0]}
      {...props} 
    />
  )
}

function LaptopModel() {
  const { theme } = useTheme()
  const controlsRef = useRef()

  useEffect(() => {
    // Configurar damping para controles más suaves
    if (controlsRef.current) {
      controlsRef.current.enableDamping = true
      controlsRef.current.dampingFactor = 0.1
    }
  }, [])

  // Componente de loading
  const Loader = () => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      color: 'var(--text-primary)',
      fontSize: '16px'
    }}>
      Cargando modelo 3D...
    </div>
  )

  return (
    <div 
      className="laptop-model-container" 
      style={{ width: '100%', height: '400px' }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 60 }}
        style={{ 
          background: 'transparent'
        }}
      >
        <ambientLight intensity={theme === 'dark' ? 0.4 : 0.8} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={theme === 'dark' ? 0.8 : 1.2}
          color={theme === 'dark' ? '#ffffff' : '#ffffff'}
        />
        <pointLight 
          position={[-5, 5, 5]} 
          intensity={theme === 'dark' ? 0.3 : 0.5}
          color={theme === 'dark' ? '#4080ff' : '#40a0ff'}
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
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI - Math.PI / 3}
          rotateSpeed={0.8}
          enableDamping={true}
          dampingFactor={0.1}
        />
      </Canvas>
    </div>
  )
}

// Precargar el modelo
useGLTF.preload('/models/laptop.glb')

export default LaptopModel
