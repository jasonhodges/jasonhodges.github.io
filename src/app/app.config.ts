import { provideContent, withMarkdownRenderer } from '@analogjs/content';
import { provideFileRouter } from '@analogjs/router';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withViewTransitions } from '@angular/router';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { MARKED_OPTIONS, provideMarkdown } from 'ngx-markdown';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideMarkdown({
      loader: HttpClient,
      markedOptions: {
        provide: MARKED_OPTIONS,
        useValue: {
          gfm: true
        }
      },
      markedExtensions: [gfmHeadingId()],
    }),
    provideFileRouter(withViewTransitions()),
    provideHttpClient(withFetch()),
    // provideClientHydration(),
    provideContent(withMarkdownRenderer()),
  ],
};
