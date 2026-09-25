import { useEffect, useRef, useState } from 'react';

export function HeroPortrait() {
  const video = useRef<HTMLVideoElement>(null);
  const [motion, setMotion] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const element = video.current;
    if (!motion || !element || failed) return;
    // Leave the poster visible when the browser declines autoplay.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !document.hidden) void element.play().catch(() => {});
      else element.pause();
    });
    const visibility = () => {
      if (document.hidden) element.pause();
      else if (element.getBoundingClientRect().bottom > 0) void element.play().catch(() => {});
    };
    observer.observe(element);
    document.addEventListener('visibilitychange', visibility);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility); };
  }, [motion, failed]);

  return <div className="hero-portrait">
    {motion && !failed ? <video
      ref={video}
      autoPlay muted loop playsInline controls={false} preload="none"
      poster="/media/david-eid-poster.webp"
      width={960} height={960}
      aria-label="Studio portrait of David Eid"
      onError={(event) => { if (event.target === event.currentTarget) setFailed(true); }}
    >
      <source src="/media/david-eid-portrait-mobile.mp4" type="video/mp4" media="(max-width: 600px)" />
      <source src="/media/david-eid-portrait.mp4" type="video/mp4" />
    </video> : <img src="/media/david-eid-poster.webp" width={960} height={960} alt="Studio portrait of David Eid" fetchPriority="high" />}
  </div>;
}
