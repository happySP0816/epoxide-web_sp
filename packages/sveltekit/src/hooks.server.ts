import type { HandleServerError } from '@sveltejs/kit'

/** Handles unexpected errors. This function is not called for expected errors (those thrown with the error function imported from `@sveltejs/kit`). */
export const handleError: HandleServerError = ({ error, status, message }) => {
  if (status !== 404) {
    console.error(error)
  }

  return {
    message,
    code: status.toString(),
  }
}
