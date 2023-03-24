import { useEffect, useState } from "react";
import { ManifestoInterface } from "interfaces/ManifestoInterface";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import {
  Swiper as SwiperComponent,
  SwiperSlide,
  useSwiper,
} from "swiper/react";
import ReviewCard from "./ReviewCard";

interface ComponentProps {
  manifestoData: Array<ManifestoInterface>;
  isMobile: boolean;
}

// function Floor(props) {
//   return (
//     <mesh {...props} recieveShadow={true}>
//       <boxBufferGeometry args={[20, 1, 10]} />
//       <meshPhysicalMaterial color="white" />
//     </mesh>
//   );
// }

function setOctahedron(g) {
  let pos = g.attributes.position;
  let faces = pos.count / 3;
  let groupStart = 0;
  for (let i = 0; i < faces; i++) {
    g.addGroup(groupStart, 3, i);
    groupStart += 3;
  }
  let uvs = [];
  uvs.push(0.5, 1, 0.06698729810778059, 0.25, 0.9330127018922194, 0.25);
  uvs.push(0.06698729810778059, 0.75, 0.5, 0, 0.9330127018922194, 0.75);
  uvs.push(0.5, 0, 0.9330127018922194, 0.75, 0.06698729810778059, 0.75);
  uvs.push(0.9330127018922194, 0.25, 0.5, 1, 0.06698729810778059, 0.25);
  uvs.push(0.5, 1, 0.06698729810778059, 0.25, 0.9330127018922194, 0.25);
  uvs.push(0.06698729810778059, 0.75, 0.5, 0, 0.9330127018922194, 0.75);
  uvs.push(0.5, 0, 0.9330127018922194, 0.75, 0.06698729810778059, 0.75);
  uvs.push(0.9330127018922194, 0.25, 0.5, 1, 0.06698729810778059, 0.25);
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
}

