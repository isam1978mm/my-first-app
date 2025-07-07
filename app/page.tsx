'use client';

import { sendGTMEvent } from '@next/third-parties/google';

export default function Page() {
  return (
    <main>
      <h1>Hello from my first Next.js app!</h1>
      <button
        onClick={() =>
          sendGTMEvent({ event: 'cta_click', label: 'Try Now CTA' })
        }
      >
        Try Now
      </button>
    </main>
  );
}
