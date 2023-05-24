import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import "./index.css";
// import { Car } from "./Scene";
import { Model } from "./Shoe";

function App() {
  const [customeColor, setCustomeColor] = useState({
    mesh: "black",
    sole: "#FFFFFF",
    stripes: "#FFFFFF",
    laces: "#FFFFFF",
    caps: "black",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setCustomeColor((old) => {
      return { ...old, [name]: value };
    });
  };

  return (
    <div className="App">
      {/* <Canvas>
            <Suspense fallback={null}>
              <ambientLight />
              <spotLight
                intensity={0.9}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <Car />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
              />
            </Suspense>
          </Canvas> */}

      <div className="card">
        <div className="product">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight />
              <spotLight
                intensity={0.9}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <Model customeColor={customeColor} />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
              />
            </Suspense>
          </Canvas>
        </div>
        <h2>Color chooser</h2>
        <div className="colors">
          <div>
            <input
              type="color"
              id="mesh"
              name="mesh"
              value={customeColor.mesh}
              onChange={onChange}
            />
            <label htmlFor="mesh" className="label">
              Main
            </label>
          </div>
          <div>
            <input
              type="color"
              id="stripes"
              name="stripes"
              value={customeColor.stripes}
              onChange={onChange}
            />
            <label htmlFor="stripes" className="label">
              Stripes
            </label>
          </div>
          <div>
            <input
              type="color"
              id="laces"
              name="laces"
              value={customeColor.laces}
              onChange={onChange}
            />
            <label htmlFor="laces" className="label">
              Laces
            </label>
          </div>
          <div>
            <input
              type="color"
              id="sole"
              name="sole"
              value={customeColor.sole}
              onChange={onChange}
            />
            <label htmlFor="sole" className="label">
              sole
            </label>
          </div>
          <div>
            <input
              type="color"
              id="caps"
              name="caps"
              value={customeColor.sole}
              onChange={onChange}
            />
            <label htmlFor="caps" className="label">
              caps
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
