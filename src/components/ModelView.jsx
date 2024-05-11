import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import { IPhone } from './Iphone'
import * as THREE from 'three'

export default function ModelView({index, groupRef , gsapType , controlRef , setRotationSize , size , item}) {
  return (
    <View index={index} id={gsapType} className={`border-2 border-red-500 w-full h-full ${index === 2} ? right-[-100%]  : ''`}>
        <ambientLight intensity={0.3} />
        <PerspectiveCamera  makeDefault position={[0,0,4]}/>
        <Lights />
        <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0,0,0]}>
        <Suspense fallback={<div>Loading</div>}>
            <IPhone />
        </Suspense>
        </group>
        <OrbitControls zoomToCursor={0} ref={controlRef} enableZoom={false} enablePan={ false} rotateSpeed={0.4} target={new THREE.Vector3(0,0,0)} />
    </View>
  )
}
