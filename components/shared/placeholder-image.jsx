import * as React from 'react';
import { LuAnchor, LuCompass, LuCpu, LuShieldCheck, LuLayers } from 'react-icons/lu';
import { cn } from '@/lib/utils';

const iconMap = {
  anchor: LuAnchor,
  compass: LuCompass,
  engine: LuCpu,
  shield: LuShieldCheck,
  layers: LuLayers,
};

/**
 * PlaceholderImage Component
 *
 * @param {string} icon - anchor | compass | engine | shield | layers
 * @param {string} label - Technical label displayed on placeholder
 * @param {string} dimensions - Recommended dimensions (e.g. '1200x800px')
 * @param {string} aspectRatio - CSS aspect ratio class (e.g. 'aspect-16/10', 'aspect-4/3')
 * @param {string} alt - Accessible alt text describing maritime subject matter
 */
export function PlaceholderImage({
  icon = 'anchor',
  label = 'Maritime Asset Placeholder',
  dimensions = '1200 × 800 px',
  aspectRatio = 'aspect-16/10',
  alt = 'Technical maritime photography placeholder',
  className,
}) {
  const IconComponent = iconMap[icon] || LuAnchor;

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'relative w-full overflow-hidden rounded-2xl border border-border/80 bg-[#F0F2F5] flex flex-col items-center justify-center p-8 text-center select-none group',
        aspectRatio,
        className
      )}
    >
      {/* Subtle maritime blueprint coordinate grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#0B2A4A 1px, transparent 1px), radial-gradient(#0B2A4A 1px, #F0F2F5 1px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px',
        }}
        aria-hidden="true"
      />

      {/* Decorative technical corner markings */}
      <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-foreground/20" aria-hidden="true" />
      <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-foreground/20" aria-hidden="true" />
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-foreground/20" aria-hidden="true" />
      <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-foreground/20" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center space-y-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-white shadow-2xs text-primary/70">
          <IconComponent className="h-6 w-6 stroke-[1.25]" />
        </div>
        <div className="space-y-1">
          <p className="font-heading text-sm font-medium tracking-tight text-foreground/80">
            {label}
          </p>
          <p className="text-xs font-mono text-muted-foreground/75 tracking-wider">
            {/* TODO: Replace with real photography in /public/images/ ({dimensions}) */}
            {dimensions} • TODO: Replace with high-res photo
          </p>
        </div>
      </div>
    </div>
  );
}
