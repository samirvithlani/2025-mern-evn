import { debounce, put } from "redux-saga/effects";
import { searchTerm, searchTriggered } from "./SearchSlice";

//generators function
function* handlerSearch(action){
    yield put(searchTriggered(action.payload)) //
}
export default function* rootSaga(){
    yield debounce(1000,searchTerm.type,handlerSearch) //
}
//debounce
//debouce help delays execution only runs it once after the last action
//put == dispatch