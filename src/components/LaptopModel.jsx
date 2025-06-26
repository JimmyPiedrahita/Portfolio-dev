import { useRef, useEffect, Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useTheme } from '../hooks/useTheme'
import '../styles/LaptopModel.css'

function Laptop({ ...props }) {
  const { scene } = useGLTF('/models/laptop.glb')
  const meshRef = useRef()
  const [deviceType, setDeviceType] = useState('desktop')
  
  useEffect(() => {
    // Detectar el tipo de dispositivo
    const checkDeviceType = () => {
      const width = window.innerWidth
      if (width <= 480) {
        setDeviceType('phone')
      } else if (width <= 768) {
        setDeviceType('tablet')
      } else {
        setDeviceType('desktop')
      }
    }
    
    checkDeviceType()
    window.addEventListener('resize', checkDeviceType)
    return () => window.removeEventListener('resize', checkDeviceType)
  }, [])
  
  // Animación de rotación suave
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  // Determinar la escala según el tipo de dispositivo
  const getScale = () => {
    switch(deviceType) {
      case 'phone':
        return [1.3, 1.3, 1.3]; // Escala reducida para teléfonos
      case 'tablet':
        return [1, 1, 1]; // Escala para tablets
      default:
        return [1.1, 1.1, 1.1]; // Escala para desktop
    }
  }
  
  // Determinar la posición según el tipo de dispositivo
  const getPosition = () => {
    switch(deviceType) {
      case 'phone':
        return [0, -0.5, 0]; // Ajuste de posición para teléfonos (menos desplazamiento)
      default:
        return [0, -0.5, 0]; // Posición para otros dispositivos
    }
  }

  return (
    <primitive 
      ref={meshRef}
      object={scene} 
      scale={getScale()} 
      position={getPosition()}
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
