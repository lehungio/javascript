/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 * @throws {Error} if any parameter is invalid
 */
export const createVisitor = (name, age, ticketId) => {
  if (typeof name !== 'string' || typeof age !== 'number' || typeof ticketId !== 'string') {
    throw new Error('Invalid parameters');
  }
  return { name, age, ticketId };
};

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 * @throws {Error} if visitor is invalid
 */
export const revokeTicket = visitor => {
  if (!visitor || typeof visitor !== 'object' || !('ticketId' in visitor)) {
    throw new Error('Invalid visitor');
  }
  visitor.ticketId = null;
  return visitor;
};

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export const ticketStatus = (tickets, ticketId) => {
  const ticket = tickets[ticketId];

  if (typeof ticket === 'undefined') return 'unknown ticket id';
  if (ticket === null) return 'not sold';

  return `sold to ${ticket}`;
};

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export const simpleTicketStatus = (tickets, ticketId) => tickets[ticketId] ?? 'invalid ticket !!!';

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export const gtcVersion = visitor => visitor?.gtc?.version;