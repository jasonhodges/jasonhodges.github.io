import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, SecurityContext } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { MARKED_OPTIONS, provideMarkdown } from 'ngx-markdown';
import { routes } from './app.routes';
import { markedOptionsFactory } from './marked-options-factory';
import { AnchorService } from './services/anchor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideMarkdown({
      loader: HttpClient,
      markedOptions: {
        provide: MARKED_OPTIONS,
        useFactory: markedOptionsFactory,
        deps: [AnchorService],
      },
      markedExtensions: [gfmHeadingId()],
      // clipboardOptions: {
      //   provide: CLIPBOARD_OPTIONS,
      //   useValue: { buttonComponent: ClipboardButtonComponent },
      // },
      sanitize: SecurityContext.NONE,
    }),
    provideClientHydration(),
  ],
};
