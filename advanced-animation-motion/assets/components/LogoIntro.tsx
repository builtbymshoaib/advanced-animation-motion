// Decorative, nonblocking intro; never use as a loading gate.
export function LogoIntro({brand}: {brand:string}) {
  return <span className="am-logo" aria-hidden="true" style={{display:"inline-block"}}>{brand}</span>;
}
