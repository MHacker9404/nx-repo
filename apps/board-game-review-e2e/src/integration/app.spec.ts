describe('board-game-review', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.contains('Board Game Hoard: Review');

    cy.contains('a', 'game-a').within(() => {
      cy.contains('/5');
      cy.contains('$35.00');
    });
    cy.contains('a', 'game-b').within(() => {
      cy.contains('/5');
      cy.contains('$19.00');
    });
    cy.contains('a', 'game-c').within(() => {
      cy.contains('/5');
      cy.contains('$20.00');
    });
  });
});
