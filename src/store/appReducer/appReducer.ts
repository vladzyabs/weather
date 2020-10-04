const APP_SET_STATUS = 'APP/SET_STATUS'
const APP_SET_ERROR = 'APP/SET_ERROR'
export type RequestStatusType = 'idle' | 'loading' | 'success' | 'failed'

const initialState = {
   status: 'idle' as RequestStatusType,
   error: null as null | string,
}
type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case 'APP/SET_STATUS':
         return {...state, status: action.payload}
      case 'APP/SET_ERROR':
         return {...state, error: action.payload}
      default:
         return state
   }
}

//actions
export const appSetStatus = (status: RequestStatusType) => ({
   type: APP_SET_STATUS,
   payload: status,
} as const)
export type AppSetStatusActionType = ReturnType<typeof appSetStatus>

export const appSetError = (error: string | null) => ({
   type: APP_SET_ERROR,
   payload: error,
} as const)
export type AppSetErrorActionType = ReturnType<typeof appSetError>

type ActionType
   = AppSetStatusActionType
   | AppSetErrorActionType


export default appReducer
