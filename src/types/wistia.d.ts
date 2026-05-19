import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type WistiaPlayerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement> & {
    'media-id'?: string;
    aspect?: string;
    autoplay?: string;
    muted?: string;
    'silent-auto-play'?: string;
    'end-video-behavior'?: string;
    'controls-visible-on-load'?: string;
    'play-button'?: string;
    'small-play-button'?: string;
    playbar?: string;
    'fullscreen-button'?: string;
    'settings-control'?: string;
    'volume-control'?: string;
    'playback-rate-control'?: string;
    captions?: string;
    chromeless?: string;
    'plays-inline'?: string;
    'video-foam'?: string;
    seo?: string;
    wmode?: string;
  },
  HTMLElement
>;

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': WistiaPlayerProps;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': WistiaPlayerProps;
    }
  }
}

export {};
