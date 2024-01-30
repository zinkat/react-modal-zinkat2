import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../src/index';

test('renders modal with content', async () => {
  // Définir une fonction de gestion pour simuler la fermeture du modal
  const handleClose = jest.fn();

  // Rendre le composant Modal avec les propriétés nécessaires
  render(
    <Modal isOpen={true} onClose={handleClose} contentBtn="Close">
      <div>Test Content</div>
    </Modal>
  );

  // Vérifier que le contenu du modal est rendu
  expect(screen.getByText('Test Content')).toBeInTheDocument();

  // Utiliser userEvent pour simuler un clic sur le bouton de fermeture
  userEvent.click(screen.getByText('Close'));

  // Utiliser waitFor pour gérer les actions asynchrones
  await waitFor(() => {
    // Vérifier que la fonction de fermeture a été appelée
    expect(handleClose).toHaveBeenCalled();
  });
});
