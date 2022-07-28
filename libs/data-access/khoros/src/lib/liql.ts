// Utility functions for generating LIQL queries

import { LiCollectionName } from "./v2-api-types"


/**
 * Optionally appends a CURSOR clause if the given cursor is defined.
 */
export const withOptionalCursor = (cursor?:string) => (cursor !== undefined) ? `CURSOR '${cursor}`:''

export const select = (collection:LiCollectionName) => `SELECT * FROM ${collection}`

export const selectMessages = () => `SELECT * FROM messages`

/**
 * Select messsages which are topics (first post in a thread)
 * on the given board.
 */
export const getTopicsOnBoard = (board_id:string, cursor?:string) => 
  `SELECT * FROM messages WHERE depth = 0 AND board.id = '${board_id}' ${withOptionalCursor(cursor)}`

