import { useEffect, useRef } from 'react';

const LAST_FRAME = 96;
const frameUrl = (frame: number) => `/media/portrait-frames/frame-${String(frame).padStart(3, '0')}.webp`;

export function HeroPortrait() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const surface = canvas.current;
    const track = surface?.closest<HTMLElement>('.hero-scroll-track');
    const stage = track?.querySelector<HTMLElement>('.portrait-hero');
    const context = surface?.getContext('2d');
    if (!surface || !track || !stage || !context) return;

    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const frames = new Map<number, HTMLImageElement>();
    const pending = new Set<number>();
    const failed = new Set<number>();
    let disposed = false;
    let animationFrame = 0;
    let wanted = 0;
    let drawn = -1;
    let start = 0;
    let distance = 1;

    const draw = () => {
      if (disposed || preference.matches) return;
      const image = frames.get(wanted);
      if (!image || drawn === wanted) return;
      context.drawImage(image, 0, 0, surface.width, surface.height);
      drawn = wanted;
      surface.dataset.frame = String(wanted);
      surface.style.opacity = '1';
    };

    // Load the requested frame first, then neighbors, with bounded concurrency.
    // Late responses can only draw the current target, never an obsolete frame.
    const pump = () => {
      if (disposed || preference.matches) return;
      const order = Array.from({ length: LAST_FRAME + 1 }, (_, index) => index)
        .sort((a, b) => Math.abs(a - wanted) - Math.abs(b - wanted));
      for (const index of order) {
        if (pending.size >= 4) break;
        if (frames.has(index) || pending.has(index) || failed.has(index)) continue;
        pending.add(index);
        const image = new Image();
        image.src = frameUrl(index);
        void image.decode().then(() => {
          if (!disposed && !preference.matches) { frames.set(index, image); draw(); }
        }).catch(() => { failed.add(index); }).finally(() => {
          pending.delete(index);
          pump();
        });
      }
    };

    const update = () => {
      animationFrame = 0;
      if (preference.matches) return;
      const progress = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
      wanted = Math.round(progress * LAST_FRAME);
      draw();
      pump();
    };
    const schedule = () => {
      if (!animationFrame && !preference.matches) animationFrame = requestAnimationFrame(update);
    };
    const measure = () => {
      start = track.getBoundingClientRect().top + window.scrollY;
      distance = Math.max(1, track.offsetHeight - stage.offsetHeight);
      schedule();
    };
    const motionChanged = () => {
      surface.style.opacity = '0';
      drawn = -1;
      if (preference.matches) {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
        frames.clear();
      } else measure();
    };
    const resize = new ResizeObserver(measure);
    resize.observe(track);
    resize.observe(stage);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', measure, { passive: true });
    preference.addEventListener('change', motionChanged);
    measure();
    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      resize.disconnect();
      frames.clear();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', measure);
      preference.removeEventListener('change', motionChanged);
    };
  }, []);

  return <div className="hero-portrait">
    <img src="/media/david-eid-poster.webp" width={960} height={960} alt="Studio portrait of David Eid" fetchPriority="high" />
    <canvas ref={canvas} width={640} height={640} aria-hidden="true" />
  </div>;
}