const ManifestoSection = ({ manifestoData, isMobile }: ComponentProps) => {
  const [hoverState, setHoverState] = useState(-1);
  const [activeSlide, setActiveSlide] = useState(manifestoData[0]);

  const SlideChangeOnHover = ({ activeIndex }) => {
    const swiper = useSwiper();
    useEffect(() => {
      swiper.slideTo(activeIndex + 1);
    }, [activeIndex]);

    return null;
  };

  const vertexShader = `
  varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
`;

  const fragmentShader = `
  uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    uniform vec3 color4;
  
    varying vec2 vUv;
    
    void main() {
      
      gl_FragColor = vec4(mix(mix(color1, color2, vUv.y), mix(color3, color4, vUv.y), vUv.y), 1.0);
    }

`;
  useEffect(() => {
    let scene = new THREE.Scene();
    let camera = isMobile
      ? new THREE.PerspectiveCamera(
          60,
          innerWidth / (innerHeight * 0.4),
          1,
          1000
        )
      : new THREE.PerspectiveCamera(
          60,
          (innerWidth * 0.55) / innerHeight,
          1,
          1000
        ); // set aspect ratio and dimensions of object
    camera.position.set(0, 0, 10); // how close to object we see
    let renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      depthBuffer: true,
    });
    renderer.setClearColor(0x000000, 0);

    if (isMobile) {
      renderer.setSize(innerWidth, innerHeight * 0.4);
    } else {
      renderer.setSize(innerWidth * 0.4, innerHeight * 0.8);
    }
    document
      .getElementById(isMobile ? "id1" : "id2")
      .appendChild(renderer.domElement);

    let controls = new OrbitControls(camera, renderer.domElement);

    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;
    controls.enableZoom = false;
    let radius;
    let maxRadius = 4.5;

    if (isMobile) {
      radius = 4;
    } else {
      radius = (innerWidth / 1000) * 3;
      if (radius > maxRadius) radius = maxRadius;
    }

    let g = new THREE.OctahedronGeometry(radius); // set size of object
    setOctahedron(g);

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color("#81817a") },
        color2: { value: new THREE.Color("#74746e") },
        color3: { value: new THREE.Color("#686863") },
        color4: { value: new THREE.Color("#50504d") },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });

    let tl = new THREE.TextureLoader();
    let m = manifestoData.map((item) => {
      return new THREE.MeshBasicMaterial({
        map: tl.load("/ferrari-cool.png"),
      });
    });

    let o = new THREE.Mesh(g, isMobile ? m : [shaderMaterial, ...m]);

    if (!isMobile) {
      g.groups.forEach((el) => {
        el.materialIndex = 0;
      });
    }
    const edgesShader = {
      uniforms: {
        color: { value: new THREE.Color(0x000000) },
        thickness: { value: 0.01 },
      },
      vertexShader: `
      uniform float thickness;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vec4 projected = projectionMatrix * mvPosition;
        gl_Position = projected + vec4(normalize(mvPosition.xyz) * thickness, 0.0);
      }
      `,
      fragmentShader: `
        uniform vec3 color;
        void main() {
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    };
    if (isMobile) {
      const edgesMaterial = new THREE.ShaderMaterial({
        uniforms: edgesShader.uniforms,
        vertexShader: edgesShader.vertexShader,
        fragmentShader: edgesShader.fragmentShader,
      });

      const edges = new THREE.EdgesGeometry(g);
      const edgesObject = new THREE.LineSegments(edges, edgesMaterial);
      scene.add(edgesObject);
    } else {
      const edgesMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
      });

      const edges = new THREE.EdgesGeometry(g);
      const edgesObject = new THREE.LineSegments(edges, edgesMaterial);
      scene.add(edgesObject);
    }

    scene.add(o);
    let raycaster = new THREE.Raycaster();
    let pointer = new THREE.Vector2();
    let intersected = null;
    let activeFaceIndex = 0;

    if (!isMobile) {
      renderer.domElement.addEventListener(
        "mousemove",
        (event) => {
          let canvasBounds = renderer.domElement.getBoundingClientRect();
          pointer.x =
            ((event.clientX - canvasBounds.left) /
              (canvasBounds.right - canvasBounds.left)) *
              2 -
            1;
          pointer.y =
            -(
              (event.clientY - canvasBounds.top) /
              (canvasBounds.bottom - canvasBounds.top)
            ) *
              2 +
            1;

          raycaster.setFromCamera(pointer, camera);
          intersected = raycaster?.intersectObject(o, false);
          if (intersected?.length > 0) {
            controls.autoRotate = false;
            if (
              activeFaceIndex !== -1 &&
              activeFaceIndex !== intersected[0].faceIndex
            ) {
              g.groups[activeFaceIndex].materialIndex = 0;
            }
            activeFaceIndex = intersected[0].faceIndex;
            g.groups[activeFaceIndex].materialIndex = activeFaceIndex + 1;
            setHoverState(activeFaceIndex);
            setActiveSlide(manifestoData[activeFaceIndex]);
          } else {
            if (activeFaceIndex !== -1) {
              controls.autoRotate = true;
            }
            activeFaceIndex = -1;
            setHoverState(-1); // this should be -1, other values for testing
            g.groups.forEach((el) => (el.materialIndex = 0));
          }
        },
        false
      );
    }

    renderer.setAnimationLoop(() => {
      controls.update();
      renderer.render(scene, camera);
    });
  }, []);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <div id="manifesto-container" className="w-full bg-[#E4E4E4]">
      <div
        id="manifesto-wrapper"
        className="flex flex-col-reverse md:flex-row justify-center"
      >
        <div
          id="card-wrapper"
          className="md:w-7/12 flex items-center justify-center"
        >
          {!isMobile && (
            <SwiperComponent
              slidesPerView={1}
              speed={1500}
              className="flex flex-col items-center"
              allowTouchMove={false}
            >
              <SlideChangeOnHover activeIndex={hoverState} />
              {
                <SwiperSlide>
                  <div
                    ref={ref}
                    className="flex flex-col justify-center items-center p-10 text-[#424244]"
                  >
                    {inView && (
                      <TypeAnimation
                        sequence={["Be curious, spin it!"]}
                        wrapper="div"
                        style={{ fontSize: "20px" }}
                        speed={20}
                      ></TypeAnimation>
                    )}
                  </div>
                </SwiperSlide>
              }
              <SwiperSlide>
                <ReviewCard
                  key={activeSlide?.title}
                  isMobile={isMobile}
                  author={activeSlide?.title}
                  review={activeSlide?.review}
                  logo={activeSlide?.logo}
                />
              </SwiperSlide>
            </SwiperComponent>
          )}
          {isMobile && (
            <div className=" flex flex-1 overflow-x-scroll ">
              {manifestoData.map((client, index) => (
                <ReviewCard
                  key={activeSlide?.title}
                  review={client?.review}
                  author={client?.title}
                  logo={client?.logo}
                  isMobile={isMobile}
                />
              ))}
            </div>
          )}
        </div>
        <div
          className="md:w-5/12 bg-[#E4E4E4]"
          style={{ cursor: "grab" }}
          id={isMobile ? "id1" : "id2"}
        ></div>
      </div>
    </div>
  );
};

export default ManifestoSection;
