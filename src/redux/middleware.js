import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbidden = ['fuck', 'spam', 'kira']

export const forbiddenWordsMiddleware = ({dispatch}) => {
    return (next) => {
        return (action) => {
            switch (action.type) {
                case CREATE_POST:
                    const found = forbidden.filter(w => action.payload.title.includes(w))
                    if(found.length){
                        return dispatch(showAlert("Dont spam!"))
                    }
                    break
                default: return next(action)
            }
        }
    }
}
