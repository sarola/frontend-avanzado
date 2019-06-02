import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let messageService: MessageService;

  beforeEach( () => {
    messageService = new MessageService();
  });

  it('debería ser más grande el array de mensajes despues de añadir un mensaje, siendo éste mensaje el último elemento', () => {

    const arrayLenghtAntes = messageService.messages.length;
    const mensajeNuevo = 'mensaje';
    messageService.add(mensajeNuevo);
    const arrayLenghtDespues = messageService.messages.length;
    const ultimoElemento = messageService.messages[messageService.messages.length - 1];

    expect(ultimoElemento).toEqual(mensajeNuevo);
    expect(arrayLenghtDespues).toBeGreaterThan(arrayLenghtAntes);

  });

  it('debería limpiar un array vacío', () => {
    messageService.messages = [];
    messageService.clear();
    expect(messageService.messages.length === 0);

  });

  it('debería limpiar un array con elementos', () => {
    messageService.messages = ['1', '2', '3'];
    messageService.clear();
    expect(messageService.messages.length === 0);

  });


  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [MessageService]
  //   });
  // });
  //
  // it('should be created', inject([MessageService], (service: MessageService) => {
  //   expect(service).toBeTruthy();
  // }));
});
