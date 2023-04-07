import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

console.log('%cCopyright © 2023. Todos os direitos reservados. Este projeto e seu conteúdo estão protegidos por leis de' +
  ' direitos autorais e outras leis de propriedade intelectual. O uso não autorizado, incluindo a reprodução, ' +
  'distribuição, exibição ou transmissão de qualquer parte deste projeto sem a permissão prévia por escrito do ' +
  'proprietário dos direitos autorais é estritamente proibido.', 'color: #ACEACE; font-weight: bold;')
