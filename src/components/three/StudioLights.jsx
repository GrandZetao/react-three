import {Environment, Lightformer} from "@react-three/drei";

const StudioLights = () => {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <group>
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[-10, 5, -5]}
                        scale={10}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[10, 0, 1]}
                        scale={10}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                </group>
            </Environment>

            <spotLight
                position={[-1, 10, 0]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
            />

            <spotLight
                position={[0, -25, 10]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
            />

            <spotLight
                position={[0, 15, 5]}
                angle={0.15}
                decay={1}
                intensity={Math.PI}
            />
        </group>
    )
}

export default StudioLights