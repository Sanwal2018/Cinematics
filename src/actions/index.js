export const LAUNCH='LAUNCH';

export function launch() {
      return (dispatch) => {
           setTimeout(() => {
               dispatch({ type: LAUNCH, data: [] })
           }, 1);
       }
   }