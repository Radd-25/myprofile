import{r as f,a as b,T as j,C as g,P as z,M as E,j as o,c as N}from"./Triangle-Dhpe70Hh.js";const B=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,P=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {                int index = 0;                                              for (int i = 0; i < 2; i++) {                                    ColorStop currentColor = colors[i];                         bool isInBetween = currentColor.position <= factor;         index = int(mix(float(index), float(i), float(isInBetween)));   }                                                           ColorStop currentColor = colors[index];                     ColorStop nextColor = colors[index + 1];                    float range = nextColor.position - currentColor.position;   float lerpFactor = (factor - currentColor.position) / range;   finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;function _(s){const{colorStops:p=["#8ec5ff","#8ec5ff","#8ec5ff"],amplitude:d=1,blend:v=.5}=s,l=f.useRef(s);l.current=s;const h=f.useRef(null);return f.useEffect(()=>{const t=h.current;if(!t)return;const a=new b({alpha:!0,premultipliedAlpha:!0,antialias:!0}),e=a.gl;e.clearColor(0,0,0,0),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.canvas.style.backgroundColor="transparent";let r;function c(){if(!t)return;const i=t.offsetWidth,n=t.offsetHeight;a.setSize(i,n),r&&(r.uniforms.uResolution.value=[i,n])}window.addEventListener("resize",c);const u=new j(e);u.attributes.uv&&delete u.attributes.uv;const y=p.map(i=>{const n=new g(i);return[n.r,n.g,n.b]});r=new z(e,{vertex:B,fragment:P,uniforms:{uTime:{value:0},uAmplitude:{value:d},uColorStops:{value:y},uResolution:{value:[t.offsetWidth,t.offsetHeight]},uBlend:{value:v}}});const w=new E(e,{geometry:u,program:r});t.appendChild(e.canvas);let m=0;const C=i=>{m=requestAnimationFrame(C);const{time:n=i*.01,speed:S=1}=l.current;r.uniforms.uTime.value=n*S*.1,r.uniforms.uAmplitude.value=l.current.amplitude??1,r.uniforms.uBlend.value=l.current.blend??v;const A=l.current.colorStops??p;r.uniforms.uColorStops.value=A.map(R=>{const x=new g(R);return[x.r,x.g,x.b]}),a.render({scene:w})};return m=requestAnimationFrame(C),c(),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",c),t&&e.canvas.parentNode===t&&t.removeChild(e.canvas),e.getExtension("WEBGL_lose_context")?.loseContext()}},[d]),o.jsx("div",{ref:h,className:"w-full h-full"})}function F(){return o.jsxs("div",{className:"min-h-screen justify-center bg-[#0066f5] relative",children:[o.jsx("div",{className:"scale-100 w-full h-screen pointer-events-none",children:o.jsx(_,{})}),o.jsxs("div",{className:"-top-15 left-0 scale-50 absolute",children:[o.jsx("img",{src:"/images/imphnen.png",className:"z-5"}),o.jsxs("div",{className:"text-white text-5xl z-10 text-center",children:[o.jsx("p",{children:"ini halaman 404, antara gw salah setting atau lu typo."}),o.jsxs("p",{children:["balik ke main page teken ",o.jsx("a",{href:"/",children:o.jsx("span",{className:"underline",children:"bagian ini."})})]})]})]})]})}N.createRoot(document.getElementById("notfound")).render(o.jsx(F,{}));
